import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";


const ReportGenerate = () => {
  const componentRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [accNo, setAccNo] = useState("");
  const [report1, setReport1] = useState([]);
  console.log(report1);
  const report1Data = report1?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/report1.php?FDPS_NO=${accNo}`)
      .then((res) => res.json())
      .then((data) => setReport1(data?.Proposal_info));
  }, [accNo]);

  const [report2, setReport2] = useState([]);
  const report2Data = report2?.find((data) => data);
  useEffect(() => {
    fetch(`http://192.168.31.94/api/report2.php?FDPS_NO=${accNo}`)
      .then((res) => res.json())
      .then((data) => setReport2(data?.report_info));
  }, [accNo]);

  const sumOfPrAmount = (columnKey) => {
    return report1.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  const sumOfPremium = (columnKey) => {
    return report1.reduce((total, row) => {
      return total + parseFloat(row[columnKey]);
    }, 0);
  };

  
  return (
    <div>
    <div ref={componentRef}>
      <div className="flex flex-col items-center justify-center py-4">
        <img
          src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
          className=" lg:w-96 h-32"
        />
        <div className="ml-8">
          <p className="m-[-10px] font text-center">
            Head Office: J.S Plaza (3rd Floor), Kanaikhali, Natore,
            01771-62766
          </p>
        </div>
      </div>

      <ReactToPrint
        trigger={() => (
          <h1
            className="text-xl font m-auto cursor-pointer"
            style={{
              borderBottom: "3px solid black",
              maxWidth: "max-content",
            }}
          >
            Deposite Statement
          </h1>
        )}
        content={() => componentRef.current}
        footer={() => <p>This is the footer of the printed document.</p>}
        // onBeforePrint={() => {
        //   const pageCount = Math.ceil(ref.current.offsetHeight / 1000); // assuming page height is 1000px
        //   document.documentElement.style.setProperty(
        //     "--page-count",
        //     pageCount
        //   );
        // }}
      />

      <div className="mt-6 ml-20 mr-20 border border-black flex justify-between">
        <form onSubmit={handleSubmit} className=" p-2">
          <div className="flex items-center">
            <label className="font text-xl w-44">Account Name:</label>
            <input
              type="text"
              className="py-1 w-72 text-center font"
              value={report1Data?.PROPOSER}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Account Number:</label>
            <input
              type="text"
              className="py-1 w-72 text-center font"
              onChange={(e) => {
                setAccNo(e.target.value);
              }}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Account Status:</label>
            <input
              type="text"
              className="py-1 w-72 text-center font"
              value={report1Data?.ADD4}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Opening Date:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.RISKDATE}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Premium:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.LF_PRM ? report1Data?.LF_PRM + ".00" : ""}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Maturity Date:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.MATURITY}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Install Mode:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.INSTMODE}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Plan & Term:</label>
            <div className="flex">
              <input
                type="text"
                className="py-1 w-28 text-center font"
                value={report1Data?.TABLEID}
                style={{ border: "1px solid black" }}
              />
              <input
                type="text"
                className="py-1 w-28 text-center font"
                value={report1Data?.TERM}
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Age:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.AGE}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">Sex:</label>
            <input
              type="text"
              className="py-1 w-56 text-center font"
              value={report1Data?.SEX}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className="font text-xl w-44">A/C Holder Address:</label>
            <textarea
              className="py-1 w-56 text-center font"
              value={report1Data?.COF_PS}
              rows={4}
              style={{ border: "1px solid black" }}
            />
          </div>
        </form>
        <form onSubmit={handleSubmit} className=" p-2">
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              District Off. Code
            </label>
            <input
              type="text"
              value={report2Data?.Z_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              Branch Code
            </label>
            <input
              type="text"
              value={report2Data?.B_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              MO Code
            </label>
            <input
              type="text"
              value={report2Data?.A_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              UM Code
            </label>
            <input
              type="text"
              value={report2Data?.MO_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              BM Code
            </label>
            <input
              type="text"
              value={report2Data?.MM_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              AGM Code
            </label>
            <input
              type="text"
              value={report2Data?.BM_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              DGM Code
            </label>
            <input
              type="text"
              value={report2Data?.ZM_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              GM Code
            </label>
            <input
              type="text"
              value={report2Data?.AVP_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              ED Code
            </label>
            <input
              type="text"
              value={report2Data?.VP_CODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="flex items-center">
            <label className=" text-xl w-48 text-right mr-4 border border-black p-1">
              Director Code
            </label>
            <input
              type="text"
              value={report2Data?.JVPCODE}
              className="py-1 w-44 text-center "
              style={{ border: "1px solid black" }}
            />
          </div>
        </form>
      </div>
      <h1
        className="text-xl font m-auto cursor-pointer my-4"
        style={{
          borderBottom: "3px solid black",
          maxWidth: "max-content",
        }}
      >
        Deposite Information
      </h1>
      <div className="border border-black mx-20">
        <table className="w-full text-center">
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
            <th>
            Total Due: {sumOfPremium("LF_PRM")}
            </th>
            <th></th>
            <th></th>
            <th>
              {/* Subtotal ({report1?.reduce((a, c) => a + c.PR_AMT, 0)})
              {report1.reduce((a, c) => a + c.quantity * c.price, 0)} */}
              Total Deposited: {sumOfPrAmount("PR_AMT")}
            </th>
            <th></th>
            <th></th>
          </tr>
        </table>
      </div>
      <div>
        <div className="flex justify-between mx-12 py-12 content-end">
          <div>
            <hr className="bg-black w-96" style={{ height: "3px" }} />
            <p className="font-bold  text-center mb-2">Prepared By</p>
            <p>This is computer generated premium deposit statement</p>
          </div>
          <div>
            <hr className="bg-black w-60" style={{ height: "3px" }} />
            <p className="font-bold text-center mb-2">Checked By</p>
            <p>
              Document Print Date: {new Date().getDate()}-
              {new Date().getMonth() + 1}-{new Date().getFullYear()}
            </p>
          </div>
          <div>
            <hr className="bg-black w-60" style={{ height: "3px" }} />
            <p className="font-bold  text-center mb-2">Authorised Officer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ReportGenerate;
