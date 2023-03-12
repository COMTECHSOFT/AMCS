import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BMOpenInfo = () => {
  const [value, setValue] = useState(0);
  const [datas, setDatas] = useState([]);
  const moData = datas?.find((data) => data);
  useEffect(() => {
    fetch(` http://192.168.31.94/api/bm_info.php?CODE=${value}`) // 000398
      .then((res) => res.json())
      .then((data) => setDatas(data.bm_info));
  }, [value]);

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
  return (
    <div>
      <nav className="bg-emerald-400 text-center py-6">
        <h1 className="text-black text-2xl font-bold uppercase">
          NEW BM OPEN INFORMATION
        </h1>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-300">
        <div className="border-r-2 border-white p-10 col-span-5">
          <form action="" className="grid grid-cols-1 p-4  ">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                PIN No.
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mb-2 h-8 w-full pl-1"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                BM Code No.
              </label>
              <input
                type="text"
                name=""
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="mb-2 h-8 w-full font-bold pl-2"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={moData?.NAME}
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
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Present Address
              </label>
              <textarea
                name=""
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
                id=""
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
                id=""
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
                id=""
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
                id=""
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
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Licence Renew Date
              </label>
              <input
                type="text"
                name=""
                id=""
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
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-60 ">
                Recruiment Type
              </label>
              <select
                className="w-full pl-2 font-bold mb-2 py-1 focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
              >
                <option value="Directly Appointed">Directly Appointed</option>
                <option value="Promoted">Promoted</option>
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
                  className="mb-2 h-8 w-full font-bold pl-2"
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
                  className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={branchData?.SUB_ZONE_NAME}
                  className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  name=""
                  value={branchData?.Z_NAME}
                  className="mb-2 h-8 w-48 md:w-full pl-2 font-bold"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-10 justify-center">
            <form action="" className="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-32">
                  AGM Code
                </label>
                <input
                  type="text"
                  name=""
                  value={moData?.A_BM}
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
            </form>
            <form
              action=""
              className=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
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
            <textarea name="" id="" rows="4" className="mb-2 w-full pl-1" />
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
          >
            Clear
          </p>
          <Link to="/unitManager">
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

export default BMOpenInfo;
