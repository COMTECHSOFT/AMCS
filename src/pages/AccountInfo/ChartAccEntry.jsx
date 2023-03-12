import React from "react";
import { Link } from "react-router-dom";

const ChartAccEntry = () => {
  const accType = ["Income", "Expenses", "Liability", "Asset"];
  return (
    <div className="bg-emerald-500 border-4 border-white h-screen">
      <nav className="bg-teal-600 text-center py-6 border-b-4 border-white">
        <h1 className="text-white text-3xl font-bold capitalize">
          CHART OF ACFCOUNT ENTRY
        </h1>
      </nav>

      <div className=" border-b-4 border-white py-28">
        <form action="" className=" px-72  py-10">
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              ACC ID
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 py-3  w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              ACC. NAME
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 w-full pl-2 py-3 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              ACC. TYPE
            </label>
            <select
              className="w-full pl-1 font-bold mb-2 py-3 focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
            >
              {accType?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>

      <div className="bg-cyan-700 border-white ">
        <div className="grid grid-cols-2 gap-y-2 py-8">
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            SAVE
          </button>
          <Link
            to="/accInfo"
            className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
          >
            <button> Exit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChartAccEntry;
