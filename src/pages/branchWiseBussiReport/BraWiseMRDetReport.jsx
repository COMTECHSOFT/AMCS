import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const BraWiseMRDetReport = () => {
  const componentRef = useRef();
  const location = useLocation();
  console.log(location?.state?.formDate);

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
            <div className="mb-4 ">
              <p className="text-center ">
                Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
                01771-62766
              </p>
              <p className="text-center">Branch Wise Business Summary Report</p>
              <p className="text-center">
                MR Date : {location?.state?.fromDate} To{" "}
                {location?.state?.toDate}
              </p>
            </div>
          </div>
          <div className="px-4 ">
            <h1 className=" mb-1 p-1 font-bold">Branch Code & Name:</h1>
          </div>
        </div>
        <div className="px-4 ">
          <table style={tableStyles.style} className="w-full text-center">
            <tr>
              <td style={tableStyles.style}>Sl. No.</td>
              <td style={tableStyles.style}>Plan NO.</td>
              <td style={tableStyles.style}>Name of Plan</td>
              <td style={tableStyles.style}>Total Amount</td>
            </tr>
            {location?.state?.commissionData?.map((data, index) => {
              return (
                <tr>
                  <td style={tableStyles.style}>{index + 1}</td>
                  <td style={tableStyles.style}>{data.CODE}</td>
                  <td style={tableStyles.style}> {data.NEW_PRM}</td>
                  <td style={tableStyles.style}> {data.NEW_COMM}</td>
                </tr>
              );
            })}
            <tr>
              <td
                colSpan="3"
                style={tableStyles.style}
                className="text-right pr-2"
              >
                Branch Wise Total:
              </td>
              <td style={tableStyles.style}></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BraWiseMRDetReport;
