import React from "react";
import ProvideCards from "./Teamsecond";

function Teamdetail(props) {
  const provideecards = [
    {
      img: "https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg",
      title: "Annette Black",
    },
    {
      img: "https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg",
      title: "Wade Warren",
    },
    {
      img: "https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg",
      title: "Savannah Nguyen",
    },
    {
      img: "https://aboutleaders.com/wp-content/uploads/2022/01/Transformation-Leaderhip-Traits.jpg",
      title: "Jenny Wilson",
    },
  ];
  return (
    <>
      <div
        className="bg-white flex flex-col gap-5 justify-center items-center text-center py-24 px-4 md:px-16"
        id="provideCards"
      >
        <div className=" text-4xl font-bold py-5" id="spanele">
          Meet the Team
        </div>

        <ProvideCards provideecards={provideecards} />
      </div>
    </>
  );
}

export default Teamdetail;
