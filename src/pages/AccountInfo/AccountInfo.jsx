import React from "react";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  return (
    <div className="bg-cyan-600 border-4 border-white h-screen">
      <nav className=" text-center py-12 border-b-4 border-white">
        <h1 className="text-white text-4xl font-bold uppercase">
          Account Information
        </h1>
      </nav>

      <div className=" border-white border-t-0 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 py-8">
          <Link
            to="/chartAccEntry"
            className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600"
          >
            {" "}
            <button>CHART OF ACCOUNT</button>
          </Link>
          <button className="bg-white cursor-not-allowed text-gray-400 shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600">
            CHART OF ACCOUNT
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600">
            MEMBER INFO
          </button>
          <button className="bg-white cursor-not-allowed text-gray-400 shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600">
            MAIN REPORT WINDOW
          </button>
          <Link
            to="/dailyDataEntry"
            className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600"
          >
            <button>DAILY DATA ENTRY</button>
          </Link>
          <button className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600">
            EXIT
          </button>
          <Link
            to="/fileRemove"
            className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600"
          >
            <button>FILE REMOVE</button>
          </Link>
          <Link
            to="/mrRemove"
            className="bg-white shadow w-[300px] text-center m-auto py-4 font-bold shadow-gray-600"
          >
            <button>MR REMOVE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
