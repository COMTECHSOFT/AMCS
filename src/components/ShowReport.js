import React from "react";
import ReportGenerate from "./ReportGenerate";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ShowReport = () => {
  return (
    <div className="m-2">
      <PDFDownloadLink document={<ReportGenerate />} filename="POLICY">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default ShowReport;