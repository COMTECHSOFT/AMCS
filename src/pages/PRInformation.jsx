import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PRInformation = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const payModeSelect = ["Cash", "Cheque"];

  const [value, setValue] = useState(0);

  const [instNO, setInstNO] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/inst_no.php?ACC_NO=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setInstNO(data.INST_NO);
      });
  }, [value]);

  const [installNumber, setInstallNumber] = useState("");

  const [detailsByInst, setDetailsByInst] = useState([]);
  const findDetailsByInst = detailsByInst?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/inst_details.php?ACC_NO=${value}&&INST_NO=${installNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetailsByInst(data.INST_DETAILS);
      });
  }, [value, installNumber]);

  const [datas, setDatas] = useState([]);
  const allData = datas?.find((data) => data);
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

  const handle_PR_DATE = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setPrDate(getDate);
  };

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
  const [me, setMe] = useState("");

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
      PAY_MODE: payMode,
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
    if (prNo) {
      const url = "http://192.168.31.94/api/commission_insert.php";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newSaveData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      toast.success("Data saved successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      toast.error("Data not saved!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [nextDateTriggerOfComm, setNextDateTriggerOfComm] = useState([]);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/next_pay.php?PAYMODE=${proposalInfo?.INSTMODE}&&DATE=${allData?.PR_DATE}&&INST_NO=1`
    )
      .then((res) => res.json())
      .then((data) => setNextDateTriggerOfComm(data?.Next_pay_date));
  }, [proposalInfo?.INSTMODE, allData?.PR_DATE]);

  const [nextDateTrigger, setNextDateTrigger] = useState([]);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/next_pay.php?PAYMODE=${proposalInfo?.INSTMODE}&&DATE=${findDetailsByInst?.PR_DATE}&&INST_NO=1`
    )
      .then((res) => res.json())
      .then((data) => setNextDateTrigger(data?.Next_pay_date));
  }, [proposalInfo?.INSTMODE, findDetailsByInst?.PR_DATE]);

  const modifyAllDatas = { proposalInfo, allData, instNO };

  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));
  if (!getItem) {
    return navigate("/login");
  }
  return (
    <div>
      <nav className="bg-purple-900 text-center py-2">
        <h1 className="text-pink-300 text-2xl font-bold uppercase">
          AMANA Group <br /> PR Entry Information
        </h1>
      </nav>

      <div className="bg-sky-400 p-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 border-y-2">
        <form onSubmit={handleSubmit} action="" className="col-span-5">
          <div className="mb-2 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account No
            </label>
            <input
              type="text"
              className="w-full border h-6 text-xs border-gray-400 p-2 font-bold"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            {/* <input
              type="submit"
              className="bg-gray-300 hidden text-gray-600 px-3 py-1 cursor-pointer uppercase font-bold"
              value="submit"
            /> */}
          </div>
          <div className="mb-2 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account Name
            </label>
            <input
              type="text"
              className="w-full border h-6 text-xs border-gray-400 p-2 font-bold"
              value={proposalInfo?.PROPOSER}
            />
          </div>
          <div className="mb-2 flex justify-center gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="block text-gray-700 w-60 md:w-48 font-bold"
            >
              {" "}
              Account Status
            </label>
            <input
              type="text"
              className="w-full border h-6 text-xs border-gray-400 p-2 font-bold"
              value={proposalInfo?.ADD4}
            />
          </div>
        </form>
        <div className="col-span-7 flex flex-col md:flex-row gap-4">
          <form action="" className="">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-72">
                Branch Code
              </label>
              <input
                type="text"
                className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                value={allAgencyData?.AGENCY_CODE}
                // onChange={(e) => setAgencyCode(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-72">
                District Code
              </label>
              <input
                type="text"
                className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                value={allAgencyData?.SUB_ZONE_CODE}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-72">
                Head office Code
              </label>
              <input
                type="text"
                className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                value={allAgencyData?.Z_CODE}
              />
            </div>
          </form>
          <form action="" className="w-[450px]">
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.AGENCY_NAME}
                // onChange={(e) => setAgencyName(e.target.value)}
                className="mb-2 h-6 text-xs w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.SUB_ZONE_NAME}
                // onChange={(e) => setSubZoneName(e.target.value)}
                className="mb-2 h-6 text-xs w-48 md:w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={allAgencyData?.Z_NAME}
                // onChange={(e) => setZoneName(e.target.value)}
                className="mb-2 h-6 text-xs w-48 md:w-full pl-2 font-bold"
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
              value={
                findDetailsByInst?.PR_NO
                  ? findDetailsByInst?.PR_NO
                  : allData?.PR_NO
              }
              onChange={(e) => setPrNo(e.target.value)}
              className="mb-2 h-6 text-xs w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              PR Date
            </label>
            {findDetailsByInst?.PR_DATE ? (
              <input
                type="text"
                className="mb-2 h-6 text-xs w-full text-center font-bold"
                value={findDetailsByInst?.PR_DATE}
              />
            ) : allData?.PR_DATE ? (
              <input
                type="text"
                className="mb-2 h-6 text-xs w-full text-center font-bold"
                value={allData?.PR_DATE}
              />
            ) : (
              <input
                type="date"
                onChange={handle_PR_DATE}
                className="mb-2 h-6 text-xs w-full text-center font-bold"
              />
            )}
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Entry Date
            </label>
            <input
              type="text"
              value={proposalInfo?.DATE_TIME}
              onChange={(e) => setEntryDate(e.target.value)}
              className="mb-2 h-6 text-xs w-full text-center font-bold"
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
              value={
                findDetailsByInst?.PR_AMT
                  ? findDetailsByInst?.PR_AMT
                  : allData?.PR_AMT
                  ? allData?.PR_AMT
                  : proposalInfo?.RATE
              }
              onChange={(e) => setPrAmt(e.target.value)}
              className="mb-2 h-6 text-xs w-full text-center font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Pay Mode
            </label>
            <select
              className="mb-2 h-6 text-xs w-full text-center font-bold"
              value={
                findDetailsByInst?.PAY_MODE
                  ? findDetailsByInst?.PAY_MODE
                  : allData?.PAY_MODE
              }
              onChange={(e) => setPayMode(e.target.value)}
            >
              <option>Select</option>
              {findDetailsByInst?.PAY_MODE ? (
                <option>{findDetailsByInst?.PAY_MODE}</option>
              ) : allData?.PAY_MODE ? (
                <option>{allData?.PAY_MODE}</option>
              ) : (
                payModeSelect?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-40">
              Install No.
            </label>
            <input
              type="text"
              value={
                findDetailsByInst?.INST_NO
                  ? findDetailsByInst?.INST_NO
                  : proposalInfo?.INST_NO
              }
              onChange={(e) => setInstllNO(e.target.value)}
              className="mb-2 h-6 text-xs w-full text-center font-bold"
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
              value={
                findDetailsByInst?.P_INST
                  ? findDetailsByInst?.P_INST
                  : allData?.P_INST
              }
              onChange={(e) => setPartial(e.target.value)}
              className="mb-2 h-6 text-xs w-full text-center font-bold"
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
              className="mb-2 h-6 text-xs w-full pl-2 font-bold text-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48">
              Retype PR NO
            </label>
            <input
              type="text"
              value={
                findDetailsByInst?.PR_NO
                  ? findDetailsByInst?.PR_NO
                  : allData?.ORNO
              }
              onChange={(e) => setRetypePrNo(e.target.value)}
              className="mb-2 h-6 text-xs w-full pl-2 font-bold text-center"
            />
          </div>
        </form>
      </div>

      <div className="bg-sky-400 grid grid-cols-1 md:grid-cols-12 border-y-2">
        <div className="col-span-7 p-6">
          <div className="flex flex-col md:flex-row">
            <div className="px-2">
              <p className="font-bold text-center mb-2 md:ml-14">Code</p>
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                    className="mb-2 h-6 text-xs w-16 text-center font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
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
                      className="mb-2 h-6 text-xs w-48 pl-2 font-bold"
                    />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Rate</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold text-center mb-2">Comm.</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold w-24 text-center mb-2">Final Comm.</p>
                <form action="">
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                  <div className="">
                    <input type="text" className="mb-2 h-6 text-xs w-16 pl-1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 p-">
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
                    className="mb-2 text-xs h-6 w-28 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Last Pay Date
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.LAST_INST_DATE}
                    className="mb-2 text-xs h-6 w-28 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Next Inst. Date
                  </label>
                  {nextDateTrigger[0]?.NEXTPAY ? (
                    <input
                      type="text"
                      className="mb-2 text-xs h-6 w-28 text-center font-bold"
                      // value={proposalInfo?.RV_DT1}
                      value={nextDateTrigger[0]?.NEXTPAY}
                    />
                  ) : (
                    <input
                      type="text"
                      className="mb-2 text-xs h-6 w-28 text-center font-bold"
                      // value={proposalInfo?.RV_DT1}
                      value={nextDateTriggerOfComm[0]?.NEXTPAY}
                    />
                  )}
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Notice Date
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.MATURITY}
                    className="mb-2 text-xs h-6 w-28 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Plan ID
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.TABLEID}
                    className="mb-2 text-xs h-6 w-28 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Term
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.TERM}
                    className="mb-2 text-xs h-6 w-28 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.RATE}
                    className="mb-2 text-xs h-6 w-28 pl-1 text-center font-bold"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 w-32 font-bold">
                    Suspense Amt.
                  </label>
                  <input
                    type="text"
                    value={proposalInfo?.SUS_AMT}
                    className="mb-2 text-xs h-6 w-28 pl-1 text-center font-bold"
                  />
                </div>
              </form>
            </div>

            <div className="flex">
              <div className="mr-2">
                <p className="font-bold mb-2">Given Inst.</p>
                <form action="" className="flex flex-col h-64 overflow-y-scroll">
                  {/* <select
                    className="w-full pl-2 font-bold mb-2 py-2 focus:outline-none focus:shadow-outline"
                    onChange={(e) => setInstallNumber(e.target.value)}
                  >
                    <option>Inst No.</option>
                    {instNO?.map((instList, index) => (
                      <option value={instList?.INST_NO} key={index}>
                        {instList?.INST_NO}
                      </option>
                    ))}
                  </select> */}
                  {instNO?.map((instList, index) => (
                    <input
                      key={index}
                      type="text"
                      value={instList?.INST_NO}
                      onFocus={(e) => setInstallNumber(e.target.value)}
                      className="mb-2 text-xs py-1 w-16 pl-1 text-center font-bold"
                    />
                  ))}
                </form>
              </div>
              <div className="mr-2">
                <p className="font-bold  mb-2">Part Inst.</p>
                <form action="">
                  {detailsByInst?.map((pInst, index) => (
                    <div className="">
                      <input
                        type="text"
                        value={pInst?.P_INST}
                        className="mb-2 text-xs h-6 w-16 pl-1 font-bold text-center"
                      />
                    </div>
                  ))}
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
              className="mb-2 text-xs h-6 pl-1 text-center font-bold"
              value={proposalInfo?.INSTMODE}
            />
          </div>
        </div>
      </div>
      <div className="bg-cyan-800 py-2 mt-12">
        <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
          <p
            className={`bg-white text-black font-bold w-36 text-center h-8 text-xl`}
            onClick={handleSave}
          >
            Save
          </p>
          <Link
            to="/modify"
            state={modifyAllDatas}
            className={`bg-white text-black font-bold w-36 text-center h-8 text-xl`}
          >
            {" "}
            <p>New Inst</p>
          </Link>
          <p
            className={`bg-white text-black font-bold w-36 text-center h-8 text-xl`}
          >
            Delete
          </p>
          <p
            className={`bg-white text-black font-bold w-36 text-center h-8 text-xl`}
            onClick={() => window.location.reload()}
          >
            Clear
          </p>
          <Link to="/">
            <p
              className={`bg-white text-black font-bold w-36 text-center h-8 text-xl`}
            >
              Exit
            </p>
          </Link>
        </div>
        <p className="text-white float-right mt-[-32px] mr-8">{todaysDate}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PRInformation;
