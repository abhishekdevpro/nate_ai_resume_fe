import React from "react";
import TopBar from "../common/topBar";
import SideBar from "../common/sideBar";
import Footer from "../common/footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex h-screen flex-col relative">
      <TopBar />
      <div className="w-full h-screen flex relative">
        <SideBar />
        <div className="w-full overflow-y-scroll hide-scrollbar h-screen  xl:w-[80%] bg-[#e3dfd6]">
          <div className="w-full background xl:rounded-tl-[50px] hide-scrollbar p-[15px] sm:p-[25px] bg-transparent ">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
