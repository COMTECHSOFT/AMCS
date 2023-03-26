import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const BraWiseMRDetReport = () => {
  const componentRef = useRef();
  const location = useLocation();
  const branch = location?.state?.offCode?.find((data) => data);

  const allMRAmount = (columnKey) => {
    return location?.state?.bwmrd?.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  // const hiddenDate = (date) => {
  //   const hiddenString = "**********";
  //   return `${hiddenString}${date.substr(8, 0)}`;
  // };

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
            <div className="mb-4 text-xs">
              <p className="text-center ">
                Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
                01771-62766
              </p>
              <p className="text-center">Branch Wise MR Details Report</p>
              <p className="text-center">
                MR Date : {location?.state?.datePassByLink?.fromDate} To{" "}
                {location?.state?.datePassByLink?.toDate}
              </p>
            </div>
          </div>
          <div className="px-4 ">
            <h1 className=" mb-1 p-1 font-bold text-xs">
              Branch Code & Name: {branch?.AGENCY_CODE} & {branch?.AGENCY_NAME}
            </h1>
          </div>
        </div>
        <div className="px-4 ">
          <table
            style={tableStyles.style}
            className="w-full text-center text-xs"
          >
            <tr>
              <td style={tableStyles.style}>Sl. No.</td>
              <td style={tableStyles.style}>Account NO.</td>
              <td style={tableStyles.style}>Membership No.</td>
              <td style={tableStyles.style}>Account Holder Name</td>
              <td style={tableStyles.style}>Plan Name</td>
              <td style={tableStyles.style}>MR No.</td>
              <td style={tableStyles.style}>MR Date</td>
              <td style={tableStyles.style}>Comm. Date</td>
              <td style={tableStyles.style}>MR Amount</td>
              <td style={tableStyles.style}>Install No.</td>
            </tr>
            {location?.state?.bwmrd?.map((data, index) => {
              return (
                <tr>
                  <td style={tableStyles.style}>{index + 1}</td>
                  <td style={tableStyles.style}>{data.FDPS_NO}</td>
                  <td style={tableStyles.style}> {data.FDPS_NO}</td>
                  <td style={tableStyles.style} className="text-left pl-2">
                    {" "}
                    {data.ACC_HOL_NAME}
                  </td>
                  <td style={tableStyles.style}> {data.PLAN_NAME}</td>
                  <td style={tableStyles.style}> {data.PR_NO}</td>
                  <td style={tableStyles.style}> {data.PR_DATE}</td>
                  {/* <td style={tableStyles.style}> {hiddenDate(data.PR_DATE)}</td> */}
                  <td style={tableStyles.style}> {data.COMM_DT}</td>
                  <td style={tableStyles.style}> {data.PR_AMT}</td>
                  <td style={tableStyles.style}> {data.INST_NO}</td>
                </tr>
              );
            })}
            <tr>
              <td
                colSpan="8"
                style={tableStyles.style}
                className="text-right pr-2"
              >
                Total:
              </td>
              <td style={tableStyles.style}>{allMRAmount("PR_AMT")}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BraWiseMRDetReport;
