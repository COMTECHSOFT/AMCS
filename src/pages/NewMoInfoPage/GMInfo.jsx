import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const DGMInfo = () => {
  const handleDOB = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setDateOB(getDate);
  };

  const handleDOAPT = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setDoapt(getDate);
  };

  const handleLICISSUE = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setLicIssDate(getDate);
  };

  const handleLIC_EXPIRY = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setLicExpDate(getDate);
  };

  const handleLIC_RENEW = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setLicRenwDate(getDate);
  };
  const handleEF_DATE = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setEffDate(getDate);
  };
  const [gmCode, setGmCode] = useState(0);
  const [datas, setDatas] = useState([]);
  const moData = datas?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/gm_info.php?CODE=${gmCode}`) // 000099
      .then((res) => res.json())
      .then((data) => setDatas(data.gm_info));
  }, [gmCode]);

  const [agencyData, setAgencyData] = useState([]);
  const branchData = agencyData?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${moData?.AGENCY_CODE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAgencyData(data.agency_details);
      });
  }, [moData?.AGENCY_CODE]);

  const [agency, setAgency] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/agency_name.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgency(data.AGENCY_NAME));
  }, []);

  const [agencyName, setAgencyName] = useState("");
  const [branchDatas, setBranchDatas] = useState([]);
  const getBranchDatas = branchDatas?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/agency_code.php?NAME=${agencyName}`)
      .then((res) => res.json())
      .then((data) => setBranchDatas(data.CODE));
  }, [agencyName]);

  const rct = ["P", "DA"];
  const [rctp, setRct] = useState("");

  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [mrNo, setMrNo] = useState("");
  const [mrAmt, setMrAmt] = useState("");
  const [dob, setDateOB] = useState("");
  const [doapt, setDoapt] = useState("");
  const [liceNum, setLicNum] = useState("");
  const [licIssDate, setLicIssDate] = useState("");
  const [licExpDate, setLicExpDate] = useState("");
  const [licRenwDate, setLicRenwDate] = useState("");
  const [effDate, setEffDate] = useState("");
  const [avp, setAvp] = useState("");
  const [jvp, setJvp] = useState("");
  const [expr, setExpr] = useState("");

  const handleSave = () => {
    const gmSaveData = {
      CODE: gmCode,
      NAME: name,
      F_NAME: fName,
      ADDRESS1: address1,
      ADDRESS2: address2,
      PHONE2: phone2,
      MRNO: mrNo,
      MR_AMT: mrAmt,
      DOB: dob,
      DOAPT: doapt,
      LIC_NO: liceNum,
      LIC_ISSUE: licIssDate,
      LIC_EXPIRY: licExpDate,
      LIC_RENEW: licRenwDate,
      EF_DATE: effDate,
      RCT: rctp,
      ZONE: getBranchDatas?.Z_CODE,
      SUB_ZONE: getBranchDatas?.SUB_ZONE_CODE,
      AGENCY_CODE: getBranchDatas?.AGENCY_CODE,
      A_VP: avp,
      JVP: jvp,
      EXPR: expr,
    };
    console.log(gmSaveData);
    if (!gmCode) {
      toast.error("Unit Manager Code Empty!!!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      const url = "http://192.168.31.94/api/gm_insert.php";
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(gmSaveData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      toast.success("Data saved successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  const handleClear = () => {
    window.location.reload();
  };

  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));
  if (!getItem) {
    return navigate("/login");
  }
  return (
    <div className="text-xs">
      <nav className="bg-cyan-900 text-center py-4">
        <h1 className="text-white text-xl font-bold uppercase">
          NEW GM OPEN INFORMATION
        </h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-300">
        <div className="border-r-2 border-white p-10 col-span-5">
          <form action="" className="grid grid-cols-1 p-4  ">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                PIN No.
              </label>
              <input type="text" className="mb-2 h-6 w-full pl-1" />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                GM Code No.
              </label>
              <input
                type="text"
                name=""
                onChange={(e) => {
                  setGmCode(e.target.value);
                }}
                className="mb-2 h-6 w-full font-bold pl-2"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Name
              </label>
              <input
                type="text"
                value={moData?.NAME}
                onChange={(e) => setName(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                father's Name
              </label>
              <input
                type="text"
                value={moData?.F_NAME}
                onChange={(e) => setFName(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Present Address
              </label>
              <textarea
                value={moData?.ADDRESS1}
                onChange={(e) => setAddress1(e.target.value)}
                rows="4"
                className="mb-2 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Permanent Address
              </label>
              <textarea
                value={moData?.ADDRESS2}
                onChange={(e) => setAddress2(e.target.value)}
                rows="4"
                className="mb-2 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60">
                Date of Birth
              </label>
              {moData?.DOB ? (
                <input
                  type="text"
                  value={moData?.DOB}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  value={moData?.DOB}
                  onChange={handleDOB}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Mobile Number
              </label>
              <input
                type="phone"
                value={moData?.PHONE2}
                onChange={(e) => setPhone2(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR No.
              </label>
              <input
                type="phone"
                value={moData?.MRNO}
                onChange={(e) => setMrNo(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR Amount
              </label>
              <input
                type="phone"
                value={moData?.MR_AMT}
                onChange={(e) => setMrAmt(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60">
                Date of Apoinment
              </label>
              {moData?.DOAPT ? (
                <input
                  type="text"
                  value={moData?.DOAPT}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  onChange={handleDOAPT}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Number
              </label>
              <input
                type="text"
                value={moData?.LIC_NO}
                onChange={(e) => setLicNum(e.target.value)}
                className="mb-2 h-6 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60">
                Licence Issue Date
              </label>
              {moData?.LIC_ISSUE ? (
                <input
                  type="text"
                  value={moData?.LIC_ISSUE}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  onChange={handleLICISSUE}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60">
                Licence Expire Date
              </label>
              {moData?.LIC_EXPIRY ? (
                <input
                  type="text"
                  value={moData?.LIC_EXPIRY}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  onChange={handleLIC_EXPIRY}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Renew Date
              </label>
              {moData?.LIC_RENEW ? (
                <input
                  type="text"
                  value={moData?.LIC_RENEW}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  onChange={handleLIC_RENEW}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60">
                Effect Date
              </label>
              {moData?.EF_DATE ? (
                <input
                  type="text"
                  value={moData?.EF_DATE}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              ) : (
                <input
                  type="date"
                  onChange={handleEF_DATE}
                  className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Recruiment Type
              </label>
              {moData?.RCT ? (
                <input
                  type="text"
                  value={
                    moData?.RCT === "DA" ? "Directly Appointed" : "Promoted"
                  }
                  className="mb-2 h-6 w-full pl-2 font-bold"
                />
              ) : (
                <select
                  className="w-full pl-2 font-bold mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                  onChange={(e) => setRct(e.target.value)}
                >
                  <option>Select</option>
                  {rct?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </form>
        </div>
        <div className="col-span-7 ">
          <div className="flex flex-col md:flex-row gap-4 border-b-2 border-white p-10">
            <form action="" className="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[350px]">
                  Branch Code & Name
                </label>
                {branchData?.AGENCY_NAME ? (
                  <input
                    type="text"
                    value={branchData?.AGENCY_NAME}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                ) : (
                  <select
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                    onChange={(e) => setAgencyName(e.target.value)}
                  >
                    <option>Select</option>
                    {agency?.map((item) => (
                      <option
                        defaultValue={item.AGENCY_NAME}
                        key={item.AGENCY_CODE}
                      >
                        {item.AGENCY_NAME}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[350px]">
                  District Office
                </label>
                <input
                  type="text"
                  value={
                    getBranchDatas?.SUB_ZONE_CODE
                      ? getBranchDatas?.SUB_ZONE_CODE
                      : branchData?.SUB_ZONE_CODE
                  }
                  disabled
                  className="mb-2 bg-white h-6 text-xs w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[350px]">
                  Head office Code
                </label>
                <input
                  type="text"
                  value={
                    getBranchDatas?.Z_CODE
                      ? getBranchDatas?.Z_CODE
                      : branchData?.Z_CODE
                  }
                  disabled
                  className="mb-2 h-6 bg-white text-xs w-full pl-2 font-bold"
                />
              </div>
            </form>
            <form action="" className="w-[450px]">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  value={
                    getBranchDatas?.AGENCY_CODE
                      ? getBranchDatas?.AGENCY_CODE
                      : branchData?.AGENCY_CODE
                  }
                  disabled
                  className="mb-2 bg-white h-6 text-xs w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={
                    getBranchDatas?.SUB_ZONE_NAME
                      ? getBranchDatas?.SUB_ZONE_NAME
                      : branchData?.SUB_ZONE_NAME
                  }
                  disabled
                  className="mb-2 bg-white h-6 text-xs w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  value={
                    getBranchDatas?.Z_NAME
                      ? getBranchDatas?.Z_NAME
                      : branchData?.Z_NAME
                  }
                  disabled
                  className="mb-2 bg-white h-6 text-xs w-48 md:w-full pl-2 font-bold"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-10 justify-center">
            <form action="" className="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  ED Code
                </label>
                <input
                  type="text"
                  value={moData?.JVP}
                  onChange={(e) => setAvp(e.target.value)}
                  className="mb-2 h-6 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  D Code
                </label>
                <input
                  type="text"
                  value={moData?.A_VP}
                  onChange={(e) => setJvp(e.target.value)}
                  className="mb-2 h-6 w-32 font-bold text-right pr-2"
                />
              </div>
            </form>
            <form action="" className="">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-6 w-48 md:w-full pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-6 w-48 md:w-full pl-2"
                />
              </div>
            </form>
            <form
              action=""
              className=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex items-center justify-center"></div>
              <div className="flex items-center justify-center">
                <Link to={"/edInfo"}>
                  <input
                    type="submit"
                    value="ED"
                    className="mb-2 bg-white font-bold cursor-pointer h-6 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/dInfo"}>
                  <input
                    type="submit"
                    value="D"
                    className="mb-2 bg-white font-bold cursor-pointer h-6 w-24 pl-2"
                  />
                </Link>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-8 px-12">
            <label htmlFor="" className="mx-2 font-bold ">
              Experience
            </label>
            <textarea
              value={moData?.EXPR}
              onChange={(e) => setExpr(e.target.value)}
              rows="4"
              className="mb-2 w-full pl-1"
            />
          </div>
          <div className="text-center mt-8 hidden">
            <button className="bg-slate-200 py-2 w-52 text-gray-600 font-bold shadow-md">
              Educational Qualification
            </button>
            <button className="bg-slate-200 py-2 w-52 text-gray-600 font-bold ml-1 shadow-md">
              Attachment
            </button>
          </div>
        </div>
      </div>

      <div className="bg-sky-400 py-2">
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-x-4">
          <p
            className={`bg-white text-black font-bold w-40 text-center h-8 text-xl  `}
            onClick={handleSave}
          >
            Save
          </p>
          <p
            className={`bg-white hidden text-black font-bold w-40 text-center h-8 text-xl  `}
          >
            Delete
          </p>
          <p
            className={`bg-white text-black font-bold w-40 text-center h-8 text-xl   `}
            onClick={handleClear}
          >
            Clear
          </p>
          <Link to="/dgmInfo">
            <p
              className={`bg-white text-black font-bold w-40 text-center h-8 text-xl `}
            >
              Exit
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DGMInfo;
