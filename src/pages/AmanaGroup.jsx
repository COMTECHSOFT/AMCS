import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AmanaGroup = () => {
  const [agentCode, setAgentCode] = useState([]);
  const commCode = agentCode.slice(0, 20);
  useEffect(() => {
    fetch("http://192.168.31.94/api/agent_code.php")
      .then((res) => res.json())
      .then((data) => setAgentCode(data?.agent_code));
  }, []);

  const payModes = ["Cheque", "Cash"];

  const [accountNo, setAccountNo] = useState("");
  const [payMode, setPaymode] = useState("");

  const location = useLocation();
  // console.log(location?.state?.findAllMainData);

  // const [value, setValue] = useState(0);
  // const [datas, setDatas] = useState([]);
  // const allData = datas?.find((data) => data);
  // console.log(allData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 0123000041
  // useEffect(() => {
  //   fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=${value}`)
  //     .then((res) => res.json())
  //     .then((data) => setDatas(data.Proposal_info));
  // }, [value]);

  const [selectCommCode, setSelectCommCode] = useState("");
  const [agentInfo, setAgentInfo] = useState([]);
  const allAgentInfo = agentInfo?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/agent_info.php?CODE=${selectCommCode}`) // 000123 000466
      .then((res) => res.json())
      .then((data) => setAgentInfo(data?.agent_info));
  }, [selectCommCode]);

  const handleSave = () => {
    const newSaveData = {
      PROPOSER: "Al hasan arif",
      FDPS_NO: "371982",
      PRO_NO: "371982",
      SC_CODE: location?.state?.findAllMainData?.SC_CODE,
      // SC_CODE: "003",
      ENTRY_ZONE_CODE: location?.state?.SUB_ZONE_CODE,
      // ENTRY_ZONE_CODE: "01",
      // BR_CODE: "1122",
      BR_CODE: location?.state?.AGENCY_CODE,
      // TERM: "05",
      TERM: location?.state?.findAllMainData?.TERM,
      AGE: "27",
      SEX: "Male",
      ADD4: location?.state?.accStatus,
      // ADD4: "Refund",
      M_NAME: "Hajera Begum",
      F_NAME: "Late Nur Mohammad",
      UNIT: "01",
      RATE: "12000",
      INST_NO: location?.state?.findPrEntryInfo?.INST_NO,
      // INST_NO: "01",
      LF_PRM: "200",
      SUM_INS: location?.state?.findAllMainData?.SUM_INS,
      // SUM_INS: "15000",
      AGE_ADMIT: "22",
      TABLEID: "02",
      SUS_AMT: "124512",
      INSTMODE: location?.state?.findPrEntryInfo?.INSTMODE,
      // INSTMODE: "Monthly DPS",
      COF_PS: "02",
      COF_PER: "02",
      OC_NAME: "Employee",
      NOMINEE_NAME1: "Mayin",
      NOMINEE_REL1: "Friend",
      NOMINEE_AGE1: "27",
      NOM_GAR_NAME: "Md Majedul Islam",
      NOM_GAR_REL: "Sir",
      USER_NAME: "Borhan",
      H_NAME: "Admin",
      NAT: "Bangladeshi",
      NAT_ID: "123214",
      // FDPS_NO: accountNo,
      // B_CODE: location?.state?.AGENCY_CODE,
      // B_NAME: location?.state?.AGENCY_NAME,
      // Z_CODE: location?.state?.Z_CODE,
      // Z_NAME: location?.state?.Z_NAME,
      // SUB_ZONE_CODE: location?.state?.SUB_ZONE_CODE,
      // SUB_NAME: location?.state?.SUB_ZONE_NAME,
      // PR_NO: location?.state?.findPrEntryInfo?.PR_NO,
      // PR_DATE: location?.state?.findPrEntryInfo?.PR_DATE,
      // entryDate: location?.state?.entryDate,
      // RATE: location?.state?.findAllMainData?.RATE,
      // PR_NO: location?.state?.findPrEntryInfo?.PR_NO,
      // PAY_MODE: payMode,
      // INST_NO: location?.state?.findPrEntryInfo?.INST_NO,
      // COMM_YEAR: location?.state?.findPrEntryInfo?.COMM_YEAR,
      // SUM_INS: location?.state?.findAllMainData?.SUM_INS,
      // SUS_AMT: location?.state?.findPrEntryInfo?.SUS_AMT,
      // accStatus: location?.state?.accStatus,
      // LAST_PAY_DATE: location?.state?.findAllMainData?.LAST_INST_DATE,
      // NEXT_DATE: location?.state?.findAllMainData?.MATURITY,
      // NOTICE_DATE: location?.state?.findAllMainData?.DOB,
      // SC_CODE: location?.state?.findAllMainData?.SC_CODE,
      // TERM: location?.state?.findAllMainData?.TERM,
      // INSTMODE: location?.state?.findPrEntryInfo?.INSTMODE,
    };
    console.log(newSaveData);
    const url = "http://192.168.31.94/api/insert.php"; //https://192.168.31.94/api/insert_data.php
    fetch(url, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
       'Access-Control-Allow-Credentials': 'true'

      },
      body: JSON.stringify(newSaveData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <nav className="bg-blue-400 text-center py-6">
        <h1 className="text-white text-2xl lg:px-[450px] font-bold uppercase">
          AMANA Group <br /> FIRST PR / MR RECEIPT ENTRY
        </h1>
      </nav>

      <div className="bg-emerald-400 p-6 grid  grid-cols-1 md:grid-cols-12 border-y-2">
        <form onSubmit={handleSubmit} action="" className="col-span-5 px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-32">
              Account No
            </label>
            <input
              type="text"
              name="accountNo"
              value={location?.state?.findAllMainData?.FDPS_NO}
              disabled
              className="mb-2 bg-gray-200 text-center h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-32">
              Proposal No
            </label>
            <input
              type="text"
              name="proposalNo"
              value={location?.state?.findAllMainData?.FDPS_NO}
              disabled
              className="mb-2 bg-gray-200 text-center h-8 w-full pl-2 font-bold"
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
                value={location?.state?.AGENCY_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                District Office
              </label>
              <input
                type="text"
                name=""
                value={location?.state?.SUB_ZONE_CODE}
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
                value={location?.state?.Z_CODE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
          </form>
          <form action="" className="w-[450px]">
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={location?.state?.AGENCY_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={location?.state?.SUB_ZONE_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={location?.state?.Z_NAME}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blue-500 p-6 grid grid-cols-1 md:grid-cols-4 border-y-2">
        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR No.
            </label>
            <input
              type="text"
              name="prNo"
              value={location?.state?.findPrEntryInfo?.PR_NO}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR Date
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.PR_DATE}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Entry Date
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.entryDate}
              className="mb-2 h-8 w-full pl-2 font-bold"
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
              value={location?.state?.findAllMainData?.RATE}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Pay Mode
            </label>
            <select
              className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline font-bold"
              id="gender"
              name="gender"
              value={payMode}
              onChange={(e) => setPaymode(e.target.value)}
            >
              {payModes?.map((mode, index) => (
                <option key={index} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR No.
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.PR_NO}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
        </form>
        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Install No.
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.INST_NO}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Comm. Year
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.COMM_YEAR}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
        </form>
        <form action="" className=" px-6">
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Ammount
            </label>
            <input
              type="text"
              name="prNo"
              value={location?.state?.findAllMainData?.SUM_INS}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Suspense Amt.
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.SUS_AMT}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Account Status
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.accStatus}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
        </form>
      </div>

      <div className="bg-emerald-400 grid grid-cols-1 md:grid-cols-12 border-y-2">
        <div className="col-span-7 border-r-2 p-6">
          <div className="flex flex-col md:flex-row">
            <div className="px-2">
              <p className="font-bold text-center mb-2">Code</p>
              <form action="">
                <div className="flex items-center">
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
                      value={allAgentInfo?.NAME}
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
                <p className="font-bold text-center mb-2">Final</p>
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
                    value={`${new Date().getDate()}-${
                      new Date().getMonth() + 1
                    }-${new Date().getFullYear()}`}
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
                    value={location?.state?.findAllMainData?.LAST_INST_DATE}
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
                    value={location?.state?.findAllMainData?.MATURITY}
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
                    value={location?.state?.findAllMainData?.DOB}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Plan Code
                  </label>
                  <input
                    type="text"
                    name=""
                    value={location?.state?.findAllMainData?.SC_CODE}
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
                    value={location?.state?.findAllMainData?.TERM}
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
              Inst. mode
            </label>
            <input
              type="text"
              name=""
              value={location?.state?.findPrEntryInfo?.INSTMODE}
              className="mb-2 h-8 w-[352px] pl-1 text-center  font-bold"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1 w-[400px] mx-auto mt-8">
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 text-xl  `}
            >
              COMM ADD.
            </p>

            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 text-xl   `}
              onClick={handleSave}
            >
              Save
            </p>
            <Link
              to="/summary"
              className={`bg-white text-black font-bold w-48 text-center py-2 text-xl `}
            >
              {" "}
              <p>Exit</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmanaGroup;
