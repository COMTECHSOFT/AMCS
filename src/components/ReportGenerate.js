import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ReportGenerate = () => {
  const componentRef = useRef();
  const location = useLocation();
  const report1 = location?.state?.report1;
  console.log(report1);
  const report1Data = location?.state?.report1Data;
  console.log(report1Data);
  const report2 = location?.state?.report2;
  console.log(report2);
  const report2Data = location?.state?.report2Data;
  console.log(report2Data);

  // const [accNo, setAccNo] = useState("");
  // const [report1, setReport1] = useState([]);
  // const report1Data = report1?.find((data) => data);
  // useEffect(() => {
  //   fetch(`http://192.168.31.94/api/report1.php?FDPS_NO=${accNo}`)
  //     .then((res) => res.json())
  //     .then((data) => setReport1(data?.Proposal_info));
  // }, [accNo]);

  // const [report2, setReport2] = useState([]);
  // const report2Data = report2?.find((data) => data);
  // useEffect(() => {
  //   fetch(`http://192.168.31.94/api/report2.php?FDPS_NO=${accNo}`)
  //     .then((res) => res.json())
  //     .then((data) => setReport2(data?.report_info));
  // }, [accNo]);

  const sumColumn2 = (columnKey) => {
    return report1.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <h1 className=" absolute bg-cyan-900 px-2 text-white font-bold cursor-pointer">
            Pdf
          </h1>
        )}
        content={() => componentRef.current}
        // onBeforePrint={() => {
        //   const pageCount = Math.ceil(ref.current.offsetHeight / 1000); // assuming page height is 1000px
        //   document.documentElement.style.setProperty(
        //     "--page-count",
        //     pageCount
        //   );
        // }}
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
        <div className="flex flex-col items-center justify-center py-4">
          <img
            src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
            className="w-96 h-20"
          />
          <div className="ml-8">
            <p className="m-[-8px] text-xs text-center">
              Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
              01771-62766
            </p>
          </div>
        </div>

        <h1
          className="text-xs m-auto cursor-pointer"
          style={{
            borderBottom: "1px solid black",
            maxWidth: "max-content",
          }}
        >
          Deposite Statement
        </h1>

        <div className="mt-6 w-[80%] m-auto border border-black flex justify-between">
          <form className=" p-2 flex flex-col gap-y-1">
            <div className="flex items-center">
              <label className="text-xs w-24">Account Name:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.PROPOSER}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Account Number:</label>
              <input
                type="text"
                value={report1Data?.FDPS_NO}
                className="h-6 text-xs w-48 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Account Status:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.ADD4}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Opening Date:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.RISKDATE}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Premium:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.LF_PRM ? report1Data?.LF_PRM + ".00" : ""}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Maturity Date:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.MATURITY}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Install Mode:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center"
                value={report1Data?.INSTMODE}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Plan & Term:</label>
              <div className="flex gap-x-8">
                <input
                  type="text"
                  className="h-6 text-xs w-20 text-center font"
                  value={report1Data?.TABLEID}
                  style={{ border: "1px solid black" }}
                />
                <input
                  type="text"
                  className="h-6 text-xs w-20 text-center font"
                  value={report1Data?.TERM}
                  style={{ border: "1px solid black" }}
                />
              </div>
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Age:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center font"
                value={report1Data?.AGE}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">Sex:</label>
              <input
                type="text"
                className="h-6 text-xs w-48 text-center font"
                value={report1Data?.SEX}
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-24">A/C Holder Address:</label>
              <textarea
                className="py-1 text-xs w-48 text-center font"
                value={report1Data?.COF_PS}
                rows={3}
                style={{ border: "1px solid black" }}
              />
            </div>
          </form>
          <form className="flex flex-col gap-y-1 p-2">
            <div className="flex items-center ">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                District Off. Code
              </label>
              <input
                type="text"
                value={report2Data?.Z_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                Branch Code
              </label>
              <input
                type="text"
                value={report2Data?.B_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                MO Code
              </label>
              <input
                type="text"
                value={report2Data?.A_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                UM Code
              </label>
              <input
                type="text"
                value={report2Data?.MO_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                BM Code
              </label>
              <input
                type="text"
                value={report2Data?.MM_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                AGM Code
              </label>
              <input
                type="text"
                value={report2Data?.BM_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                DGM Code
              </label>
              <input
                type="text"
                value={report2Data?.ZM_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                GM Code
              </label>
              <input
                type="text"
                value={report2Data?.AVP_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                ED Code
              </label>
              <input
                type="text"
                value={report2Data?.VP_CODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="flex items-center">
              <label className="text-xs w-36 mr-4 border border-black h-6 pl-8">
                Director Code
              </label>
              <input
                type="text"
                value={report2Data?.JVPCODE}
                className="text-xs h-6 w-36 text-center"
                style={{ border: "1px solid black" }}
              />
            </div>
          </form>
        </div>
        <h1
          className="text-xs m-auto cursor-pointer my-4"
          style={{
            borderBottom: "1px solid black",
            maxWidth: "max-content",
          }}
        >
          Deposite Information
        </h1>
        <div className="border  w-[80%] m-auto">
          <table className="w-full text-xs text-center" id="table-to-xls">
            <tr style={{ border: "1px solid black" }}>
              <th>Install NO.</th>
              <th>Install Wise Premium</th>
              <th>PR NO.</th>
              <th>PR DATE</th>
              <th>PR Amount</th>
              <th>Suspense Amount</th>
              <th>PAYMODE</th>
            </tr>
            {report1?.map((data, index) => {
              const subNum = Number(data?.PR_AMT);
              return (
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>{data?.INST_NO}</td>
                  <td style={{ border: "1px solid black" }}>{data?.LF_PRM}</td>
                  <td style={{ border: "1px solid black" }}>{data?.PR_NO}</td>
                  <td style={{ border: "1px solid black" }}>{data?.PR_DATE}</td>
                  <td style={{ border: "1px solid black" }}>{data?.PR_AMT}</td>
                  <td style={{ border: "1px solid black" }}>{data?.SUS_AMT}</td>
                  <td style={{ border: "1px solid black" }}>
                    {data?.PAY_MODE}
                  </td>
                </tr>
              );
            })}
            <tr style={{ border: "1px solid black" }}>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>
                {/* Subtotal ({report1?.reduce((a, c) => a + c.PR_AMT, 0)})
                {report1.reduce((a, c) => a + c.quantity * c.price, 0)} */}
                Subtotal: {sumColumn2("PR_AMT")}
              </th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
        <div>
          <div className="flex w-[80%] m-auto justify-between py-12 content-end">
            <div className="flex flex-col items-center">
              {/* <hr className="bg-black w-96" style={{ height: "2px" }} /> */}
              <p
                className="font-bold text-xs text-center mb-2"
                style={{
                  borderTop: "1px solid black",
                  maxWidth: "max-content",
                }}
              >
                Prepared By
              </p>
              <p className="text-xs">
                This is computer generated premium deposit statement
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* <hr className="bg-black w-48" style={{ height: "2px" }} /> */}
              <p
                className="font-bold text-xs text-center mb-2"
                style={{
                  borderTop: "1px solid black",
                  maxWidth: "max-content",
                }}
              >
                Checked By
              </p>
              <p className="text-xs">
                Document Print Date: {new Date().getDate()}-
                {new Date().getMonth() + 1}-{new Date().getFullYear()}
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* <hr className="bg-black text-xs w-48" style={{ height: "2px" }} /> */}
              <p
                className="font-bold text-xs text-center mb-2"
                style={{
                  borderTop: "1px solid black",
                  maxWidth: "max-content",
                }}
              >
                Authorised Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerate;
