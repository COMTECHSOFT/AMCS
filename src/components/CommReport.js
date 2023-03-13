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

  const tableStyles = {
    style: {
      border: "1px solid black",
      borderCollapse: "collapse",
    },
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
        <div className="px-4">
          <table style={tableStyles.style} className="w-full text-center">
            <tr>
              <td rowSpan="2" style={tableStyles.style}>
                Sl. No.
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                MO Code
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                MO Name
              </td>
              <td colspan="4" style={tableStyles.style}>
                Monthly purchase deposit scheme
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Total <br /> Collection
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Total <br /> Commission
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Tax
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Net <br /> Pay
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Signature
              </td>
            </tr>
            <tr>
              <td style={tableStyles.style}>
                Collection <br /> (new)
              </td>
              <td style={tableStyles.style}>
                Commission <br /> (new)
              </td>
              <td style={tableStyles.style}>
                Renewal <br /> Collection
              </td>
              <td style={tableStyles.style}>
                Renewal <br /> Commission
              </td>
            </tr>
            {location?.state?.commissionData.map((data, index) => {
              return (
                <tr>
                  <td style={tableStyles.style}>{index + 1}</td>
                  <td style={tableStyles.style}>{data.A_CODE}</td>
                  <td style={tableStyles.style}>{data.NAME}</td>
                  <td style={tableStyles.style}> {data.NEW_PRM}</td>
                  <td style={tableStyles.style}> {data.AG_COMM_NEW}</td>
                  <td style={tableStyles.style}> {data.OTHER_PRM}</td>
                  <td style={tableStyles.style}> {data.AG_COMM_OTHER}</td>
                  <td style={tableStyles.style}>
                    {+data.OTHER_PRM + +data.NEW_PRM}
                  </td>
                  <td style={tableStyles.style}>
                    {" "}
                    {+data.AG_COMM_OTHER + +data.AG_COMM_NEW}
                  </td>
                  <td style={tableStyles.style}>{` ${
                    ((+data.AG_COMM_OTHER + +data.AG_COMM_NEW) * 5) / 100
                  }`}</td>
                  <td style={tableStyles.style}>
                    {" "}
                    {+data.AG_COMM_OTHER +
                      +data.AG_COMM_NEW -
                      ((+data.AG_COMM_OTHER + +data.AG_COMM_NEW) * 5) / 100}
                  </td>
                  <td style={tableStyles.style}></td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="3" style={tableStyles.style}>
                Branch Wise Total:
              </td>
              <td style={tableStyles.style}> {allNewCollection("NEW_PRM")}</td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCommission("AG_COMM_NEW")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allRenewalCommission("AG_COMM_OTHER")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCollection("NEW_PRM") +
                  allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allNewCommission("AG_COMM_NEW") +
                  allRenewalCommission("AG_COMM_OTHER")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {(allNewCommission("AG_COMM_NEW") * 5 +
                  allRenewalCommission("AG_COMM_OTHER") * 5) /
                  100}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCommission("AG_COMM_NEW") +
                  allRenewalCommission("AG_COMM_OTHER") -
                  (allNewCommission("AG_COMM_NEW") * 5 +
                    allRenewalCommission("AG_COMM_OTHER") * 5) /
                    100}
              </td>
              <td style={tableStyles.style}></td>
            </tr>
            <tr>
              <td colSpan="3" style={tableStyles.style}>
                Grand Total:
              </td>
              <td style={tableStyles.style}> {allNewCollection("NEW_PRM")}</td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCommission("AG_COMM_NEW")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allRenewalCommission("AG_COMM_OTHER")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCollection("NEW_PRM") +
                  allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allNewCommission("AG_COMM_NEW") +
                  allRenewalCommission("AG_COMM_OTHER")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {(allNewCommission("AG_COMM_NEW") * 5 +
                  allRenewalCommission("AG_COMM_OTHER") * 5) /
                  100}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCommission("AG_COMM_NEW") +
                  allRenewalCommission("AG_COMM_OTHER") -
                  (allNewCommission("AG_COMM_NEW") * 5 +
                    allRenewalCommission("AG_COMM_OTHER") * 5) /
                    100}
              </td>
              <td style={tableStyles.style}></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CommReport;
