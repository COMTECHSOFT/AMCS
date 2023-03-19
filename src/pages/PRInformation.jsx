import React, { useEffect, useState } from "react";

const PRInformation = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const [value, setValue] = useState(0);
  const [datas, setDatas] = useState([]);
  const allData = datas?.find((data) => data);
  // console.log(allData);
  // 0123000041
  useEffect(() => {
    fetch(`http://192.168.31.94/api/commission_info.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.COMM_info);
      });
  }, [value]);

  const [accName, setAccName] = useState([]);
  const proposalInfo = accName?.find((data) => data);
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
    fetch(`http://192.168.31.94/api/agent_details.php?CODE=${selectCommCode}`) // 000123 000466
      // fetch(`http://192.168.31.94/api/agent_details.php?CODE=${""}`) // 000123 000466
      .then((res) => res.json())
      .then((data) => {
        setAgentInfo(data?.agent_details);
      });
  }, [selectCommCode, allData?.A_CODE]);

  const [agencyData, setAgencyData] = useState([]);
  const allAgencyData = agencyData?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${proposalInfo?.BR_CODE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAgencyData(data.agency_details);
      });
  }, [proposalInfo?.BR_CODE]);

  // save new data start
  const [agencyCode, setAgencyCode] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [subZoneCode, setSubZoneCode] = useState("");
  const [subZoneName, setSubZoneName] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [prNo, setPrNo] = useState("");
  const [prDate, setPrDate] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [prAmt, setPrAmt] = useState("");
  const [payMode, setPayMode] = useState("");
  const [instllNO, setInstllNO] = useState("");
  const [partial, setPartial] = useState("");
  const [commYear, setCommYear] = useState("");
  const [reTypePrNo, setRetypePrNo] = useState("");
  const [me, setMe] = useState("");
  const [um, setUm] = useState("");
  const [bm, setBm] = useState("");
  const [agm, setAgm] = useState("");
  const [dgm, setDgm] = useState("");
  const [gm, setGm] = useState("");
  const [ed, setEd] = useState("");
  const [d, setD] = useState("");
  const [meName, setMeName] = useState("");
  const [umName, setUmName] = useState("");
  const [bmName, setBmName] = useState("");
  const [agmName, setAgmName] = useState("");
  const [dgmName, setDgmName] = useState("");
  const [gmName, setGmName] = useState("");
  const [edName, setEdName] = useState("");
  const [dName, setDName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastPayDate, setLastPayDate] = useState("");
  const [nextInstDate, setNextInstDate] = useState("");
  const [noticeDate, setNoticeDate] = useState("");
  const [planId, setPlanId] = useState("");
  const [term, setTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [susAmt, setSusAmt] = useState("");
  const [installMode, setInstallMode] = useState("");

  // save new data end

  const handleSave = () => {
    const newSaveData = {
      FDPS_NO: value,
      PRO_NO: value,
      B_CODE: allAgencyData?.AGENCY_CODE,
      B_NAME: allAgencyData?.AGENCY_NAME,
      Z_CODE: allAgencyData?.Z_CODE,
      Z_NAME: allAgencyData?.Z_NAME,
      SUB_Z_CODE: allAgencyData?.SUB_ZONE_CODE,
      SUB_NAME: allAgencyData?.SUB_ZONE_NAME,
      PR_NO: prNo,
      PR_DATE: prDate,
      PR_AMT: proposalInfo?.RATE,
      OR_DATE: entryDate,
      TERM: proposalInfo?.TERM,
      A_CODE: allAgentInfo?.CODE,
      MO_CODE: allAgentInfo?.A_MO,
      MM_CODE: allAgentInfo?.A_MM,
      BM_CODE: allAgentInfo?.A_BM,
      ZM_CODE: allAgentInfo?.A_ZM,
      AVP_CODE: allAgentInfo?.A_AVP,
      JVPCODE: allAgentInfo?.JVP,
      VP_CODE: allAgentInfo?.A_VP,
      AG_NAME: allAgentInfo?.NAME,
      MO_NAME: allAgentInfo?.MO_NAME,
      MM_NAME: allAgentInfo?.MM_NAME,
      BM_NAME: allAgentInfo?.BM_NAME,
      ZM_NAME: allAgentInfo?.ZM_NAME,
      AVP_NAME: allAgentInfo?.AVP_NAME,
      JVPNAME: allAgentInfo?.JVP_NAME,
      VP_NAME: allAgentInfo?.VP_NAME,
      PAY_MODE: "Cash",
      LAST_PAY_DATE: proposalInfo?.LAST_INST_DATE,
      NEXT_DATE: proposalInfo?.RV_DT1,
      NOTICE_DATE: proposalInfo?.MATURITY,
      SUS_AMT: proposalInfo?.SUS_AMT,
      INST_NO: proposalInfo?.INST_NO,
      P_INST: partial,
      PR_RISK_DATE: proposalInfo?.RISKDATE,
      COMM_YEAR: commYear,
      INSTMODE: proposalInfo?.INSTMODE,
      MONTHLY_PRM: proposalInfo?.RATE,
      TABLEID: proposalInfo?.TABLEID,
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
              name="accountNo"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="w-full border border-gray-400 p-2 font-bold"
            />
            {/* <input
              type="submit"
              className="bg-gray-300 hidden text-gray-600 px-3 py-1 cursor-pointer uppercase font-bold"
              value="submit"
            /> */}
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
              value={proposalInfo?.PROPOSER}
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
              value={proposalInfo?.ADD4}
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
                value={allAgencyData?.AGENCY_CODE}
                // onChange={(e) => setAgencyCode(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                District Code
              </label>
              <input
                type="text"
                value={allAgencyData?.SUB_ZONE_CODE}
                // onChange={(e) => setSubZoneCode(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-56">
                Head office Code
              </label>
              <input
                type="text"
                value={allAgencyData?.Z_CODE}
                // onChange={(e) => setZoneCode(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
          </form>
          <form action="" className="w-[450px]">
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.AGENCY_NAME}
                // onChange={(e) => setAgencyName(e.target.value)}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.SUB_ZONE_NAME}
                // onChange={(e) => setSubZoneName(e.target.value)}
                className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.Z_NAME}
                // onChange={(e) => setZoneName(e.target.value)}
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
              value={allData?.PR_NO}
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
              value={allData?.PR_DATE}
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
              value={allData?.OR_DATE}
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
              value={proposalInfo?.RATE}
              onChange={(e) => setPrAmt(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Pay Mode
            </label>
            <input
              type="text"
              value="Cash"
              onChange={(e) => setPayMode(e.target.value)}
              className="mb-2 h-8 w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Install No.
            </label>
            <input
              type="text"
              value={proposalInfo?.INST_NO}
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
              value={allData?.P_INST}
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
              value={allData?.COMM_YEAR}
              onChange={(e) => setCommYear(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold text-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Retype PR NO
            </label>
            <input
              type="text"
              value={allData?.ORNO}
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
                    // value={allAgentInfo?.CODE}
                    value={allData?.A_CODE}
                    onChange={(e) => setSelectCommCode(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    UM
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.MO_CODE ? allData?.MO_CODE : allAgentInfo?.A_MO
                    }
                    onChange={(e) => setUm(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    BM
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.MM_CODE ? allData?.MM_CODE : allAgentInfo?.A_MM
                    }
                    onChange={(e) => setBm(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    AGM
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.BM_CODE ? allData?.BM_CODE : allAgentInfo?.A_BM
                    }
                    onChange={(e) => setAgm(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    DGM
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.ZM_CODE ? allData?.ZM_CODE : allAgentInfo?.A_ZM
                    }
                    onChange={(e) => setDgm(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    GM
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.AVP_CODE
                        ? allData?.AVP_CODE
                        : allAgentInfo?.A_AVP
                    }
                    onChange={(e) => setGm(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    ED
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.JVPCODE ? allData?.JVPCODE : allAgentInfo?.JVP
                    }
                    onChange={(e) => setEd(e.target.value)}
                    className="mb-2 h-8 w-24 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-12 font-bold">
                    D
                  </label>
                  <input
                    type="text"
                    value={
                      allData?.VP_CODE ? allData?.VP_CODE : allAgentInfo?.A_VP
                    }
                    onChange={(e) => setD(e.target.value)}
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
                      value={
                        allData?.AG_NAME ? allData?.AG_NAME : allAgentInfo?.NAME
                      }
                      onChange={(e) => setMeName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.MO_NAME
                          ? allData?.MO_NAME
                          : allAgentInfo?.MO_NAME
                      }
                      onChange={(e) => setUmName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.MM_NAME
                          ? allData?.MM_NAME
                          : allAgentInfo?.MM_NAME
                      }
                      onChange={(e) => setBmName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.BM_NAME
                          ? allData?.BM_NAME
                          : allAgentInfo?.BM_NAME
                      }
                      onChange={(e) => setAgmName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.ZM_NAME
                          ? allData?.ZM_NAME
                          : allAgentInfo?.ZM_NAME
                      }
                      onChange={(e) => setDgmName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.AVP_NAME
                          ? allData?.AVP_NAME
                          : allAgentInfo?.AVP_NAME
                      }
                      onChange={(e) => setGmName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.JVPNAME
                          ? allData?.JVPNAME
                          : allAgentInfo?.JVP_NAME
                      }
                      onChange={(e) => setEdName(e.target.value)}
                      className="mb-2 h-8 w-60 pl-2 font-bold"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={
                        allData?.VP_NAME
                          ? allData?.VP_NAME
                          : allAgentInfo?.VP_NAME
                      }
                      onChange={(e) => setDName(e.target.value)}
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
                    value={proposalInfo?.RISKDATE}
                    // onChange={(e) => setStartDate(e.target.value)}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Last Pay Date
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.LAST_INST_DATE}
                    // onChange={(e) => setLastPayDate(e.target.value)}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Next Inst. Date
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.RV_DT1}
                    // onChange={(e) => setNextInstDate(e.target.value)}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Notice Date
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.MATURITY}
                    // onChange={(e) => setNoticeDate(e.target.value)}
                    className="mb-2 h-8 w-32 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Plan ID
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.TABLEID}
                    // onChange={(e) => setPlanId(e.target.value)}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Term
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.TERM}
                    // onChange={(e) => setTerm(e.target.value)}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.RATE}
                    // onChange={(e) => setAmount(e.target.value)}
                    className="mb-2 h-8 w-32 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Suspense Amt.
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.SUS_AMT}
                    // onChange={(e) => setSusAmt(e.target.value)}
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
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.INST_NO}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
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
                      value={allData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.P_INST}
                      className="mb-2 h-8 w-24 pl-1 font-bold text-center"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      value={allData?.P_INST}
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
              value={proposalInfo?.INSTMODE}
              // onChange={(e) => setInstallMode(e.target.value)}
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
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
          >
            Delete
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
            onClick={() => window.location.reload()}
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
