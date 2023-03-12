import React, { useEffect, useState } from "react";

const PRInformation = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const [value, setValue] = useState(0);
  const [datas, setDatas] = useState([]);
  const allData = datas?.find((data) => data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 0123000041
  useEffect(() => {
    fetch(`http://192.168.31.94/api/commission_info.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.COMM_info);
      });
  }, [value]);

  const [accName, setAccName] = useState([]);
  const onlyName = accName?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setAccName(data.Proposal_info);
      });
  }, [value]);

  const [agentCode, setAgentCode] = useState([]);
  const commCode = agentCode.slice(0, 20);
  useEffect(() => {
    fetch("http://192.168.31.94/api/agent_code.php")
      .then((res) => res.json())
      .then((data) => {
        setAgentCode(data?.agent_code);
      });
  }, []);

  const [selectCommCode, setSelectCommCode] = useState("");
  const [agentInfo, setAgentInfo] = useState([]);
  const allAgentInfo = agentInfo?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/agent_info.php?CODE=${allData?.A_CODE}`) // 000123 000466
      .then((res) => res.json())
      .then((data) => {
        setAgentInfo(data?.agent_info);
      });
  }, [selectCommCode, allData?.A_CODE]);

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
              name="accountNo"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="w-full border border-gray-400 p-2 font-bold"
            />
            <input
              type="submit"
              className="bg-gray-300 hidden text-gray-600 px-3 py-1 cursor-pointer uppercase font-bold"
              value="submit"
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
              name="accountNo"
              value={onlyName?.PROPOSER}
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
              name="accountNo"
              value={onlyName?.ADD4}
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
                name=""
                value={allData?.B_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                District Code
              </label>
              <input
                type="text"
                name=""
                value={allData?.SUB_Z_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                Head office Code
              </label>
              <input
                type="text"
                name=""
                value={allData?.Z_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
          </form>
          <form action="" className="w-[450px]">
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={allData?.B_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={allData?.SUB_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={allData?.Z_NAME}
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
              name="prNo"
              value={allData?.PR_NO}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR Date
            </label>
            <input
              type="text"
              name=""
              value={allData?.PR_DATE}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Entry Date
            </label>
            <input
              type="text"
              name=""
              value={allData?.PR_RISK_DATE}
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
              name="prNo"
              value={allData?.PR_AMT}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Pay Mode
            </label>
            <input
              type="text"
              name="prNo"
              value={allData?.PAY_MODE}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Install No.
            </label>
            <input
              type="text"
              name=""
              value={allData?.INST_NO}
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
              name="prNo"
              value={allData?.P_INST}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Comm. Year
            </label>
            <input
              type="text"
              name=""
              value={allData?.COMM_YEAR}
              className="mb-2 h-8 w-full pl-2 font-bold text-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Retype PR NO
            </label>
            <input
              type="text"
              name=""
              value={allData?.PR_NO}
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
                {/* <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ME
                  </label>

                  <select
                    className="mb-2 h-8 w-24 pl-1"
                    id="gender"
                    name="gender"
                    value={selectCommCode}
                    onChange={(e) => setSelectCommCode(e.target.value)}
                  >
                    {commCode?.map((item) => (
                      <option value={item?.CODE} key={item.CODE}>
                        {item?.CODE}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ME
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.A_CODE}
                    // onChange={(e) => setSelectCommCode(e.target.value)}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    UM
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_MO}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    BM
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_MM}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    AGM
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_BM}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    DGM
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_ZM}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    GM
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_AVP}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ED
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.JVP}
                    className="mb-2 h-8 w-24 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    D
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allAgentInfo?.A_VP}
                    className="mb-2 h-8 w-24 pl-1"
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
                      name=""
                      value={allData?.AG_NAME}
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value={allData?.MO_NAME}
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value={allData?.MM_NAME}
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value={allData?.BM_NAME}
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value={allData?.ZM_NAME}
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-60 pl-1"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Rate</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Comm.</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Final Comm.</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
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
                    name=""
                    value={onlyName?.RISKDATE}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Last Pay Date
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.LAST_PAY_DATE}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Next Inst. Date
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.NEXT_DATE}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Notice Date
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.NOTICE_DATE}
                    className="mb-2 h-8 w-32 pl-1"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Plan ID
                  </label>
                  <input
                    type="text"
                    name=""
                    value={onlyName?.TABLEID}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Term
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.TERM}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Amount
                  </label>
                  <input
                    type="text"
                    name=""
                    value={onlyName?.RATE}
                    className="mb-2 h-8 w-32 pl-1 text-center text-gray-400 font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Suspense Amt.
                  </label>
                  <input
                    type="text"
                    name=""
                    value={allData?.SUS_AMT}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
              </form>
            </div>

            <div className="flex gap-2 px-2">
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Given Inst.</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      value="1"
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Part Inst.</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-24 pl-1"
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
              name=""
              value={allData?.INSTMODE}
              className="mb-2 h-8 w-[352px] pl-1 text-center font-bold"
            />
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 py-2 mt-12">
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
          >
            Save
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
          >
            Delete
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
          >
            Clear
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl `}
          >
            Exit
          </p>
        </div>
        <p className="text-white float-right mt-[-32px] mr-8">{todaysDate}</p>
      </div>
    </div>
  );
};

export default PRInformation;
