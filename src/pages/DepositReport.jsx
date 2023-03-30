import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DepositReport = () => {
  const [accNo, setAccNo] = useState("");
  const [report1, setReport1] = useState([]);
  const report1Data = report1?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/report1.php?FDPS_NO=${accNo}`)
      .then((res) => res.json())
      .then((data) => setReport1(data?.Proposal_info));
  }, [accNo]);

  const [report2, setReport2] = useState([]);
  const report2Data = report2?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/report2.php?FDPS_NO=${accNo}`)
      .then((res) => res.json())
      .then((data) => setReport2(data?.report_info));
  }, [accNo]);

  const handleClear = () => {
    setAccNo("");
  };

  const passToReport = { report1, report1Data, report2, report2Data };

  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));
  if (!getItem) {
    return navigate("/login");
  }
  return (
    <div className="h-screen bg-slate-200">
      <nav className="bg-gray-300 px-4 py-2">
        <h1 className="text-black font-bold uppercase">
          Account Holder Deposit Statement
        </h1>
      </nav>
      <div className="w-[60%] m-auto mt-24">
        <div className="border-4 border-white bg-slate-400 w-full">
          <div className="border-b-4 text-center bg-cyan-700 border-white">
            <h1 className="py-4 text-2xl font-bold text-white">
              Deposit Statement
            </h1>
          </div>
          <div className=" py-16">
            <div>
              <form action="" className="col-span-5 px-6 w-[400px] m-auto">
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-36">
                    Account No.
                  </label>
                  <input
                    type="text"
                    value={accNo}
                    onChange={(e) => setAccNo(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold outline-none"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="border-t-4 bg-cyan-600 py-8 border-white">
            <div className="flex gap-2 justify-center">
              <Link to={`/report `} state={passToReport}>
                <button className="bg-white w-48  mb-[-40px] h-8 font-bold shadow">
                  View Statement
                </button>
              </Link>
              <button
                onClick={handleClear}
                className="bg-white w-48 mb-[-40px] h-8 font-bold shadow"
              >
                Clear
              </button>
              <Link to="/">
                <button className="bg-white w-48 mb-[-40px] h-8 font-bold shadow">
                  Exit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositReport;
