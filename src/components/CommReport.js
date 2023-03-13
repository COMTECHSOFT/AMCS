import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

function CommReport() {
  const componentRef = useRef();
  const location = useLocation();
  console.log(location?.state?.commissionData);

  const allNewCollection = (columnKey) => {
    return location?.state?.commissionData?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  const allNewCommission = (columnKey) => {
    return location?.state?.commissionData?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  const allRenewalCollection = (columnKey) => {
    return location?.state?.commissionData?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  const allRenewalCommission = (columnKey) => {
    return location?.state?.commissionData?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  return (
    <div>
      <ReactToPrint
        trigger={() => <h1 className="cursor-pointer absolute">Print</h1>}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
              className="w-96 h-20"
            />
            <div className="mb-4">
              <p className="text-center">
                Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
                01771-62766
              </p>
              <p className="text-center">Branch Wise MO Commission Bill</p>
              <p className="text-center">
                For the Month of:{" "}
                {`${location?.state?.month} ${location?.state?.year}`}
              </p>
            </div>
          </div>
          <div className="px-4">
            <h1 className="border border-black p-1 font-bold">
              Branch Code & Name: {location?.state?.commissionData[0]?.B_CODE} -{" "}
              {location?.state?.commissionData[0]?.AGENCY_NAME}
            </h1>
          </div>
        </div>
        <div className="overflow-x-auto px-4">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Sl. No.
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  MO Code
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  MO Name
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Collection (NEW)
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Commission (NEW)
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Renewal Collection
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Renewal Commission
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Total Collection
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Total Commission
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Tax
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Net Pay
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  Signature
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {location?.state?.commissionData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center font-medium text-gray-900">
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {data.A_CODE}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{data.NAME}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {data.NEW_PRM}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {" "}
                        {data.AG_COMM_NEW}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {" "}
                        {data.OTHER_PRM}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {" "}
                        {data.AG_COMM_OTHER}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {+data.OTHER_PRM + +data.NEW_PRM}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {+data.AG_COMM_OTHER + +data.AG_COMM_NEW}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">{` ${
                        ((+data.AG_COMM_OTHER + +data.AG_COMM_NEW) * 5) / 100
                      }`}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500">
                        {+data.AG_COMM_OTHER +
                          +data.AG_COMM_NEW -
                          ((+data.AG_COMM_OTHER + +data.AG_COMM_NEW) * 5) / 100}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-500"></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50"></th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50"></th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  Branch Wise Total:
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  {allNewCollection("NEW_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allRenewalCollection("OTHER_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allRenewalCommission("AG_COMM_OTHER")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allNewCollection("NEW_PRM") +
                    allRenewalCollection("OTHER_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW") +
                    allRenewalCommission("AG_COMM_OTHER")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {(allNewCommission("AG_COMM_NEW") * 5 +
                    allRenewalCommission("AG_COMM_OTHER") * 5) /
                    100}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW") +
                    allRenewalCommission("AG_COMM_OTHER") -
                    (allNewCommission("AG_COMM_NEW") * 5 +
                      allRenewalCommission("AG_COMM_OTHER") * 5) /
                      100}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50"></th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50"></th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50"></th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  Grand Total:
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  {allNewCollection("NEW_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider  text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allRenewalCollection("OTHER_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allRenewalCommission("AG_COMM_OTHER")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allNewCollection("NEW_PRM") +
                    allRenewalCollection("OTHER_PRM")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW") +
                    allRenewalCommission("AG_COMM_OTHER")}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase bg-gray-50">
                  {(allNewCommission("AG_COMM_NEW") * 5 +
                    allRenewalCommission("AG_COMM_OTHER") * 5) /
                    100}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50">
                  {allNewCommission("AG_COMM_NEW") +
                    allRenewalCommission("AG_COMM_OTHER") -
                    (allNewCommission("AG_COMM_NEW") * 5 +
                      allRenewalCommission("AG_COMM_OTHER") * 5) /
                      100}
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase bg-gray-50"></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CommReport;
