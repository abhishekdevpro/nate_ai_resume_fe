import React from "react";
import ProvideCards from "./Team";

function Teamdetail(props) {
  const provideecards = [
    {
      img: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2022/08/iStock-1404450332_Nine-characteristics-of-great-teamwork_v1-scaled.jpg",
      title: "Resume Making",
      desc: 'Get a professionally crafted resume instantly, tailored by industry experts to showcase your strengths and land interviews faster. ',
    },
    {
      img: "https://blogimage.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png",
      title: "Resume Enhancing",
      desc: 'Instantly enhance your existing resume with expert-driven improvements, ensuring it’s optimized for ATS and tailored to stand out to employers.',
    },
    {
      img: "https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png",
      title: "As per ATS & Jobs",
      desc: 'Get resumes crafted with precision, optimized for ATS and enhanced by AI technology to align with job-specific requirements and boost your chances of success.',
    },
    {
      img: "https://images.spiceworks.com/wp-content/uploads/2022/02/08121058/Team-building-concept-illustration-perfect-for-web-design-banner-mobile-app.jpg",
      title: "Resume Building",
      desc: 'Receive resumes built by industry experts, designed to highlight your strengths, meet market standards, and position you for success in your field. ',
    },
  ];
  return (
    <>
      <div
        className="bg-white flex flex-col gap-5 justify-center items-center text-center py-24 px-4 md:px-16"
        id="provideCards"
      >
        <div className=" text-4xl font-bold py-5" id="spanele">
          We provide Best Feature for Customer
        </div>

        <ProvideCards provideecards={provideecards} />
      </div>
    </>
  );
}

export default Teamdetail;
