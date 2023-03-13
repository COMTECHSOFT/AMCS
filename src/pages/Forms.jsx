import React, { createContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useDatas from "../customHook/useDatas";

const Forms = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  // const [datas, setDatas] = useDatas(value);
  // console.log(datas);

  const [datas, setDatas] = useState([]);
  const formDatas = datas?.find((data) => data);

  // 0123000041

  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => setDatas(data.Proposal_info));
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setTimeout(() => {
    //   navigate("/account");
    // }, 10);

    navigate("/savings");
  };

  return (
    <div className="p-4 bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex-col md:flex-row flex md:justify-between md:px-12 "
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
            name="accountNo"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="w-full border border-gray-400 py-2 text-center font-bold"
          />
          <Link to={"/account"} state={formDatas}>
            {" "}
            <input
              type="submit"
              className="bg-gray-300 text-gray-600 px-3 py-2 cursor-pointer uppercase font-bold"
              value="submit"
            />
          </Link>
         
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
            name="membershipNo"
            value={formDatas?.FDPS_NO}
            className="w-full border border-gray-400 py-2 text-center font-bold"
          />
        </div>
      </form>

      <div className="md:px-12">
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
      </div>
    </div>
  );
};

export default Forms;
