import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const BranchWSR = () => {
  const componentRef = useRef();
  const location = useLocation();
  console.log(location);
  const getData = location?.state?.bwsr;
  console.log(location?.state?.datePassByLink);

  const tableStyles = {
    style: {
      border: "1px solid black",
      borderCollapse: "collapse",
    },
  };

  const allNewAmount = (columnKey) => {
    return location?.state?.bwsr?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };
  const allRenCollection = (columnKey) => {
    return location?.state?.bwsr?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <h1 className="cursor-pointer absolute bg-cyan-900 text-white font-bold rounded px-1">
            Print
          </h1>
        )}
        content={() => componentRef.current}
      />
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button ml-12 absolute bg-cyan-900 rounded px-1 text-white font-bold"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download Excel Sheet"
      />
      <div ref={componentRef}>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
              className="w-96 h-20"
            />
            <div className="mb-4 ">
              <p className="text-center ">
                Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
                01771-62766
              </p>
              <p className="text-center">Branch Wise Business Summary Report</p>
              <p className="text-center">
                MR Date : {location?.state?.datePassByLink?.fromDate} To{" "}
                {location?.state?.datePassByLink?.toDate}
              </p>
            </div>
          </div>
          <div className="px-4 ">
            <h1 className=" mb-1 p-1 font-bold">
              Branch Code & Name: {getData[0]?.OFF_CODE} &{" "}
              {getData[0]?.OFF_NAME}
            </h1>
          </div>
        </div>
        <div className="px-4 ">
          <table
            style={tableStyles.style}
            className="w-full text-center"
            id="table-to-xls"
          >
            <tr>
              <td style={tableStyles.style}>Sl. No.</td>
              <td style={tableStyles.style}>Plan NO.</td>
              <td style={tableStyles.style}>Name of Plan</td>
              <td style={tableStyles.style}>New Collection</td>
              <td style={tableStyles.style}>Renewal Collection</td>
              <td style={tableStyles.style}>Total Amount</td>
            </tr>
            {getData?.map((data, index) => {
              return (
                <tr>
                  <td style={tableStyles.style}>{index + 1}</td>
                  <td style={tableStyles.style}>{data.PLAN}</td>
                  <td style={tableStyles.style}> {data.PLAN_NAME}</td>
                  <td style={tableStyles.style}> {data.NEW_BUS}</td>
                  <td style={tableStyles.style}> {data.OTH_BUS}</td>
                  <td style={tableStyles.style}>
                    {" "}
                    {+data.NEW_BUS + +data.OTH_BUS}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td
                colSpan="5"
                style={tableStyles.style}
                className="text-right pr-2"
              >
                Branch Wise Total:
              </td>
              <td style={tableStyles.style}>
                {allNewAmount("NEW_BUS") + allRenCollection("OTH_BUS")}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchWSR;
