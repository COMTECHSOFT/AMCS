import React from "react";
import { Link } from "react-router-dom";

const MRRemove = () => {
  return (
    <div className="bg-emerald-500 border-4 border-white h-screen">
      <nav className=" text-center py-10 border-b-4 border-white">
        <h1 className="text-white text-3xl font-bold capitalize">
          MR / PR Remove
        </h1>
      </nav>

      <div className="bg-sky-500 border-b-4 border-white py-20">
        <form action="" className=" px-72  py-10">
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              MR/PR No.
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 py-2 w-full pl-2 font-bold"
            />
          </div>
        </form>
      </div>

      <div className=" border-white ">
        <div className="flex flex-col items-center justify-center gap-1 py-8">
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

export default MRRemove;
