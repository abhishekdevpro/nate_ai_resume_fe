import React from "react";
import ProvideCards from "./Teamsecond";

function Teamdetail(props) {
  const provideecards = [
    {
      img: "https://blog.resumesquad.net/wp-content/uploads/2024/09/White-And-Orange-Modern-Professional-HR-Service-Facebook-Ad-5.png",
      title: "Resume for a Specific Job ",
      link:'https://blog.resumesquad.net/2024/09/09/resume-for-a-specific-job/'
    },
    {
      img: "https://blog.resumesquad.net/wp-content/uploads/2024/09/White-And-Orange-Modern-Professional-HR-Service-Facebook-Ad-3.png",
      title: "Resume Writing Tips: Expert Guidance",
      link:'https://blog.resumesquad.net/2024/09/09/resume-writing-tips-expert-guidance/'
    },
    {
      img: "https://blog.resumesquad.net/wp-content/uploads/2024/09/White-And-Orange-Modern-Professional-HR-Service-Facebook-Ad-1.png",
      title: "AI-Driven Resume Scanning",
      link:'https://blog.resumesquad.net/2024/09/09/ai-driven-resume-scanning/'
    },
    {
      img: "https://blog.resumesquad.net/wp-content/uploads/2024/09/White-And-Orange-Modern-Professional-HR-Service-Facebook-Ad.png",
      title: "Importance of Professional Resume Building Services",
      link:'https://blog.resumesquad.net/2024/09/09/importance-of-professional-resume-building-services/'
    },
  ];
  return (
    <>
      <div
        className="bg-white flex flex-col gap-5 justify-center items-center text-center py-24 px-4 md:px-16"
        id="provideCards"
      >
        <div className=" text-4xl font-bold py-5" id="spanele">
          Blog
        </div>

        <ProvideCards provideecards={provideecards} />
      </div>
    </>
  );
}

export default Teamdetail;
