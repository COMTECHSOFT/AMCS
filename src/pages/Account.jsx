import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import useDatas from "../customHook/useDatas";

const UserContext = createContext();

const Account = () => {
  const location = useLocation();
  const {
    BK_DATE,
    H_NAME,
    COF_PS,
    COF_PER,
    M_NAME,
    ADD4,
    AGE,
    BR_CODE,
    DOB,
    ENTRY_ZONE_CODE,
    FDPS_NO,
    MATURITY,
    RV1,
    OCCUPATION,
    PROPOSER,
    RISKDATE,
    SC_CODE,
    SEX,
    TERM,
    OC_NAME,
    NAT_ID,
    F_NAME,
    NOM_GAR_NAME,
    NAT,
  } = location?.state;

  const [occupation, setOccupation] = useState([]);

  useEffect(() => {
    const url = "http://192.168.31.94/api/occupation.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOccupation(data.occupation));
  }, []);

  // const [datas, setDatas] = useState([]);
  // console.log(datas);

  // // 0123000041

  // useEffect(() => {
  //   fetch(`http://192.168.31.94/api/occupation.php`)
  //     .then((res) => res.json())
  //     .then((data) => setDatas(data.Proposal_info));
  // }, []);

  return (
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
            <input
              type="text"
              name=""
              value={RISKDATE}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Father's Name
            </label>
            <input
              type="text"
              name=""
              value={F_NAME}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={PROPOSER}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Spouse Name
            </label>
            <input
              type="text"
              name=""
              value={NOM_GAR_NAME}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              G Name
            </label>
            <input
              type="text"
              name=""
              value={""}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Mother's Name
            </label>
            <input
              type="text"
              name=""
              value={M_NAME}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-36 ">
                Date of Birth
              </label>
              <input
                type="text"
                name=""
                value={DOB}
                id=""
                className="mb-2 h-8 w-48 pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w- ">
                Age
              </label>
              <input
                type="text"
                name=""
                value={AGE}
                id=""
                className="mb-2 h-8 w-24 pl-2 font-bold"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-36 ">
                Occupation
              </label>
              <input
                type="text"
                name=""
                value={OCCUPATION}
                id=""
                className="mb-2 h-8 w-24 pl-2 font-bold"
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                name=""
                value={OC_NAME}
                id=""
                className="mb-2 h-8 w- pl-2 font-bold"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Nationality
            </label>
            <input
              type="text"
              name=""
              value={NAT}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              National ID
            </label>
            <input
              type="text"
              name=""
              value={NAT_ID}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              SEX
            </label>
            <input
              type="text"
              name=""
              value={SEX}
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Mobile No.
            </label>
            <input
              type="phone"
              name=""
              value={RV1}
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Telephone
            </label>
            <input
              type="text"
              name=""
              id=""
              className="mb-2 h-8 w-full pl-2 font-bold"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="" className="mx-2 font-bold w-48 ">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
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
            value={COF_PS}
            cols="30"
            rows="3"
          ></textarea>
          <textarea
            className="hidden lg:block font-bold p-2"
            name=""
            value={COF_PS}
            cols="60"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-center mb-2 ">Permanent Address</p>
          <textarea
            className="block lg:hidden font-bold p-2"
            name=""
            value={COF_PER}
            cols="30"
            rows="3"
          ></textarea>
          <textarea
            className="hidden lg:block font-bold p-2"
            name=""
            value={COF_PER}
            cols="60"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Account;
