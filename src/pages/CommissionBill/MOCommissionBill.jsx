import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MOCommissionBill = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const desig = ["ME", "MO", "UM", "BM"];

  const [brCode, setBrCode] = useState();
  const [brName, setBrName] = useState();
  const [months, setMonths] = useState();
  const [year, setYear] = useState();
  const [design, setDesign] = useState();
  const [bill, setBill] = useState();

  // const viewReportdata = () => {
  //   console.log(brCode, brName, months, year, bill);
  // };

  const [commissionData, setCommissionData] = useState([]);
  const allReportData = {
    commissionData: commissionData,
    month: months,
    year: year,
    design: design,
  };
  // console.log(allReportData);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/com_report.php?DESIG=${design}&&PMON=${months}&&PYEAR=${year}&&OFF_CODE=${brCode}`
    )
      .then((res) => res.json())
      .then((data) => setCommissionData(data?.comm_info));
  }, [design, months, brCode, year]);

  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));
  if (!getItem) {
    return navigate("/login");
  }
  return (
    <div>
      <nav className="bg-gray-300 px-4 py-2">
        <h1 className="text-black font-bold uppercase">Commission Bill</h1>
      </nav>
      <div
        className="bg-sky-400 pb-[10%] flex justify-center py-8 px-32 ]"
        style={{ height: "" }}
      >
        <div className="border-4 border-white bg-emerald-500 w-full">
          <div className="border-b-4 text-center bg-blue-700 border-white">
            <h1 className="py-4 text-2xl font-bold text-white">
              Chain Code Wise Commission Bill
            </h1>
          </div>
          <div className=" py-12">
            <div>
              <form action="" className="col-span-5 px-6 w-[600px] m-auto">
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Designation
                  </label>
                  <select
                    className="w-full pl-2 mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                    onChange={(e) => setDesign(e.target.value)}
                  >
                    <option className="cursor-not-allowed" value="Select">
                      Select
                    </option>
                    {desig?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center">
                    <label htmlFor="" className="mx-2 font-bold w-32">
                      Month
                    </label>
                    <select
                      className="w-full ml-10 pl-1 mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                     
                      onChange={(e) => setMonths(e.target.value)}
                    >
                      <option>Select</option>
                      {month?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-center">
                    <label htmlFor="" className="mx-2 font-bold w-32">
                      Year
                    </label>
                    <input
                      type="text"
                      name="proposalNo"
                      onChange={(e) => setYear(e.target.value)}
                      className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Branch Code
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    onChange={(e) => setBrCode(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Zone Name
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    value={commissionData[0]?.OFF_NAME}
                    onChange={(e) => setBrName(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Bill No
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    value={
                      brCode && months && year
                        ? `${design}/${brCode}/${months}/${year}`
                        : ""
                    }
                    onChange={(e) => setBill(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="border-t-4 bg-blue-700 py-8 border-white">
            <div className="flex gap-2 justify-center">
              <Link to={`/commReport `} state={allReportData}>
                {" "}
                <button
                  // onClick={viewReportdata}
                  className="bg-white w-48  mb-[-40px] h-8 font-bold shadow"
                >
                  View Report
                </button>
              </Link>
              <Link to="/">
                {" "}
                <button className="bg-white w-48 mb-[-40px] h-8 font-bold shadow">
                  Exit
                </button>
              </Link>
            </div>
            <p className=" float-right text-white font-bold mr-8">
              {todaysDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOCommissionBill;
