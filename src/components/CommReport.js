import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function CommReport() {
  const componentRef = useRef();
  const location = useLocation();
  console.log(location);
  const mnt = location?.state?.commissionData[0]?.PMON;

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
        trigger={() => <h1 className="cursor-pointer bg-cyan-900 text-white font-bold px-1 absolute">Pdf</h1>}
        content={() => componentRef.current}
        pageStyle="@page { size: A4;  margin: 1cm; } @media print { body { -webkit-print-color-adjust: exact; } }"
      />
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button ml-12 absolute bg-cyan-900 px-1 text-white font-bold"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Excel Sheet"
      />
      <div ref={componentRef}>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
              className="w-96 h-20"
            />
            <div className="mb-4 text-xs">
              <p className="text-center ">
                Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
                01771-62766
              </p>
              <p className="text-center">
                Branch Wise {location?.state?.design} Commission Bill
              </p>
              <p className="text-center">
                For the Month of:{" "}
                {`${
                  mnt === "jan"
                    ? "January"
                    : mnt === "feb"
                    ? "February"
                    : mnt === "mar"
                    ? "March"
                    : mnt === "apr"
                    ? "April"
                    : mnt === "may"
                    ? "May"
                    : mnt === "jun"
                    ? "June"
                    : mnt === "jul"
                    ? "July"
                    : mnt === "aug"
                    ? "August"
                    : mnt === "sep"
                    ? "September"
                    : mnt === "oct"
                    ? "October"
                    : mnt === "nov"
                    ? "November"
                    : "December"
                } ${location?.state?.year}`}
              </p>
            </div>
          </div>
          <div className="px-4 text-xs">
            <h1 className="border border-black p-1 font-bold">
              Branch Code & Name: {location?.state?.commissionData[0]?.OFF_CODE}{" "}
              - {location?.state?.commissionData[0]?.OFF_NAME}
            </h1>
          </div>
        </div>
        <div className="px-4 text-xs">
          <table
            style={tableStyles.style}
            className="w-full text-center"
            id="table-to-xls"
          >
            <tr>
              <td rowSpan="2" style={tableStyles.style}>
                Sl. No.
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Code
              </td>
              <td rowSpan="2" style={tableStyles.style}>
                Name
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
                  <td style={tableStyles.style}>{data.CODE}</td>
                  <td style={tableStyles.style}>{data.NAME}</td>
                  <td style={tableStyles.style}> {data.NEW_PRM}</td>
                  <td style={tableStyles.style}> {data.NEW_COMM}</td>
                  <td style={tableStyles.style}> {data.OTHER_PRM}</td>
                  <td style={tableStyles.style}> {data.OTHER_COMM}</td>
                  <td style={tableStyles.style}>
                    {+data.OTHER_PRM + +data.NEW_PRM}
                  </td>
                  <td style={tableStyles.style}>
                    {" "}
                    {+data.NEW_COMM + +data.OTHER_COMM}
                  </td>
                  <td style={tableStyles.style}>{` ${Math.ceil(
                    ((+data.OTHER_COMM + +data.NEW_COMM) * 5) / 100
                  )}`}</td>
                  <td style={tableStyles.style}>
                    {" "}
                    {Math.ceil(
                      +data.OTHER_COMM +
                        +data.NEW_COMM -
                        ((+data.OTHER_COMM + +data.NEW_COMM) * 5) / 100
                    )}
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
              <td style={tableStyles.style}> {allNewCommission("NEW_COMM")}</td>
              <td style={tableStyles.style}>
                {" "}
                {allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allRenewalCommission("OTHER_COMM")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCollection("NEW_PRM") +
                  allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allNewCommission("NEW_COMM") +
                  allRenewalCommission("OTHER_COMM")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {Math.ceil(
                  (allNewCommission("NEW_COMM") * 5 +
                    allRenewalCommission("OTHER_COMM") * 5) /
                    100
                )}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {Math.ceil(
                  allNewCommission("NEW_COMM") +
                    allRenewalCommission("OTHER_COMM") -
                    (allNewCommission("NEW_COMM") * 5 +
                      allRenewalCommission("OTHER_COMM") * 5) /
                      100
                )}
              </td>
              <td style={tableStyles.style}></td>
            </tr>
            <tr>
              <td colSpan="3" style={tableStyles.style}>
                Grand Total:
              </td>
              <td style={tableStyles.style}> {allNewCollection("NEW_PRM")}</td>
              <td style={tableStyles.style}> {allNewCommission("NEW_COMM")}</td>
              <td style={tableStyles.style}>
                {" "}
                {allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allRenewalCommission("OTHER_COMM")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {allNewCollection("NEW_PRM") +
                  allRenewalCollection("OTHER_PRM")}
              </td>
              <td style={tableStyles.style}>
                {allNewCommission("NEW_COMM") +
                  allRenewalCommission("OTHER_COMM")}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {Math.ceil(
                  (allNewCommission("NEW_COMM") * 5 +
                    allRenewalCommission("OTHER_COMM") * 5) /
                    100
                )}
              </td>
              <td style={tableStyles.style}>
                {" "}
                {Math.ceil(
                  allNewCommission("NEW_COMM") +
                    allRenewalCommission("OTHER_COMM") -
                    (allNewCommission("NEW_COMM") * 5 +
                      allRenewalCommission("OTHER_COMM") * 5) /
                      100
                )}
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
