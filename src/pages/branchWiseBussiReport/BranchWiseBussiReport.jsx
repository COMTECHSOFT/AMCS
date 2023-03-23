import React, { useState } from "react";
import { Link } from "react-router-dom";

const BranchWiseBussiReport = () => {
  const [brCode, setBrCode] = useState("");
  const [brName, setBrName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const dataPassByLink = { fromDate, toDate };

  const handleFromDate = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setFromDate(getDate);
  };
  const handleToDate = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setToDate(getDate);
  };

  const handleReset = () => {
    setBrCode("");
    setBrName("");
  };
  return (
    <div className="bg-teal-500 p-6 ">
      <div className="w-[1000px] m-auto border-4 border-white">
        <h1 className="text-center text-3xl font-bold py-10 border-b-4 border-white">
          BRANCH WISE BUSINESS REPORT
        </h1>
        <div>
          <form
            action=""
            className="col-span-5 gap-y-12 grid px-6 w-[920px] m-auto py-10"
          >
            <div className="flex items-center justify-center">
              <label
                htmlFor=""
                className="mx-2 font-bold w-72 text-white text-xl"
              >
                Branch Code & Name
              </label>
              <div className="flex gap-x-2 w-full">
                <input
                  type="text"
                  value={brCode}
                  onChange={(e) => setBrCode(e.target.value)}
                  className="mb-2 h-8 w-28 pl-2 font-bold"
                />
                <input
                  type="text"
                  value={brName}
                  onChange={(e) => setBrName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-center">
                <label
                  htmlFor=""
                  className="mx-2 font-bold w-52 text-white text-xl"
                >
                  From Date
                </label>

                <input
                  type="date"
                  onChange={handleFromDate}
                  className="mb-2 h-8 ml-1 pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold text-white text-xl">
                  To
                </label>
                <input
                  type="date"
                  onChange={handleToDate}
                  className="mb-2 h-8 pl-2 font-bold"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="justify-center gap-x-1 py-12 border-t-4 border-white flex flex-col items-center gap-y-1">
          <Link
            to="/branchWiseSummReport"
            state={dataPassByLink}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>Branch Wise Summary Report</button>
          </Link>
          <Link
            to="/branchWiseDetReport"
            state={dataPassByLink}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>Branch Wise Details Report</button>
          </Link>
          <Link
            to="/braWisePlanCodeWiseSummReport"
            state={dataPassByLink}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>Branch Wise Plan Code Wise Summary Report</button>
          </Link>
          <Link
            to="/braWisePlanCodeWiseDetReport"
            state={dataPassByLink}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>Branch Wise Plan Code Wise Details Report</button>
          </Link>
          <Link
            to="/braWiseMRDetReport"
            state={dataPassByLink}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>Branch Wise MR Details Report</button>
          </Link>
          <button
            // onClick={() => window.location.reload()}
            type="button"
            onClick={handleReset}
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            CLEAR
          </button>
          <Link
            to="/"
            className="bg-white shadow w-[450px] text-center  py-2 text-xl font-bold shadow-gray-600"
          >
            {" "}
            <button>EXIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchWiseBussiReport;
