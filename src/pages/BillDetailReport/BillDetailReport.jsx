import React from "react";

const BillDetailReport = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="bg-emerald-500 border-4 border-white">
      <nav className=" text-center py-6 border-b-4 border-white">
        <h1 className="text-white text-3xl font-bold capitalize">
          code wise commission bill detail report
        </h1>
      </nav>

      <div className=" border-b-4 border-white ">
        <form
          action=""
          className="col-span-5 gap-x-32 px-24 grid grid-cols-2 m-auto py-10"
        >
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              Branch Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              BM Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              Branch Name
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              AGM Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              Month
            </label>
            <select
              className="w-full pl-1 mb-2 py-1 focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
            >
              {month?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              DGM Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              Year
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              GM Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              MO Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              ED Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              UM Code
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor=""
              className="mx-2 font-bold w-48 text-white text-xl"
            >
              Director
            </label>
            <input
              type="text"
              name="proposalNo"
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
        </form>
      </div>

      <div className="bg-cyan-700 border-4 border-white border-t-0">
        <div className="grid grid-cols-2 gap-y-2 py-8">
          {" "}
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            MO New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            DGM New Bus. Report
          </button>{" "}
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            UM New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            GM New Bus. Report
          </button>{" "}
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            BM New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            ED New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            DIRECTOR New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            CLEAR
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            ALL NEWS BUSINESS
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600">
            {" "}
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetailReport;
