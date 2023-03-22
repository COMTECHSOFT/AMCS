import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PRinfoModify = () => {
  const location = useLocation();
  const commData = location?.state?.allData;
  const propData = location?.state?.proposalInfo;
  const instNoData = location?.state?.instNO;
  console.log(instNoData);

  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const payModeSelect = ["Cash", "Cheque"];

  // save new data start
  const [prNo, setPrNo] = useState("");
  const [prDate, setPrDate] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [prAmt, setPrAmt] = useState("");
  const [payMode, setPayMode] = useState("");
  const [instllNO, setInstllNO] = useState("");
  const [partial, setPartial] = useState("");
  const [commYear, setCommYear] = useState("");
  const [reTypePrNo, setRetypePrNo] = useState("");

  // save new data end

  const handleSave = () => {
    const newSaveData = {
      FDPS_NO: propData?.FDPS_NO,
      PRO_NO: propData?.FDPS_NO,
      B_CODE: commData?.B_CODE,
      B_NAME: commData?.B_NAME,
      Z_CODE: commData?.Z_CODE,
      Z_NAME: commData?.Z_NAME,
      SUB_Z_CODE: commData?.SUB_Z_CODE,
      SUB_NAME: commData?.SUB_NAME,
      PR_NO: prNo,
      PR_DATE: prDate,
      PR_AMT: prAmt,
      OR_DATE: commData?.OR_DATE,
      TERM: propData?.TERM,
      A_CODE: commData?.A_CODE,
      MO_CODE: commData?.MO_CODE,
      MM_CODE: commData?.MM_CODE,
      BM_CODE: commData?.BM_CODE,
      ZM_CODE: commData?.ZM_CODE,
      AVP_CODE: commData?.AVP_CODE,
      JVPCODE: commData?.JVPCODE,
      VP_CODE: commData?.VP_CODE,
      AG_NAME: commData?.AG_NAME,
      MO_NAME: commData?.MO_NAME,
      MM_NAME: commData?.MM_NAME,
      BM_NAME: commData?.BM_NAME,
      ZM_NAME: commData?.ZM_NAME,
      AVP_NAME: commData?.AVP_NAME,
      JVPNAME: commData?.JVPNAME,
      VP_NAME: commData?.VP_NAME,
      PAY_MODE: payMode,
      LAST_PAY_DATE: propData?.LAST_INST_DATE,
      NEXT_DATE: propData?.RV_DT1,
      NOTICE_DATE: propData?.MATURITY,
      SUS_AMT: propData?.SUS_AMT,
      INST_NO: instllNO,
      P_INST: partial,
      PR_RISK_DATE: propData?.RISKDATE,
      COMM_YEAR: commData?.COMM_YEAR,
      INSTMODE: propData?.INSTMODE,
      MONTHLY_PRM: propData?.RATE,
      TABLEID: propData?.TABLEID,
      ORNO: reTypePrNo,
    };
    console.log(newSaveData);
    const url = "http://192.168.31.94/api/commission_insert.php";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSaveData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <nav className="bg-purple-900 text-center py-2">
        <h1 className="text-pink-300 text-2xl lg:px-[450px] font-bold uppercase">
          AMANA Group <br /> PR Entry Information
        </h1>
      </nav>

      <div className="bg-sky-400 p-6 grid grid-cols-1 md:grid-cols-12 border-y-2">
        <form onSubmit={handleSubmit} action="" className="col-span-5 px-6">
          <div className="mb-4 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account No
            </label>
            <input
              type="text"
              value={propData?.FDPS_NO}
              className="w-full border border-gray-400 p-2 font-bold"
            />
          </div>
          <div className="mb-4 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account Name
            </label>
            <input
              type="text"
              value={propData?.PROPOSER}
              className="w-full border border-gray-400 p-2 font-bold"
            />
          </div>
          <div className="mb-4 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account Status
            </label>
            <input
              type="text"
              value={propData?.ADD4}
              className="w-full border border-gray-400 p-2 font-bold"
            />
          </div>
        </form>
        <div className="col-span-7 flex flex-col md:flex-row gap-4">
          <form action="" className="">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                Branch Code
              </label>
              <input
                type="text"
                value={commData?.B_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                District Code
              </label>
              <input
                type="text"
                value={commData?.SUB_Z_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                Head office Code
              </label>
              <input
                type="text"
                value={commData?.Z_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
          </form>
          <form action="" className="w-[450px]">
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={commData?.B_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={commData?.SUB_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={commData?.Z_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="bg-sky-400 p-6 grid grid-cols-1 md:grid-cols-3 border-y-2">
        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR No.
            </label>
            <input
              type="text"
              onChange={(e) => setPrNo(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR Date
            </label>
            <input
              type="text"
              onChange={(e) => setPrDate(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Entry Date
            </label>
            <input
              type="text"
              value={commData?.OR_DATE}
              onChange={(e) => setEntryDate(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
        </form>

        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR Amt.
            </label>
            <input
              type="text"
              onChange={(e) => setPrAmt(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Pay Mode
            </label>
            <select
              className="mb-2 h-8 w-full text-center font-bold"
              onChange={(e) => setPayMode(e.target.value)}
            >
              <option>Select</option>
              {payModeSelect?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Install No.
            </label>
            <input
              type="text"
              onChange={(e) => setInstllNO(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
        </form>

        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Partial
            </label>
            <input
              type="text"
              onChange={(e) => setPartial(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Comm. Year
            </label>
            <input
              type="text"
              value={commData?.COMM_YEAR}
              //   onChange={(e) => setCommYear(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold text-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Retype PR NO
            </label>
            <input
              type="text"
              onChange={(e) => setRetypePrNo(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold text-center"
            />
          </div>
        </form>
      </div>

      <div className="bg-sky-400 grid grid-cols-1 md:grid-cols-12 border-y-2">
        <div className="col-span-7 p-6">
          <div className="flex flex-col md:flex-row">
            <div className="px-2">
              <p className="font-bold text-center mb-2">Code</p>
              <form action="">
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ME
                  </label>
                  <input
                    type="text"
                    value={commData?.A_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    UM
                  </label>
                  <input
                    type="text"
                    value={commData?.MO_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    BM
                  </label>
                  <input
                    type="text"
                    value={commData?.MM_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    AGM
                  </label>
                  <input
                    type="text"
                    value={commData?.BM_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    DGM
                  </label>
                  <input
                    type="text"
                    value={commData?.ZM_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    GM
                  </label>
                  <input
                    type="text"
                    value={commData?.AVP_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ED
                  </label>
                  <input
                    type="text"
                    value={commData?.JVPCODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    D
                  </label>
                  <input
                    type="text"
                    value={commData?.VP_CODE}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
              </form>
            </div>

            <div className="flex flex-col md:flex-row gap-2 px-2">
              <div className=" ">
                <p className="font-bold text-center mb-2">Name</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      value={commData?.AG_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.MO_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.MM_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.BM_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.ZM_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.AVP_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.JVPNAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.VP_NAME}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Rate</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Comm.</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Final Comm.</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-8 w-24 pl-1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 p-6">
          <div className="flex flex-col md:flex-row">
            <div className="px-2">
              <form action="">
                <div className="flex items-center mt-8">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={propData?.RISKDATE}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Last Pay Date
                  </label>
                  <input
                    type="text"
                    value={propData?.LAST_INST_DATE}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Next Inst. Date
                  </label>
                  <input
                    type="text"
                    value={propData?.RV_DT1}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Notice Date
                  </label>
                  <input
                    type="text"
                    value={propData?.MATURITY}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Plan ID
                  </label>
                  <input
                    type="text"
                    value={propData?.TABLEID}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Term
                  </label>
                  <input
                    type="text"
                    value={propData?.TERM}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={propData?.RATE}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Suspense Amt.
                  </label>
                  <input
                    type="text"
                    value={propData?.SUS_AMT}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
              </form>
            </div>

            <div className="flex gap-2 px-2">
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Given Inst.</p>
                <form action="">
                  <select className="w-full pl-2 font-bold mb-2 py-2 focus:outline-none focus:shadow-outline">
                    <option>Inst No.</option>
                    {instNoData?.map((instList, index) => (
                      <option value={instList?.INST_NO} key={index}>
                        {instList?.INST_NO}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Part Inst.</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={commData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <label htmlFor="" className="mx-2 w-32 ml-4  font-bold">
              Install Mode
            </label>
            <input
              type="text"
              value={propData?.INSTMODE}
              className="mb-2 h-8 w-[352px] pl-1 text-center font-bold"
            />
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 py-2 mt-12">
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
            onClick={handleSave}
          >
            Save
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
            onClick={() => window.location.reload()}
          >
            Clear
          </p>
          <Link to="/prinformation">
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl `}
            >
              Back
            </p>
          </Link>
        </div>
        <p className="text-white float-right mt-[-32px] mr-8">{todaysDate}</p>
      </div>
    </div>
  );
};

export default PRinfoModify;
