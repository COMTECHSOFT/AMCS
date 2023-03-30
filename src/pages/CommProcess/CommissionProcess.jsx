import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommissionProcess = () => {
  const todaysDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;

  const month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const desig = ["ME", "MO", "UM", "BM"];
  const yearDrop = ["2020", "2021", "2022", "2023"];

  const [brCode, setBrCode] = useState();
  const [brName, setBrName] = useState();
  const [months, setMonths] = useState();
  const [year, setYear] = useState();
  const [design, setDesign] = useState();

  const mon =
    months === "january"
      ? "01"
      : months === "february"
      ? "02"
      : months === "march"
      ? "03"
      : months === "april"
      ? "04"
      : months === "may"
      ? "05"
      : months === "june"
      ? "06"
      : months === "july"
      ? "07"
      : months === "august"
      ? "08"
      : months === "september"
      ? "09"
      : months === "october"
      ? "10"
      : months === "november"
      ? "11"
      : months === "december"
      ? "12"
      : "";

  const handleCommissionProcess = () => {
    const commProcess = year + mon;
    const passCommProcess = {
      MYEAR: commProcess,
    };
    const url = "http://192.168.31.94/api/all_submit.php";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passCommProcess),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // toast.success("Process Completed successfully!", {
    //   position: toast.POSITION.TOP_CENTER,
    //   autoClose: 2000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    // });
  };

  // const viewReportdata = () => {
  //   console.log(brCode, brName, months, year, bill);
  // };

  //   const [commissionData, setCommissionData] = useState([]);
  //   const allReportData = {
  //     commissionData: commissionData,
  //     month: months,
  //     year: year,
  //     design: design,
  //   };
  //   // console.log(allReportData);
  //   useEffect(() => {
  //     fetch(
  //       `http://192.168.31.94/api/com_report.php?DESIG=${design}&&PMON=${months}&&PYEAR=${year}&&OFF_CODE=${brCode}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setCommissionData(data?.comm_info));
  //   }, [design, months, brCode, year]);

  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));
  if (!getItem) {
    return navigate("/login");
  }
  return (
    <div>
      <nav className="bg-gray-300 px-4 py-2">
        <h1 className="text-black font-bold uppercase">Commission Process</h1>
      </nav>
      <div
        className="bg-slate-200 pb-[22.8%] h- flex justify-center py-10 px-32 ]"
        style={{ height: "" }}
      >
        <div className="border-4 border-white bg-slate-400 w-full">
          <div className="border-b-4 text-center bg-cyan-700 border-white">
            <h1 className="py-4 text-2xl font-bold text-white">
              Chain Code Wise Commission Process
            </h1>
          </div>
          <div className=" py-16">
            <div>
              <form action="" className="col-span-5 px-6 w-[300px] m-auto">
                <div className="flex hidden items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Designation
                  </label>
                  <select
                    className="w-full pl-2 mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                    onChange={(e) => setDesign(e.target.value)}
                  >
                    <option className="cursor-not-allowed" value="Select">
                      Select
                    </option>
                    {desig?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center">
                    <label htmlFor="" className="mx-2 font-bold w-30 ">
                      Month
                    </label>
                    <select
                      className="w-full capitalize pl-1 mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                      onChange={(e) => setMonths(e.target.value)}
                    >
                      {month?.map((item, index) => (
                        <option value={item} key={index} className="capitalize">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-center">
                    <label htmlFor="" className="mx-2 font-bold w-">
                      Year
                    </label>
                    {/* <input
                      type="text"
                      name="proposalNo"
                      onChange={(e) => setYear(e.target.value)}
                      className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                    /> */}
                    <select
                      className="w-full pl-1 mb-2 h-6 text-xs focus:outline-none focus:shadow-outline"
                      onChange={(e) => setYear(e.target.value)}
                    >
                      {yearDrop?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex hidden items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Branch Code
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    onChange={(e) => setBrCode(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>
                <div className="flex hidden items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-32">
                    Zone Name
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    // value={commissionData[0]?.OFF_NAME}
                    onChange={(e) => setBrName(e.target.value)}
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-[70px]">
                    Bill No
                  </label>
                  <input
                    type="text"
                    name="proposalNo"
                    value={
                      year && months
                        ? `${year}${
                            months === "january"
                              ? "01"
                              : months === "february"
                              ? "02"
                              : months === "march"
                              ? "03"
                              : months === "april"
                              ? "04"
                              : months === "may"
                              ? "05"
                              : months === "june"
                              ? "06"
                              : months === "july"
                              ? "07"
                              : months === "august"
                              ? "08"
                              : months === "september"
                              ? "09"
                              : months === "october"
                              ? "10"
                              : months === "november"
                              ? "11"
                              : months === "december"
                              ? "12"
                              : ""
                          }`
                        : ""
                    }
                    className="mb-2 h-6 text-xs w-full pl-2 font-bold"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="border-t-4 bg-cyan-600 py-8 border-white">
            <div className="flex gap-2 justify-center">
              {/* <Link to={`/commReport `} state={""}> */}{" "}
              <button
                onClick={handleCommissionProcess}
                className="bg-white w-48  mb-[-40px] h-8 font-bold shadow"
              >
                Commission Process
              </button>
              {/* </Link> */}
              <Link to="/">
                {" "}
                <button className="bg-white w-48 mb-[-40px] h-8 font-bold shadow">
                  Exit
                </button>
              </Link>
            </div>
            <p className=" float-right text-white font-bold mr-8">
              {todaysDate}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CommissionProcess;
