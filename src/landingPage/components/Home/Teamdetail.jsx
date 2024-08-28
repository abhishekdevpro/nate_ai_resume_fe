import React from "react";
import ProvideCards from "./Team";

function Teamdetail(props) {
  const provideecards = [
    {
      img: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2022/08/iStock-1404450332_Nine-characteristics-of-great-teamwork_v1-scaled.jpg",
      title: "Resume Making",
      desc: 'Dramatically supply transparent deliverable before & you backward comp internal or "organic sources."',
    },
    {
      img: "https://blogimage.vantagecircle.com/content/images/2023/01/10-Smart-Ways-to-Better-Team-Collaboration-1.png",
      title: "Resume Enhancing",
      desc: 'Dramatically supply transparent deliverable before & you backward comp internal or "organic sources."',
    },
    {
      img: "https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png",
      title: "As per ATS & Jobs",
      desc: 'Dramatically supply transparent deliverable before & you backward comp internal or "organic sources."',
    },
    {
      img: "https://images.spiceworks.com/wp-content/uploads/2022/02/08121058/Team-building-concept-illustration-perfect-for-web-design-banner-mobile-app.jpg",
      title: "Resume Building",
      desc: 'Dramatically supply transparent deliverable before & you backward comp internal or "organic sources."',
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
