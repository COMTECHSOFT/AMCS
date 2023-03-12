import React from "react";

const BranchWiseBussiReport = () => {
  return (
    <div className="bg-teal-500 p-12 h-screen">
      <div className="w-[1000px] m-auto border-4 border-white mt-12">
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
                  name="proposalNo"
                  className="mb-2 h-8 w-28 pl-2 font-bold"
                />
                <input
                  type="text"
                  name="proposalNo"
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
                  type="text"
                  name="proposalNo"
                  className="mb-2 h-8 ml-1 pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold text-white text-xl">
                  To
                </label>
                <input
                  type="text"
                  name="proposalNo"
                  className="mb-2 h-8 pl-2 font-bold"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="justify-center gap-x-1 py-12 border-t-4 border-white flex">
          <button className="bg-white shadow w-[300px] text-center  py-2 text-xl font-bold shadow-gray-600">
            REPORT VIEW
          </button>
          <button className="bg-white shadow w-[300px] text-center  py-2 text-xl font-bold shadow-gray-600">
            CLEAR
          </button>
          <button className="bg-white shadow w-[300px] text-center  py-2 text-xl font-bold shadow-gray-600">
            EXIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchWiseBussiReport;
