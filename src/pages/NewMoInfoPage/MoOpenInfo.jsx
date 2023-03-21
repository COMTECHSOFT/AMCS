import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoOpenInfo = () => {
  const rct = ["P", "DA"];
  const [moCode, setMoCode] = useState(0);

  const [datas, setDatas] = useState([]);
  const moData = datas?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/mo_info.php?CODE=${moCode}`) // 000841
      .then((res) => res.json())
      .then((data) => setDatas(data.Mo_info));
  }, [moCode]);

  const [agencyData, setAgencyData] = useState([]);
  const branchData = agencyData?.find((data) => data);
  useEffect(() => {
    fetch(
      `http://192.168.31.94/api/agency_details.php?agency_code=${moData?.AGENCY_CODE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAgencyData(data.agency_details);
      });
  }, [moData?.AGENCY_CODE]);

  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [amo, setAmo] = useState("");
  const [amm, setAmm] = useState("");
  const [abm, setAbm] = useState("");
  const [azm, setAzm] = useState("");
  const [aAvp, setAAvp] = useState("");
  const [avp, setAvp] = useState("");
  const [zone, setZone] = useState("");
  const [subZone, setSubZone] = useState("");
  const [agencyCode, setAgencyCode] = useState("");
  const [jvp, setJvp] = useState("");
  const [mrNo, setMrNo] = useState("");
  const [mrAmt, setMrAmt] = useState("");
  const [dob, setDateOB] = useState("");
  const [doapt, setDoapt] = useState("");
  const [liceNum, setLicNum] = useState("");
  const [licIssDate, setLicIssDate] = useState("");
  const [licExpDate, setLicExpDate] = useState("");
  const [licRenwDate, setLicRenwDate] = useState("");
  const [effDate, setEffDate] = useState("");
  const [expr, setExpr] = useState("");
  const [rctp, setRct] = useState("");

  const handleSave = () => {
    const moNewSaveData = {
      CODE: moCode,
      NAME: name,
      LIC_NO: liceNum,
      LIC_EXPIRY: licExpDate,
      ADDRESS1: address1,
      PHONE2: phone2,
      A_MO: amo,
      A_MM: amm,
      A_BM: abm,
      A_ZM: azm,
      A_AVP: aAvp,
      A_VP: avp,
      DOAPT: doapt,
      MRNO: mrNo,
      MR_AMT: mrAmt,
      DOB: dob,
      EXPR: expr,
      LIC_ISSUE: licIssDate,
      LIC_RENEW: licRenwDate,
      ZONE: zone,
      SUB_ZONE: subZone,
      AGENCY_CODE: agencyCode,
      EF_DATE: effDate,
      F_NAME: fName,
      ADDRESS2: address2,
      RCT: rctp,
      JVP: jvp,
    };
    console.log(moNewSaveData);

    const url = "http://192.168.31.94/api/exinsert.php";
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(moNewSaveData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
  };

  const handleClear = () => {
    window.location.reload();
  };
  return (
    <div>
      <nav className="bg-cyan-900 text-center py-6">
        <h1 className="text-yellow-300 text-2xl font-bold uppercase">
          NEW MO OPEN INFORMATION
        </h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-300">
        <div className="border-r-2 border-white p-10 col-span-5">
          <form
            onSubmit={handleSubmit}
            action=""
            className="grid grid-cols-1 p-4  "
          >
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                PIN No.
              </label>
              <input type="text" className="mb-2 h-8 w-full pl-2 font-bold" />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MO Code No.
              </label>
              <input
                type="text"
                // value={moData?.CODE}
                onChange={(e) => {
                  setMoCode(e.target.value);
                }}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Name
              </label>
              <input
                type="text"
                value={moData?.NAME}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                father's Name
              </label>
              <input
                type="text"
                name=""
                value={moData?.F_NAME}
                onChange={(e) => setFName(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Present Address
              </label>
              <textarea
                name=""
                onChange={(e) => setAddress1(e.target.value)}
                value={moData?.ADDRESS1}
                rows="4"
                className="mb-2 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Permanent Address
              </label>
              <textarea
                name=""
                onChange={(e) => setAddress2(e.target.value)}
                value={moData?.ADDRESS2}
                rows="4"
                className="mb-2 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Date of Birth
              </label>
              <input
                type="text"
                name=""
                value={moData?.DOB}
                onChange={(e) => setDateOB(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Mobile Number
              </label>
              <input
                type="phone"
                name=""
                value={moData?.PHONE2}
                onChange={(e) => setPhone2(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR No.
              </label>
              <input
                type="phone"
                name=""
                value={moData?.MRNO}
                onChange={(e) => setMrNo(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                MR Amount
              </label>
              <input
                type="phone"
                name=""
                value={moData?.MR_AMT}
                onChange={(e) => setMrAmt(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Date of Apoinment
              </label>
              <input
                type="text"
                name=""
                value={moData?.DOAPT}
                onChange={(e) => setDoapt(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Number
              </label>
              <input
                type="text"
                name=""
                value={moData?.LIC_NO}
                onChange={(e) => setLicNum(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Issue Date
              </label>
              <input
                type="text"
                name=""
                value={moData?.LIC_ISSUE}
                onChange={(e) => setLicIssDate(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Expire Date
              </label>
              <input
                type="text"
                name=""
                value={moData?.LIC_EXPIRY}
                onChange={(e) => setLicExpDate(e.target.value)}
                className="mb-2 font-bold h-8 w-full pl-1"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Renew Date
              </label>
              <input
                type="text"
                name=""
                value={moData?.LIC_RENEW}
                onChange={(e) => setLicRenwDate(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Effect Date
              </label>
              <input
                type="text"
                name=""
                value={moData?.EF_DATE}
                onChange={(e) => setEffDate(e.target.value)}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Recruiment Type
              </label>
              <select
                className="w-full pl-2 font-bold mb-2 py-1 focus:outline-none focus:shadow-outline"
                value={moData?.RCT}
                onChange={(e) => setRct(e.target.value)}
              >
                {moData?.RCT ? (
                  <option>
                    {moData?.RCT === "DA" ? "Directly Appointed" : "Promoted"}
                  </option>
                ) : (
                  rct?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                )}
              </select>
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
                <input
                  type="text"
                  name=""
                  value={branchData?.AGENCY_CODE}
                  onChange={(e) => setAgencyCode(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[330px]">
                  District Office
                </label>
                <input
                  type="text"
                  name=""
                  value={branchData?.SUB_ZONE_CODE}
                  onChange={(e) => setSubZone(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-[330px]">
                  Head office Code
                </label>
                <input
                  type="text"
                  name=""
                  value={branchData?.Z_CODE}
                  onChange={(e) => setZone(e.target.value)}
                  className="mb-2 h-8 w-full pl-2 font-bold"
                />
              </div>
            </form>
            <form action="" className="w-[450px]">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={branchData?.AGENCY_NAME}
                  disabled
                  className="mb-2 bg-white h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={branchData?.SUB_ZONE_NAME}
                  disabled
                  className="mb-2 bg-white h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={branchData?.Z_NAME}
                  disabled
                  className="mb-2 bg-white h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-10 justify-center">
            <form action="" className="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  UM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_MO}
                  onChange={(e) => setAmo(e.target.value)}
                  className="mb-2 h-8 font-bold text-right pr-2 w-32 pl-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  BM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_MM}
                  onChange={(e) => setAmm(e.target.value)}
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  AGM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_BM}
                  onChange={(e) => setAbm(e.target.value)}
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  DGM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_ZM}
                  onChange={(e) => setAzm(e.target.value)}
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  GM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_AVP}
                  onChange={(e) => setAAvp(e.target.value)}
                  className="mb-2 h-8 w-32 font-bold text-right pr-2"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  ED Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.JVP}
                  onChange={(e) => setJvp(e.target.value)}
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
                  value={moData?.A_VP}
                  onChange={(e) => setAvp(e.target.value)}
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
              <div className="flex items-center justify-center ">
                <Link to={"/unitManager"}>
                  <input
                    type="submit"
                    value="UM"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/bmInfo"}>
                  <input
                    type="submit"
                    value="BM"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/agmInfo"}>
                  <input
                    type="submit"
                    value="AGM"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/dgmInfo"}>
                  <input
                    type="submit"
                    value="DGM"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link to={"/gmInfo"}>
                  <input
                    type="submit"
                    value="GM"
                    className="mb-2 bg-white font-bold cursor-pointer h-8 w-24 pl-2 "
                  />
                </Link>
              </div>
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
            <textarea
              name=""
              value={moData?.EXPR}
              onChange={(e) => setExpr(e.target.value)}
              rows="4"
              className="mb-2 w-full pl-2 font-bold"
            />
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
            onClick={handleSave}
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
            onClick={handleClear}
          >
            Clear
          </p>
          <Link to="/">
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

export default MoOpenInfo;
