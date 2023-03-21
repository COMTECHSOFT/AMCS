import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Forms = () => {
  const handleDOB = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDateForAGe = year + "-" + month + "-" + day;
    setDobAge(getDateForAGe);
    const getAge = Math.floor(
      (Date.now() - new Date(getDateForAGe)) / 31557600000
    );
    setAge(getAge);
    let getDate = day + "-" + month + "-" + year;
    setDob(getDate);
  };

  const handleDate = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setDate(getDate);
  };
  const handleLAST_INST_DATE = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setLastDueDate(getDate);
  };
  const handleRV_DT1 = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setNextPremDate(getDate);
  };
  const handleMATURITY = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setMaturity(getDate);
  };
  const handleDATE_TIME = (e) => {
    const selectDate = e.target.value;
    let date = new Date(selectDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let getDate = day + "-" + month + "-" + year;
    setEntriesDate(getDate);
  };

  const navigate = useNavigate();
  const gender = ["Male", "Female"];

  const [branchName, setBranchName] = useState("");
  const [branchData, setBranchData] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/agency_code.php?NAME=${branchName}`)
      .then((res) => res.json())
      .then((data) => setBranchData(data.CODE));
  }, [branchName]);

  const [value, setValue] = useState(0);
  // const [datas, setDatas] = useDatas(value);
  // console.log(datas);

  const [datas, setDatas] = useState([]);
  const formDatas = datas?.find((data) => data);
  console.log(formDatas);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => setDatas(data.Proposal_info));
  }, [value]);

  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${formDatas?.BR_CODE}`
    )
      .then((res) => res.json())
      .then((data) => setBranchData(data.agency_details));
  }, [formDatas?.BR_CODE]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const accountStatusSelect = [
    "Inforce",
    "Inactive",
    "Maturity Done",
    "Lapse",
    "Refund",
    "Transfer",
    "No Communication",
  ];

  const [payMode, setPayMode] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/pay_mode.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPayMode(data.pay_mode));
  }, []);

  const [relation, setRelation] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/relation.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRelation(data.RELATION));
  }, []);

  const [occupation, setOccupation] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/occupation.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOccupation(data.occupation));
  }, []);

  const [plan, setPlan] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/plan.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlan(data.plan));
  }, []);

  const [agency, setAgency] = useState([]);
  useEffect(() => {
    const url = "http://192.168.31.94/api/agency_name.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgency(data.AGENCY_NAME));
  }, []);

  const [prEntryInfo, setPrEntryInfo] = useState([]);
  const findPrEntryInfo = prEntryInfo?.find((data) => data);
  useEffect(() => {
    fetch("http://192.168.31.94/api/pr_entry_info.php?FDPS_NO=0123000041")
      .then((res) => res.json())
      .then((data) => setPrEntryInfo(data.PR_info));
  }, []);

  const [branchCode, setBranchCode] = useState(formDatas?.BR_CODE);
  const [agencyData, setAgencyData] = useState([]);
  const allData = agencyData?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${formDatas?.BR_CODE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAgencyData(data.agency_details);
      });
  }, [branchCode, formDatas?.BR_CODE]);

  const [mainData, setMainData] = useState([]);
  const findAllMainData = mainData?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=0123000041`)
      .then((res) => res.json())
      .then((data) => setMainData(data.Proposal_info));
  }, []);

  const entryDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  // save new data start
  const [proNo, setProNo] = useState("");
  // account holder info
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [gName, setGName] = useState("");
  const [mName, setMName] = useState("");
  const [dob, setDob] = useState("");
  const [dobAge, setDobAge] = useState("");
  const [age, setAge] = useState();
  const [occp, setOccp] = useState("");
  const [occpName, setOccpName] = useState("");
  const [nat, setNat] = useState("");
  const [natId, setNatId] = useState("");
  const [sex, setSex] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [tele, setTele] = useState("");
  const [email, setEmail] = useState("");
  const [preAdd, setPreADd] = useState("");
  const [perAdd, setPerAdd] = useState("");

  // savings info
  const [planName, setPlanName] = useState("");
  const [selectPlanCode, setSelectPlanCode] = useState([]);
  useEffect(() => {
    const url = `http://192.168.31.94/api/plan_code.php?NAME=${planName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectPlanCode(data.CODE));
  }, [planName]);
  const [term, setTerm] = useState("");
  const [lastDueDate, setLastDueDate] = useState("");
  const [amount, setAmount] = useState("");
  const [nextPremDate, setNextPremDate] = useState("");
  const [maturity, setMaturity] = useState("");
  const [instlAmt, setInstlAmt] = useState("");
  const [instlNo, setInstlNo] = useState("");
  const [totalDepAmt, setTotalDepAmt] = useState("");

  // nominee info
  const [nomName1, setNomName1] = useState("");
  const [nomName2, setNomName2] = useState("");
  const [nomName3, setNomName3] = useState("");
  const [nomName4, setNomName4] = useState("");
  const [nomRel1, setNomRel1] = useState("");
  const [nomRel2, setNomRel2] = useState("");
  const [nomRel3, setNomRel3] = useState("");
  const [nomRel4, setNomRel4] = useState("");
  const [nomAge1, setNomAge1] = useState("");
  const [nomAge2, setNomAge2] = useState("");
  const [nomAge3, setNomAge3] = useState("");
  const [nomAge4, setNomAge4] = useState("");
  const [nomGarName, setNomGarName] = useState("");
  const [nomGarRel, setNomGarRel] = useState("");
  const [nomGarAge, setNomGarAge] = useState("");
  const [nomGarName1, setNomGarName1] = useState("");
  const [nomGarRel1, setNomGarRel1] = useState("");
  const [nomGarAge1, setNomGarAge1] = useState("");

  // FPR summary info
  const [agencyCode, setAgencyCode] = useState("");
  // const [agencyName, setAgencyName] = useState("");
  const [subZoneCode, setSubZoneCode] = useState("");
  // const [subZoneName, setSubZoneName] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  // const [zoneName, setZoneName] = useState("");
  const [entriesDate, setEntriesDate] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  // save new data end

  const handleSave = () => {
    const newSaveData = {
      PROPOSER: name,
      FDPS_NO: value,
      PRO_NO: proNo,
      AGE: age,
      SEX: sex,
      M_NAME: mName,
      F_NAME: fName,
      H_NAME: sName,
      G_NAME: gName,
      OCCUPATION: occp,
      OC_NAME: occpName,
      NAT: nat,
      NAT_ID: natId,
      RV1: mobNo,
      TELEPHONE: tele,
      RISKDATE: date,
      DOB: dob,
      EMAIL: email,
      COF_PS: preAdd,
      COF_PER: perAdd,
      TABLEID: selectPlanCode[0]?.CODE,
      INSTMODE: planName,
      TERM: term,
      LAST_INST_DATE: lastDueDate,
      RATE: amount,
      RV_DT1: nextPremDate,
      MATURITY: maturity,
      LF_PRM: instlAmt,
      INST_NO: instlNo,
      SUM_INS: totalDepAmt,
      NOMINEE_NAME1: nomName1,
      NOMINEE_NAME2: nomName2,
      NOMINEE_NAME3: nomName3,
      NOMINEE_NAME4: nomName4,
      NOMINEE_REL1: nomRel1,
      NOMINEE_REL2: nomRel2,
      NOMINEE_REL3: nomRel3,
      NOMINEE_REL4: nomRel4,
      NOMINEE_AGE1: nomAge1,
      NOMINEE_AGE2: nomAge2,
      NOMINEE_AGE3: nomAge3,
      NOMINEE_AGE4: nomAge4,
      NOM_GAR_NAME: nomGarName,
      NOM_GAR_NAME1: nomGarName1,
      NOM_GAR_REL: nomGarRel,
      NOM_GAR_REL1: nomGarRel1,
      NOM_GAR_AGE: nomGarAge,
      NOM_GAR_AGE1: nomGarAge1,
      BR_CODE: branchData[0]?.AGENCY_CODE,
      SC_CODE: branchData[0]?.SUB_ZONE_CODE,
      ENTRY_ZONE_CODE: branchData[0]?.Z_CODE,
      ADD4: accountStatus,
      DATE_TIME: entriesDate,
    };
    console.log(newSaveData);
    const url = "http://192.168.31.94/api/insert.php";
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

  const handleCrear = (e) => {
    window.location.reload();
  };

  return (
    <div className="p-4 bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex-col md:flex-row flex md:justify-between md:px-12 my-4"
      >
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
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="w-full border border-gray-400 py-2 text-center font-bold"
          />
          {/* <Link to={"/account"} state={formDatas}>
            {" "}
            <input
              type="submit"
              className="bg-gray-300 text-gray-600 px-3 py-2 cursor-pointer uppercase font-bold"
              value="submit"
            />
          </Link> */}
        </div>

        <div className="mb-4 flex justify-center gap-2 items-center ">
          <label
            htmlFor="membershipNo"
            className="block text-gray-700 w-60 md:w-48 font-bold"
          >
            Membership No
          </label>
          <input
            type="text"
            value={formDatas?.FDPS_NO}
            onChange={(e) => setProNo(e.target.value)}
            className="w-full border border-gray-400 py-2 text-center font-bold"
          />
        </div>
      </form>

      <div>
        <p className="font-bold text-xl bg-gray-600 text-white text-center py-2">
          {" "}
          Account Holder Information
        </p>
        <div className="" style={{ backgroundColor: "#E5E7EB" }}>
          <div className=" p-2 lg:p-8">
            <form
              action=""
              className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 border-2"
            >
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Date
                </label>
                {formDatas?.RISKDATE ? (
                  <input
                    type="text"
                    value={formDatas?.RISKDATE}
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                ) : (
                  <input
                    type="date"
                    onChange={handleDate}
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                )}
              </div>

              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Father's Name
                </label>
                <input
                  type="text"
                  value={formDatas?.F_NAME}
                  onChange={(e) => setFName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Name
                </label>
                <input
                  type="text"
                  value={formDatas?.PROPOSER}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Spouse Name
                </label>
                <input
                  type="text"
                  value={formDatas?.H_NAME}
                  onChange={(e) => setSName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  G Name
                </label>
                <input
                  type="text"
                  value={formDatas?.G_NAME}
                  onChange={(e) => setGName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Mother's Name
                </label>
                <input
                  type="text"
                  value={formDatas?.M_NAME}
                  onChange={(e) => setMName(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-36 ">
                    Date of Birth
                  </label>
                  {formDatas?.DOB ? (
                    <input
                      type="text"
                      value={formDatas?.DOB}
                      className="mb-2 h-8 w-full ml-16 pl-2 font-bold"
                    />
                  ) : (
                    <input
                      type="date"
                      formDatas="yyyy-mm-dd"
                      onChange={handleDOB}
                      className="mb-2 h-8 w-full ml-16 pl-2 font-bold"
                    />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w- ">
                    Age
                  </label>
                  <input
                    type="text"
                    value={
                      formDatas?.AGE
                        ? formDatas?.AGE
                        : dobAge &&
                          Math.floor(
                            (Date.now() - new Date(dobAge)) / 31557600000
                          )
                    }
                    className="mb-2 h-8 w-24 pl-2 font-bold"
                  />
                  {/* setAge */}
                  {/* {dob && (
                    <p>
                      {" "}
                      {Math.floor(
                        (Date.now() - new Date(dobAge)) / 31557600000
                      )}{" "}
                    </p>
                  )} */}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Occupation
                </label>
                <select
                  className="w-full pl-2 font-bold mb-2 py-2 focus:outline-none focus:shadow-outline"
                  value={formDatas?.OC_NAME}
                  onChange={(e) => setOccpName(e.target.value)}
                >
                  <option>Select</option>
                  {formDatas?.OC_NAME ? (
                    <option>{formDatas?.OC_NAME}</option>
                  ) : (
                    occupation?.map((item) => (
                      <option value={item.NAME} key={item.CODE}>
                        {item.NAME}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Nationality
                </label>
                <input
                  type="text"
                  value={formDatas?.NAT}
                  onChange={(e) => setNat(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  National ID
                </label>
                <input
                  type="text"
                  value={formDatas?.NAT_ID}
                  onChange={(e) => setNatId(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Gender
                </label>
                <select
                  className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
                  value={formDatas?.SEX}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option>Select</option>
                  {formDatas?.SEX ? (
                    <option>{formDatas?.SEX}</option>
                  ) : (
                    gender?.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Mobile No.
                </label>
                <input
                  type="phone"
                  value={formDatas?.RV1}
                  onChange={(e) => setMobNo(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Telephone
                </label>
                <input
                  type="text"
                  value={formDatas?.TELEPHONE}
                  onChange={(e) => setTele(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Email
                </label>
                <input
                  type="email"
                  value={formDatas?.EMAIL}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 pb-8">
            <div className="flex flex-col mb-6 lg:mb-0 justify-center items-center">
              <p className="font-bold text-center mb-2 ">Present Address</p>
              <textarea
                className="block lg:hidden font-bold p-2"
                name=""
                value={formDatas?.COF_PS}
                onChange={(e) => setPreADd(e.target.value)}
                cols="30"
                rows="3"
              ></textarea>
              <textarea
                className="hidden lg:block font-bold p-2"
                name=""
                value={formDatas?.COF_PS}
                onChange={(e) => setPreADd(e.target.value)}
                cols="60"
                rows="4"
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-center mb-2 ">Permanent Address</p>
              <textarea
                className="block lg:hidden font-bold p-2"
                name=""
                value={formDatas?.COF_PER}
                onChange={(e) => setPerAdd(e.target.value)}
                cols="30"
                rows="3"
              ></textarea>
              <textarea
                className="hidden lg:block font-bold p-2"
                name=""
                value={formDatas?.COF_PER}
                onChange={(e) => setPerAdd(e.target.value)}
                cols="60"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold text-xl bg-gray-600 text-white text-center py-2">
          {" "}
          Savings Information
        </p>
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 border-2 "
        >
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Plan Name
            </label>
            <select
              onChange={(e) => setPlanName(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            >
              {formDatas?.INSTMODE ? (
                <option>{formDatas?.INSTMODE}</option>
              ) : (
                plan?.map((item) => (
                  <option value={item.NAME} key={item.CODE}>
                    {item.NAME}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Plan Code
            </label>
            <input
              type="text"
              value={
                formDatas?.TABLEID
                  ? formDatas?.TABLEID
                  : selectPlanCode[0]?.CODE
              }
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Term
            </label>
            <input
              type="text"
              value={formDatas?.TERM}
              onChange={(e) => setTerm(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Last Due. Date
            </label>
            {formDatas?.LAST_INST_DATE ? (
              <input
                type="text"
                value={formDatas?.LAST_INST_DATE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            ) : (
              <input
                type="date"
                onChange={handleLAST_INST_DATE}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            )}
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Amount
            </label>
            <input
              type="text"
              name="amount"
              value={formDatas?.RATE}
              onChange={(e) => setAmount(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Next Prem. Date
            </label>
            {formDatas?.RV_DT1 ? (
              <input
                type="text"
                value={formDatas?.RV_DT1}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            ) : (
              <input
                type="date"
                onChange={handleRV_DT1}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            )}
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60 ">
              Pay mode
            </label>
            <select
              // onChange={(e) => setPlanName(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            >
              {formDatas?.INSTMODE ? (
                <option>{formDatas?.INSTMODE}</option>
              ) : (
                payMode?.map((item) => (
                  <option value={item.NAME} key={item.CODE}>
                    {item.NAME}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Maturity
            </label>
            {formDatas?.MATURITY ? (
              <input
                type="text"
                value={formDatas?.MATURITY}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            ) : (
              <input
                type="date"
                onChange={handleMATURITY}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            )}
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Installment Amount
            </label>
            <input
              type="text"
              name="installmentAmount"
              value={formDatas?.LF_PRM}
              onChange={(e) => setInstlAmt(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
              Installment No
            </label>
            <input
              type="text"
              name="installmentNo"
              value={formDatas?.INST_NO}
              onChange={(e) => setInstlNo(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 md:w-60">
              Total Depositable Amt
            </label>
            <input
              type="email"
              name=""
              value={formDatas?.SUM_INS}
              onChange={(e) => setTotalDepAmt(e.target.value)}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
        </form>
      </div>

      <div>
        <p className="font-bold text-xl bg-gray-600 text-white text-center py-2">
          {" "}
          Nominee Information
        </p>
        <div className="bg-emerald-400 p-4 mb-12 mt-8 grid grid-cols-1 lg:grid-cols-12 ">
          {datas?.map((data, index) => {
            const {
              NOMINEE_NAME1,
              NOMINEE_NAME2,
              NOMINEE_NAME3,
              NOMINEE_NAME4,
              NOMINEE_REL1,
              NOMINEE_REL2,
              NOMINEE_REL3,
              NOMINEE_REL4,
              NOMINEE_AGE1,
              NOMINEE_AGE2,
              NOMINEE_AGE3,
              NOMINEE_AGE4,
            } = data;
            return (
              <div className="col-span-8 border-2" key={index}>
                <h1 className="text-center text-xl py-6 border-b-2 font-bold">
                  Nominee Information
                </h1>
                <div className="flex flex-col justify-center mt-4 md:flex-row gap-4">
                  <div className=" px-2">
                    <p className="font-bold text-center mb-2">Name</p>
                    <form action="">
                      <div className="flex items-center">
                        <label htmlFor="" className="mx-2 font-bold">
                          1
                        </label>
                        <input
                          type="text"
                          value={NOMINEE_NAME1}
                          onChange={(e) => setNomName1(e.target.value)}
                          className="mb-2 h-8 w-full text-center pl-2 font-bold"
                        />
                      </div>
                      <div className="flex items-center">
                        <label htmlFor="" className="mx-2 font-bold">
                          2
                        </label>
                        <input
                          type="text"
                          value={NOMINEE_NAME2}
                          onChange={(e) => setNomName2(e.target.value)}
                          className="mb-2 h-8 w-full text-center pl-2 font-bold"
                        />
                      </div>
                      <div className="flex items-center">
                        <label htmlFor="" className="mx-2 font-bold">
                          3
                        </label>
                        <input
                          type="text"
                          value={NOMINEE_NAME3}
                          onChange={(e) => setNomName3(e.target.value)}
                          className="mb-2 h-8 w-full text-center pl-2 font-bold"
                        />
                      </div>
                      <div className="flex items-center">
                        <label htmlFor="" className="mx-2 font-bold">
                          4
                        </label>
                        <input
                          type="text"
                          value={NOMINEE_NAME4}
                          onChange={(e) => setNomName4(e.target.value)}
                          className="mb-2 h-8 w-full text-center pl-2 font-bold"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="flex gap-2 px-2">
                    <div className="w-[200px] ">
                      <p className="font-bold text-center mb-2">Relation</p>
                      <form action="">
                        <div className="">
                          <select
                            onChange={(e) => setNomRel1(e.target.value)}
                            className="mb-2 h-8 w-full text-center font-bold"
                          >
                            {NOMINEE_REL1 ? (
                              <option>{NOMINEE_REL1}</option>
                            ) : (
                              relation?.map((item) => (
                                <option value={item.NAME} key={item.CODE}>
                                  {item.NAME}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div className="">
                          <select
                            onChange={(e) => setNomRel2(e.target.value)}
                            className="mb-2 h-8 w-full text-center font-bold"
                          >
                            {NOMINEE_REL2 ? (
                              <option>{NOMINEE_REL2}</option>
                            ) : (
                              relation?.map((item) => (
                                <option value={item.NAME} key={item.CODE}>
                                  {item.NAME}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div className="">
                          <select
                            onChange={(e) => setNomRel3(e.target.value)}
                            className="mb-2 h-8 w-full text-center font-bold"
                          >
                            {NOMINEE_REL3 ? (
                              <option>{NOMINEE_REL3}</option>
                            ) : (
                              relation?.map((item) => (
                                <option value={item.NAME} key={item.CODE}>
                                  {item.NAME}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div className="">
                          <select
                            onChange={(e) => setNomRel4(e.target.value)}
                            className="mb-2 h-8 w-full text-center font-bold"
                          >
                            {NOMINEE_REL4 ? (
                              <option>{NOMINEE_REL4}</option>
                            ) : (
                              relation?.map((item) => (
                                <option value={item.NAME} key={item.CODE}>
                                  {item.NAME}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="w-40 mr-2">
                      <p className="font-bold text-center mb-2">Age</p>
                      <form action="">
                        <div className="">
                          <input
                            type="text"
                            value={NOMINEE_AGE1}
                            onChange={(e) => setNomAge1(e.target.value)}
                            className="mb-2 h-8 w-full text-center pl-2 font-bold"
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            value={NOMINEE_AGE2}
                            onChange={(e) => setNomAge2(e.target.value)}
                            className="mb-2 h-8 w-full text-center pl-2 font-bold"
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            value={NOMINEE_AGE3}
                            onChange={(e) => setNomAge3(e.target.value)}
                            className="mb-2 h-8 w-full text-center pl-2 font-bold"
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            value={NOMINEE_AGE4}
                            onChange={(e) => setNomAge4(e.target.value)}
                            className="mb-2 h-8 w-full text-center pl-2 font-bold"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {datas?.map((data, index) => {
            const {
              NOM_GAR_NAME,
              NOM_GAR_NAME1,
              NOM_GAR_REL,
              NOM_GAR_REL1,
              NOM_GAR_AGE,
              NOM_GAR_AGE1,
            } = data;
            return (
              <div className="col-span-4 border-2 p-4" key={index}>
                <div>
                  <h1 className="font-bold text-center mb-4">
                    Guardian Information-1
                  </h1>
                  <form action="">
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Name
                      </label>
                      <input
                        type="text"
                        value={NOM_GAR_NAME}
                        onChange={(e) => setNomGarName(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Relation
                      </label>
                      <select
                        onChange={(e) => setNomGarRel(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      >
                        {NOM_GAR_REL ? (
                          <option>{NOM_GAR_REL}</option>
                        ) : (
                          relation?.map((item) => (
                            <option value={item.NAME} key={item.CODE}>
                              {item.NAME}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Age
                      </label>
                      <input
                        type="text"
                        value={NOM_GAR_AGE}
                        onChange={(e) => setNomGarAge(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      />
                    </div>
                  </form>
                </div>
                <div>
                  <h1 className="font-bold text-center my-4">
                    Guardian Information-2
                  </h1>
                  <form action="">
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Name
                      </label>
                      <input
                        type="text"
                        value={NOM_GAR_NAME1}
                        onChange={(e) => setNomGarName1(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Relation
                      </label>
                      <select
                        onChange={(e) => setNomGarRel1(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      >
                        {NOM_GAR_REL1 ? (
                          <option>{NOM_GAR_REL1}</option>
                        ) : (
                          relation?.map((item) => (
                            <option value={item.NAME} key={item.CODE}>
                              {item.NAME}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="mx-2 font-bold w-20">
                        Age
                      </label>
                      <input
                        type="text"
                        value={NOM_GAR_AGE1}
                        onChange={(e) => setNomGarAge1(e.target.value)}
                        className="mb-2 h-8 w-full text-center font-bold"
                      />
                    </div>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="font-bold text-xl bg-gray-600 text-white text-center py-2">
          {" "}
          Office & FPR Summary
        </p>
        <div className="p-4" style={{ backgroundColor: "#E5E7EB" }}>
          <div className="mt-4 border-2 border-gray-400 p-4 2 bg-gray-300">
            <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Branch Name
                </label>
                <select
                  className="mb-2 h-8 w-full font-bold bg-white  pl-2"
                  value={allData?.AGENCY_NAME}
                  onChange={(e) => setBranchName(e.target.value)}
                >
                  {allData?.AGENCY_NAME ? (
                    <option value="Choose Branch Code">
                      {allData?.AGENCY_NAME}
                    </option>
                  ) : (
                    agency?.map((item) => (
                      <option value={item.AGENCY_NAME} key={item.AGENCY_CODE}>
                        {item.AGENCY_NAME}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-52 ">
                  Branch Code
                </label>
                <input
                  type="text"
                  value={branchData[0]?.AGENCY_CODE}
                  onChange={(e) => setAgencyCode(e.target.value)}
                  className="mb-2 h-8 w-full font-bold bg-white  pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48">
                  District Code
                </label>
                <input
                  type="text"
                  // value={allData?.SUB_ZONE_CODE}
                  value={branchData[0]?.SUB_ZONE_CODE}
                  onChange={(e) => setSubZoneCode(e.target.value)}
                  className="mb-2 h-8 w-full font-bold bg-white  pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-52">
                  Distict Name
                </label>
                <input
                  type="text"
                  // value={allData?.SUB_ZONE_NAME}
                  value={branchData[0]?.SUB_ZONE_NAME}
                  className="mb-2 h-8 w-full font-bold bg-white cursor-not-allowed pl-2"
                  disabled
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48 ">
                  Head Office Code
                </label>
                <input
                  type="text"
                  // value={allData?.Z_CODE}
                  value={branchData[0]?.Z_CODE}
                  onChange={(e) => setZoneCode(e.target.value)}
                  className="mb-2 h-8 w-full font-bold bg-white  pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-52">
                  Head Office Name
                </label>
                <input
                  type="text"
                  // value={allData?.Z_NAME}
                  value={branchData[0]?.Z_NAME}
                  className="mb-2 h-8 w-full font-bold bg-white cursor-not-allowed pl-2"
                  disabled
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-48">
                  Entry Date
                </label>
                {formDatas?.DATE_TIME ? (
                  <input
                    type="text"
                    value={formDatas?.DATE_TIME}
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                ) : (
                  <input
                    type="date"
                    onChange={handleDATE_TIME}
                    className="mb-2 h-8 w-full pl-2 font-bold"
                  />
                )}
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-52">
                  Account Status
                </label>
                <select
                  className="w-full pl-2 font-bold mb-2 py-2 focus:outline-none focus:shadow-outline"
                  value={formDatas?.ADD4}
                  onChange={(e) => setAccountStatus(e.target.value)}
                >
                  {formDatas?.ADD4 ? (
                    <option>{formDatas?.ADD4}</option>
                  ) : (
                    accountStatusSelect?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="md:px-12">
        <div className=" mt-4 p-4" style={{ backgroundColor: "#D6CFC7" }}>
          <div className="flex flex-col md:flex-row mb-6 gap-2 justify-center cursor-pointer">
            <p
              className={`border-2 py-2 px-6 text-xl border-r-black ${
                pathname === "/account"
                  ? "font-bold bg-sky-500 text-white border-b-0"
                  : ""
              }`}
            >
              <Link to={"/account"} state={formDatas}>
                {" "}
                Account Holder Information
              </Link>
            </p>
            <p
              className={`border-2 py-2 px-6 text-xl  border-l-black border-r-black ${
                pathname === "/savings"
                  ? "font-bold bg-sky-500 text-white border-b-0"
                  : ""
              }`}
            >
              <Link to="/savings" state={datas}>
                Savings Information
              </Link>
            </p>
            <p
              className={`border-2 py-2 px-6 text-xl  border-l-black border-r-black ${
                pathname === "/nominee"
                  ? "font-bold bg-sky-500 text-white border-b-0"
                  : ""
              }`}
            >
              <Link to="/nominee" state={datas}>
                {" "}
                Nominee Information
              </Link>
            </p>
            <p
              className={`border-2 py-2 px-6 text-xl border-l-black ${
                pathname === "/summary"
                  ? "font-bold bg-sky-500 text-white border-b-0"
                  : ""
              }`}
            >
              <Link to="/summary" state={datas}>
                {" "}
                Office & FPR Summary
              </Link>
            </p>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div> */}
      <div className="bg-indigo-300 p-10 mt-12">
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
            <Link
              to="/amanaGroup"
              state={{
                ...allData,
                findPrEntryInfo,
                findAllMainData,
              }}
            >
              First PR Entry
            </Link>
          </p>
          <p
            className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
            onClick={handleCrear}
          >
            Clear
          </p>
          <Link to="/">
            {" "}
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl `}
            >
              Exit
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forms;
