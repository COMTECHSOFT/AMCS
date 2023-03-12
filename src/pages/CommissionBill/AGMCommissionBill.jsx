import React from "react";
import { Link } from "react-router-dom";

const AGMCommissionBill = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

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
    <div>
      <nav className="bg-gray-300 px-4 py-2">
        <h1 className="text-black text-xl font-bold uppercase">
          Commission Bill
        </h1>
      </nav>
      <div
        className="bg-sky-400 pb-[10%] flex justify-center py-10 px-32 ]"
        style={{ height: "" }}
      >
        <div className="border-4 border-white bg-emerald-500 w-full">
          <div className="border-b-4 text-center bg-blue-700 border-white">
            <h1 className="py-8 text-4xl font-bold text-white">
              AGM Commission Bill
            </h1>
          </div>
          <div className=" py-24">
            <div>
              <form action="" className="col-span-5 px-6 w-[600px] m-auto">
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Branch Code
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Zone Name
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center">
                    <label htmlFor="" className="mx-2 font-bold w-32">
                      Month
                    </label>
                    <select
                      className="w-full ml-10 pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
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
                    <label htmlFor="" className="mx-2 font-bold w-32">
                      Year
                    </label>
                    <input
                      type="text"
                      name="proposalNo"
                      className="mb-2 h-8 w-full pl-2 font-bold"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Bill No
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="border-t-4 bg-blue-700 py-8 border-white">
            <div className="flex gap-2 justify-center">
              <Link to="">
                {" "}
                <button className="bg-white w-[300px]  mb-[-40px]  py-2 text-xl font-bold shadow">
                  View Report
                </button>
              </Link>
              <Link to="/commissionBill">
                {" "}
                <button className="bg-white w-[300px]    py-2 text-xl font-bold shadow">
                  Exit
                </button>
              </Link>
            </div>
            <p className="text-xl float-right text-white font-bold mr-8">
              {todaysDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AGMCommissionBill;
