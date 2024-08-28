import React from "react";
import SecondCardSlider from "./Homeseconddetail";

function Instructor(props) {
  const secondcards = [
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-02.png",
      name: "Devon Lane",
      description: "Software Engineer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-01.png",
      name: "Courtney Henry",
      description: "Sr. UI/UX Designer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-01.png",
      name: "Courtney Henry",
      description: "Sr. UI/UX Designer",
    },
    {
      img: "https://e-pora-next.vercel.app/assets/img/icon/test-ava-03.png",
      name: "Jenny Wilson",
      description: "Content Writer",
    },
  ];
  return (
    <>
      <div className="bg-white py-6 ">
        <h1 className=" text-3xl  font-bold px-2 md:px-44 my-8">
          The Neuros Experience
        </h1>
        <div className="">
          <SecondCardSlider secondcards={secondcards} />
        </div>
      </div>
    </>
  );
}

export default Instructor;
