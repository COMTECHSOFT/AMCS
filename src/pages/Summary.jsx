import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();

  const accountStatusSelect = [
    "Inforce",
    "Inactive",
    "Maturity Done",
    "Lapse",
    "Refund",
    "Transfer",
    "No Communication",
  ];

  const [accStatus, setAccStatus] = useState("");

  const [agency, setAgency] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/agency_name.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgency(data.AGENCY_NAME));
  }, []);

  const [prEntryInfo, setPrEntryInfo] = useState([]);
  const findPrEntryInfo = prEntryInfo?.find((data) => data);
  useEffect(() => {
    fetch("http://192.168.31.94/api/pr_entry_info.php?FDPS_NO=0123000041")
      .then((res) => res.json())
      .then((data) => setPrEntryInfo(data.PR_info));
  }, []);

  const [branchCode, setBranchCode] = useState("0019");
  const [agencyData, setAgencyData] = useState([]);
  const allData = agencyData?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${branchCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAgencyData(data.agency_details);
      });
  }, [branchCode]);

  const [mainData, setMainData] = useState([]);
  const findAllMainData = mainData?.find((data) => data);
  // console.log(findAllMainData);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=0123000041`)
      .then((res) => res.json())
      .then((data) => setMainData(data.Proposal_info));
  }, []);

  const entryDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const allDatas = {
    ...allData,
    Entry_Date: entryDate,
    Account_Status: accStatus,
  };

  const handleSave = () => {
    console.log(allDatas);
    // fetch("http://192.168.31.94/api/indert_data.php", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(allDatas),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  const handleCrear = (e) => {};
  return (
    <div className="p-4" style={{ backgroundColor: "#E5E7EB" }}>
      <div className="mt-4 border-2 border-gray-400 p-4 2 bg-gray-300">
        <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Branch Code
            </label>
            <select
              className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={branchCode}
              onChange={(e) => setBranchCode(e.target.value)}
            >
              <option value="Choose Branch Code">Choose Branch Code</option>
              {agency?.map((item) => (
                <option value={item.AGENCY_CODE} key={item.AGENCY_CODE}>
                  {item.AGENCY_CODE}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-52 ">
              Branch Name
            </label>
            <input
              type="text"
              name=""
              value={allData?.AGENCY_NAME}
              className="mb-2 h-8 w-full bg-white cursor-not-allowed pl-2"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              District Code
            </label>
            <input
              type="text"
              name=""
              value={allData?.SUB_ZONE_CODE}
              className="mb-2 h-8 w-full bg-white cursor-not-allowed pl-2"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-52">
              Distict Name
            </label>
            <input
              type="text"
              name=""
              value={allData?.SUB_ZONE_NAME}
              className="mb-2 h-8 w-full bg-white cursor-not-allowed pl-2"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Head Office Code
            </label>
            <input
              type="text"
              name=""
              value={allData?.Z_CODE}
              className="mb-2 h-8 w-full bg-white cursor-not-allowed pl-2"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-52">
              Head Office Name
            </label>
            <input
              type="text"
              name=""
              value={allData?.Z_NAME}
              className="mb-2 h-8 w-full bg-white cursor-not-allowed pl-2"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Entry Date
            </label>
            <input
              type="text"
              name="entryDate"
              value={entryDate}
              id=""
              className="mb-2 h-8 w-full pl-1 bg-white cursor-not-allowed"
              disabled
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-52">
              Account Status
            </label>
            <select
              className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={accStatus}
              onChange={(e) => setAccStatus(e.target.value)}
            >
              {accountStatusSelect?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>

      <div className="bg-indigo-300 p-10 mt-12">
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
            onClick={handleSave}
          >
            Save
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
          >
            <Link
              to="/amanaGroup"
              state={{
                ...allData,
                entryDate: entryDate,
                accStatus: accStatus,
                findPrEntryInfo,
                findAllMainData,
              }}
            >
              First PR Entry
            </Link>
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
            onClick={handleCrear}
          >
            Clear
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl `}
          >
            <Link to="/summary">Exit</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
