import React from "react";
import { Link } from "react-router-dom";

const DailyDataEntry = () => {
  return (
    <div className="bg-emerald-500 border-4 border-white h-screen">
      <nav className="bg-teal-600 text-center py-6 border-b-4 border-white">
        <h1 className="text-white text-3xl font-bold capitalize">
          INCOME / EXPENSES ENTRY NEW
        </h1>
      </nav>

      <div className=" border-b-4 border-white py-16">
        <form action="" className=" px-72  py-10">
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              BRANCH CODE
            </label>
            <div className="flex gap-x-2 w-full">
              <input
                type="text"
                name="proposalNo"
                className="mb-2 py-2 w-28 pl-2 font-bold"
              />
              <input
                type="text"
                name="proposalNo"
                className="mb-2 py-2 w-full pl-2 font-bold"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              DATE
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 py-2 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              VOUCHER NO
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 py-2 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              ACC ID
            </label>
            <div className="flex gap-x-2 w-full">
              <input
                type="text"
                name="proposalNo"
                className="mb-2 py-2 w-28 pl-2 font-bold"
              />
              <input
                type="text"
                name="proposalNo"
                className="mb-2 py-2 w-full pl-2 font-bold"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              AMOUNT
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 w-full pl-2 py-2 font-bold"
            />
          </div>
        </form>
      </div>

      <div className="bg-cyan-700 border-white ">
        <div className="flex flex-col md:flex-row justify-center gap-1 py-8">
          <button className="bg-white shadow w-[300px] text-center py-2 text-xl font-bold shadow-gray-600">
            {" "}
            SAVE
          </button>
          <button className="bg-white shadow w-[300px] text-center py-2 text-xl font-bold shadow-gray-600">
            {" "}
            CLEAR
          </button>
          <Link
            to="/accInfo"
            className="bg-white shadow w-[300px] text-center py-2 text-xl font-bold shadow-gray-600"
          >
            <button> Exit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DailyDataEntry;
