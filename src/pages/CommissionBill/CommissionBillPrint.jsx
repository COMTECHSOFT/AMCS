import React from "react";
import { Link } from "react-router-dom";

const CommissionBillPrint = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;
  return (
    <div>
      <nav className="bg-gray-300 px-4 py-2">
        <h1 className="text-black text-xl font-bold uppercase">
          Commission Bill
        </h1>
      </nav>
      <div className="bg-sky-400 flex justify-center py-10 px-32 ]">
        <div className="border-4 border-indigo-800 bg-emerald-500 w-full">
          <div className="border-b-4 text-center border-indigo-800">
            <h1 className="py-8 text-4xl font-bold text-amber-900">
              Commission Bill Print
            </h1>
          </div>
          <div className="flex flex-col gap-y-2 py-8">
            <Link
              to="/mocommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button>MO Commission Bill</button>
            </Link>

            <Link
              to="/umcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> Unit Manager Commission Bill</button>
            </Link>

            <Link
              to="/bmcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> BM Commission Bill</button>
            </Link>
            <Link
              to="/agmcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> AGM Commission Bill</button>
            </Link>
            <Link
              to="/dgmcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> DGM Commission Bill</button>
            </Link>
            <Link
              to="/gmcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> GM Commission Bill</button>
            </Link>
            <Link
              to="/edcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> ED Commission Bill</button>
            </Link>
            <Link
              to="/directorcommbill"
              className="bg-white shadow w-[300px] text-center m-auto py-2 text-xl font-bold shadow-gray-600"
            >
              {" "}
              <button> DIRECTOR Commission Bill</button>
            </Link>
          </div>
          <div className="border-t-4   py-8 border-indigo-800">
            <button className="bg-white w-[300px] block mb-[-40px] m-auto py-2 text-xl font-bold shadow">
              Exit
            </button>
            <p className="text-xl float-right mt-[40px] font-bold mr-8">
              {todaysDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionBillPrint;
