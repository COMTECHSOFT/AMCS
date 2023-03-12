import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Nominee = () => {
  const location = useLocation();

  const [relation, setRelation] = useState([]);

  useEffect(() => {
    const url = "http://192.168.31.94/api/relation.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRelation(data?.RELATION));
  }, []);
  return (
    <div className="bg-emerald-400 p-4 mb-12 mt-8 grid grid-cols-1 lg:grid-cols-12">
      {location?.state?.map((data, index) => {
        const { NOMINEE_NAME1, NOMINEE_REL1, NOMINEE_AGE1 } = data;
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
                      name=""
                      value={NOMINEE_NAME1}
                      id=""
                      className="mb-2 h-8 w-full text-center pl-2 font-bold"
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="" className="mx-2 font-bold">
                      2
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full pl-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="" className="mx-2 font-bold">
                      3
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full pl-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="" className="mx-2 font-bold">
                      4
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full pl-1"
                    />
                  </div>
                </form>
              </div>

              <div className="flex gap-2 px-2">
                <div className="w-[200px] ">
                  <p className="font-bold text-center mb-2">Relation</p>
                  <form action="">
                    <div className="">
                      <input
                        type="text"
                        name=""
                        value={NOMINEE_REL1}
                        className="mb-2 h-8 w-full pl-2 text-center font-bold"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="mb-2 h-8 w-full pl-2 font-bold"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="mb-2 h-8 w-full pl-2 font-bold"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="mb-2 h-8 w-full pl-2 font-bold"
                      />
                    </div>
                  </form>
                </div>
                <div className="w-40 mr-2">
                  <p className="font-bold text-center mb-2">Age</p>
                  <form action="">
                    <div className="">
                      <input
                        type="text"
                        name=""
                        value={NOMINEE_AGE1}
                        id=""
                        className="mb-2 h-8 w-full text-center pl-2 font-bold"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2 h-8 w-full pl-1"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2 h-8 w-full pl-1"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2 h-8 w-full pl-1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {location?.state?.map((data, index) => {
        const { NOMINEE_AGE1, NOM_GAR_NAME, NOM_GAR_REL, NOM_GAR_AGE } = data;
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
                    name=""
                    value={NOM_GAR_NAME}
                    id=""
                    className="mb-2 h-8 w-full text-center font-bold"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-20">
                    Relation
                  </label>
                  <input
                    type="text"
                    name=""
                    value={NOM_GAR_REL}
                    id=""
                    className="mb-2 h-8 w-full text-center font-bold"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-20">
                    Age
                  </label>
                  <input
                    type="text"
                    name=""
                    value={NOM_GAR_AGE}
                    id=""
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
                    name=""
                    id=""
                    className="mb-2 h-8 w-full pl-1"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-20">
                    Relation
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full pl-1"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <label htmlFor="" className="mx-2 font-bold w-20">
                    Age
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full pl-1"
                  />
                </div>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Nominee;
