import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Savings = () => {
  const location = useLocation();
  console.log(location?.state);
  const termCondition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [plan, setPlan] = useState([]);
  const [payMode, setPayMode] = useState([]);

  useEffect(() => {
    const url = "http://192.168.31.94/api/plan.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlan(data.plan));
  }, []);

  useEffect(() => {
    const url = "http://192.168.31.94/api/pay_mode.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPayMode(data.pay_mode));
  }, []);
  return (
    <div className=" p-2 lg:p-8">
      {location?.state?.map((data, index) => {
        const {
          BR_CODE,
          BK_DATE,
          RV_DT1,
          AGE_ADMIT,
          LF_PRM,
          INSTMODE,
          SUM_INS,
          FDPS_NO,
          H_NAME,
          LAST_INST_DATE,
          LAST_PAY_DATE,
          MATURITY,
          INST_NO,
          TERM,
          TABLEID,
        } = data;
        return (
          <form
            key={index}
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 border-2"
          >
            {/* <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60 ">
                Plane Code
              </label>
              <select
                className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
              >
                {plan?.map((item) => (
                  <option value={item} key={item.CODE}>
                    {item.CODE}
                  </option>
                ))}
              </select>
            </div> */}
            {/* <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Plan Name
              </label>
              <select
                className="w-full pl-1 mb-2 py-2 focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
              >
                {plan?.map((item) => (
                  <option value={item} key={item.CODE}>
                    {item.NAME}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Plan Code
              </label>
              <input
                type="text"
                name="lastDueDate"
                value={TABLEID}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Plan Name
              </label>
              <input
                type="text"
                name="lastDueDate"
                value={INSTMODE + " Plan"}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Term
              </label>
              <input
                type="text"
                name="lastDueDate"
                value={TERM}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Last Due. Date
              </label>
              <input
                type="text"
                name="lastDueDate"
                value={LAST_INST_DATE}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Amount
              </label>
              <input
                type="text"
                name="amount"
                value={LF_PRM}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Next Prem. Date
              </label>
              <input
                type="text"
                name="nextPremDate"
                value={RV_DT1}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60 ">
                Installment mode
              </label>
              <input
                type="phone"
                name="maturity"
                value={INSTMODE}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Maturity
              </label>
              <input
                type="phone"
                name="maturity"
                value={MATURITY}
                id=""
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold  w-48 md:w-60">
                Installment Amount
              </label>
              <input
                type="text"
                name="installmentAmount"
                value={LF_PRM}
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
                value={INST_NO}
                id=""
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
                value={SUM_INS}
                className="mb-2 h-8 w-full pl-2 font-bold"
              />
            </div>
          </form>
        );
      })}
    </div>
  );
};

export default Savings;
