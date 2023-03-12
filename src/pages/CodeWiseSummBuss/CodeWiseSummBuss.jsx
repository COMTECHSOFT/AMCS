import React from "react";

const CodeWiseSummBuss = () => {
  return (
    <div className="bg-cyan-600 border-4 border-white">
      <nav className=" text-center py-6 border-b-4 border-white">
        <h1 className="text-white text-3xl font-bold capitalize">
          code wise Summary Business
        </h1>
      </nav>

      <div className="">
        <form action="" className=" border-b-4 border-white py-10">
          <div className="flex items-center gap-x-40 justify-center ">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold text-white text-xl">
                MR Date
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
              Unit Manager
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
              Director Code
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
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            MO Summary Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            DGM Summary Bus. Report
          </button>{" "}
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            UM Summary Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            GM Summary Bus. Report
          </button>{" "}
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            BM Summary Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            ED Summary Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            AGM Summary Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            DIRECTOR New Bus. Report
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            CLEAR
          </button>
          <button className="bg-white shadow w-[300px] text-center m-auto py-2 font-bold shadow-gray-600">
            {" "}
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeWiseSummBuss;
