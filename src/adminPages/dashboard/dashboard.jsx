import React, { useEffect } from "react";
import DashboardLayout from "./layout";
import { Link } from "react-router-dom";
import {
  FaCreditCard,
  FaMessage,
  FaRegFile,
  FaRegMessage,
  FaRegUser,
  FaUserGroup,
  FaUserPlus,
} from "react-icons/fa6";
import { FaChartBar, FaFileUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("dashboard"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Dashboard</h2>
          <div className="bg-white flex flex-col gap-[20px]  justify-start p-[30px] h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar ">
            <div className="w-full flex flex-wrap gap-[30px] items-center justify-center">
              <Link
                to={"/admin/all-customer"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaUserGroup className="text-[30px]" />
                <p className="font-medium text-[18px]">All Customers</p>
              </Link>
              <Link
                to={"/admin/resume-list"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaRegFile className="text-[30px]" />
                <p className="font-medium text-[18px]">All Resumes</p>
              </Link>
              <Link
                to={"/admin/all-employees"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaRegUser className="text-[30px]" />
                <p className="font-medium text-[18px]">Employees</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaCreditCard className="text-[30px]" />
                <p className="font-medium text-[18px]">Payments</p>
              </Link>
              <Link
                to={"/admin/resume-list"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaUserPlus className="text-[30px]" />
                <p className="font-medium text-[18px]">Referrals</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaMessage className="text-[30px]" />
                <p className="font-medium text-[18px]">Messages</p>
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
