import { createBrowserRouter, Link } from "react-router-dom";
import CommReport from "../components/CommReport";
import ReportGenerate from "../components/ReportGenerate";
import Main from "../layout/Main/Main";
import AccountInfo from "../pages/AccountInfo/AccountInfo";
import ChartAccEntry from "../pages/AccountInfo/ChartAccEntry";
import DailyDataEntry from "../pages/AccountInfo/DailyDataEntry";
import FileRemove from "../pages/AccountInfo/FileRemove";
import MRRemove from "../pages/AccountInfo/MRRemove";
import AmanaGroup from "../pages/AmanaGroup";
import BillDetailReport from "../pages/BillDetailReport/BillDetailReport";
import BranchWiseBussiReport from "../pages/branchWiseBussiReport/BranchWiseBussiReport";
import BranchWiseDetailReport from "../pages/branchWiseBussiReport/BranchWiseDetailReport";
import BranchWSReport from "../pages/branchWiseBussiReport/BranchWSReport";
import BraWiseMRDetReport from "../pages/branchWiseBussiReport/BraWiseMRDetReport";
import BraWisePlanCodeWiseDetReport from "../pages/branchWiseBussiReport/BraWisePlanCodeWiseDetReport";
import BraWisePlanCodeWiseSummReport from "../pages/branchWiseBussiReport/BraWisePlanCodeWiseSummReport";
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
import CommissionProcess from "../pages/CommProcess/CommissionProcess";
import DepositReport from "../pages/DepositReport.jsx";
import Forms from "../pages/Forms";
import Home from "../pages/Home/Home";
import Welcome from "../pages/Home/Welcome";
import Login from "../pages/Login/Login";
import AGMInfo from "../pages/NewMoInfoPage/AGMInfo";
import BMOpenInfo from "../pages/NewMoInfoPage/BMOpenInfo";
import DGMInfo from "../pages/NewMoInfoPage/DGMInfo";
import DirectorInfo from "../pages/NewMoInfoPage/DirectorInfo";
import EDInfo from "../pages/NewMoInfoPage/EDInfo";
import GMInfo from "../pages/NewMoInfoPage/GMInfo";
import MoOpenInfo from "../pages/NewMoInfoPage/MoOpenInfo";
import UnitManager from "../pages/NewMoInfoPage/UnitManager";
import PRinfoModify from "../pages/PRinfoModify";
import PRInformation from "../pages/PRInformation";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/account",
        element: <Main />,
        children: [
          {
            path: "/account",
            element: <Forms />,
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
        path: "/modify",
        element: <PRinfoModify />,
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
        path: "/depositreport",
        element: <DepositReport />,
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
        path: "/mocommprocess",
        element: <CommissionProcess />,
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
        path: "/branchWiseSummReport",
        element: <BranchWSReport />,
      },
      {
        path: "/branchWiseDetReport",
        element: <BranchWiseDetailReport />,
      },
      {
        path: "/braWisePlanCodeWiseSummReport",
        element: <BraWisePlanCodeWiseSummReport />,
      },
      {
        path: "/braWisePlanCodeWiseDetReport",
        element: <BraWisePlanCodeWiseDetReport />,
      },
      {
        path: "/branchWiseMRDetReport",
        element: <BraWiseMRDetReport />,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
