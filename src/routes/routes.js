import { createBrowserRouter, Link } from "react-router-dom";
import CommReport from "../components/CommReport";
import ReportGenerate from "../components/ReportGenerate";
import Main from "../layout/Main/Main";
import Account from "../pages/Account";
import AccountInfo from "../pages/AccountInfo/AccountInfo";
import ChartAccEntry from "../pages/AccountInfo/ChartAccEntry";
import DailyDataEntry from "../pages/AccountInfo/DailyDataEntry";
import FileRemove from "../pages/AccountInfo/FileRemove";
import MRRemove from "../pages/AccountInfo/MRRemove";
import AmanaGroup from "../pages/AmanaGroup";
import BillDetailReport from "../pages/BillDetailReport/BillDetailReport";
import BranchWiseBussiReport from "../pages/branchWiseBussiReport/BranchWiseBussiReport";
import CodeWiseNewBusiness from "../pages/CodeWiseNewBusiness/CodeWiseNewBusiness";
import CodeWiseSummBuss from "../pages/CodeWiseSummBuss/CodeWiseSummBuss";
import AGMCommissionBill from "../pages/CommissionBill/AGMCommissionBill";
import BMCommissionBill from "../pages/CommissionBill/BMCommissionBill";
import CommissionBillPrint from "../pages/CommissionBill/CommissionBillPrint";
import DGMCommissionBill from "../pages/CommissionBill/DGMCommissionBill";
import DirectorCommissionBill from "../pages/CommissionBill/DirectorCommissionBill";
import EDCommissionBill from "../pages/CommissionBill/EDCommissionBill";
import GMCommissionBill from "../pages/CommissionBill/GMCommissionBill";
import MOCommissionBill from "../pages/CommissionBill/MOCommissionBill";
import UMCommissionBill from "../pages/CommissionBill/UMCommissionBill";
import Forms from "../pages/Forms";
import AGMInfo from "../pages/NewMoInfoPage/AGMInfo";
import BMOpenInfo from "../pages/NewMoInfoPage/BMOpenInfo";
import DGMInfo from "../pages/NewMoInfoPage/DGMInfo";
import DirectorInfo from "../pages/NewMoInfoPage/DirectorInfo";
import EDInfo from "../pages/NewMoInfoPage/EDInfo";
import GMInfo from "../pages/NewMoInfoPage/GMInfo";
import MoOpenInfo from "../pages/NewMoInfoPage/MoOpenInfo";
import UnitManager from "../pages/NewMoInfoPage/UnitManager";
import Nominee from "../pages/Nominee";
import PRInformation from "../pages/PRInformation";
import Savings from "../pages/Savings";
import Summary from "../pages/Summary";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Forms />,
        children: [
          {
            path: "/account",
            element: <Account />,
          },
          {
            path: "/savings",
            element: <Savings />,
          },
          {
            path: "/nominee",
            element: <Nominee />,
          },
          {
            path: "/summary",
            element: <Summary />,
          },
        ],
      },
    ],
  },
  {
    path: "/amanaGroup",
    element: <AmanaGroup />,
  },
  {
    path: "/prinformation",
    element: <PRInformation />,
  },
  {
    path: "/moopeninfo",
    element: <MoOpenInfo />,
  },
  {
    path: "/unitManager",
    element: <UnitManager />,
  },
  {
    path: "/bmInfo",
    element: <BMOpenInfo />,
  },
  {
    path: "/agmInfo",
    element: <AGMInfo />,
  },
  {
    path: "/dgmInfo",
    element: <DGMInfo />,
  },
  {
    path: "/gmInfo",
    element: <GMInfo />,
  },
  {
    path: "/edInfo",
    element: <EDInfo />,
  },
  {
    path: "/dInfo",
    element: <DirectorInfo />,
  },
  {
    path: "/commissionBill",
    element: <CommissionBillPrint />,
  },
  {
    path: "/mocommbill",
    element: <MOCommissionBill />,
  },
  {
    path: "/umcommbill",
    element: <UMCommissionBill />,
  },
  {
    path: "/bmcommbill",
    element: <BMCommissionBill />,
  },
  {
    path: "/agmcommbill",
    element: <AGMCommissionBill />,
  },
  {
    path: "/dgmcommbill",
    element: <DGMCommissionBill />,
  },
  {
    path: "/gmcommbill",
    element: <GMCommissionBill />,
  },
  {
    path: "/edcommbill",
    element: <EDCommissionBill />,
  },
  {
    path: "/directorcommbill",
    element: <DirectorCommissionBill />,
  },
  {
    path: "/cwnb",
    element: <CodeWiseNewBusiness />,
  },
  {
    path: "/bwbr",
    element: <BranchWiseBussiReport />,
  },
  {
    path: "/billdetail",
    element: <BillDetailReport />,
  },
  {
    path: "/cwsb",
    element: <CodeWiseSummBuss />,
  },
  {
    path: "/accInfo",
    element: <AccountInfo />,
  },
  {
    path: "/chartAccEntry",
    element: <ChartAccEntry />,
  },
  {
    path: "/dailyDataEntry",
    element: <DailyDataEntry />,
  },
  {
    path: "/fileRemove",
    element: <FileRemove />,
  },
  {
    path: "/mrRemove",
    element: <MRRemove />,
  },
  {
    path: "/report",
    element: <ReportGenerate />,
  },
  {
    path: "/commReport",
    element: <CommReport />,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col h-screen justify-center items-center text-3xl text-red-600 font-bold">
        <h1>Page Not Found</h1>
        <h1 className="mt-6">404</h1>
        <Link to={"/"} className="text-xl text-blue-500 mt-6 underline">
          Go To Home
        </Link>
      </div>
    ),
  },
]);

export default routes;
