import React from "react";
import { Link } from "react-router-dom";

const GMInfo = () => {
  return (
    <div>
      <nav className="bg-cyan-900 text-center py-6">
        <h1 className="text-yellow-300 text-2xl font-bold uppercase">
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
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                GM Code No.
              </label>
              <input
                type="text"
                name=""
                placeholder="000000"
                className="mb-2 h-8 w-full font-bold pl-2"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                father's Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Present Address
              </label>
              <textarea name="" id="" rows="4" className="mb-2 w-full pl-1" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Permanent Address
              </label>
              <textarea name="" id="" rows="4" className="mb-2 w-full pl-1" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Date of Birth
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Mobile Number
              </label>
              <input
                type="phone"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR No.
              </label>
              <input
                type="phone"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR Amount
              </label>
              <input
                type="phone"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Date of Apoinment
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Number
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Issue Date
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Expire Date
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Renew Date
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Effect Date
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Recruiment Type
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>
          </form>
        </div>
        <div className="col-span-7 ">
          <div className="flex flex-col md:flex-row gap-4 border-b-2 border-white p-10">
            <form action="" className="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[330px]">
                  Branch Code & Name
                </label>
                <input type="text" name="" className="mb-2 h-8 w-full pl-2" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[330px]">
                  District Office
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[330px]">
                  Head office Code
                </label>
                <input type="text" name="" className="mb-2 h-8 w-full pl-2" />
              </div>
            </form>
            <form action="" className="w-[450px]">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-8 w-48 md:w-full pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-8 w-48 md:w-full pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-8 w-48 md:w-full pl-2"
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
                  name=""
                  placeholder="000000"
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  D Code
                </label>
                <input
                  type="text"
                  name=""
                  placeholder="000000"
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
            </form>
            <form action="" className="">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-8 w-48 md:w-full pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  className="mb-2 h-8 w-48 md:w-full pl-2"
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
              <div className="flex items-center justify-center">
                <Link to={"/edInfo"}>
                  <input
                    type="submit"
                    value="ED"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/dInfo"}>
                  <input
                    type="submit"
                    value="D"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-8 px-12">
            <label htmlFor="" className="mx-2 font-bold ">
              Experience
            </label>
            <textarea name="" id="" rows="4" className="mb-2 w-full pl-1" />
          </div>
          <div className="text-center mt-8">
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
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
          <p
            className={`bg-white text-black font-bold w-60 text-center py-2 px-6 text-xl  `}
          >
            Save
          </p>
          <p
            className={`bg-white text-black font-bold w-60 text-center py-2 px-6 text-xl  `}
          >
            Delete
          </p>
          <p
            className={`bg-white text-black font-bold w-60 text-center py-2 px-6 text-xl   `}
          >
            Clear
          </p>
          <Link to="/dgmInfo">
            <p
              className={`bg-white text-black font-bold w-60 text-center py-2 px-6 text-xl `}
            >
              Exit
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GMInfo;
