import React from "react";
import SecondCardSlider from "./Homeseconddetail";

function Instructor(props) {
  const secondcards = [
    {
      img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      name: " Sarah Johnson",
      description: "Marketing Manager",
      content:"ResumeSquad exceeded my expectations! Their AI-powered resume writing service helped me land interviews at top companies. The resume was tailored perfectly to my industry and optimized for ATS, which made all the difference in my job search."

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZE-3DXgUzHgUPm1X3_4KARCsfDpTx4O0Aw&s",
      name: "James Roberts",
      description: " Software Engineer",
      content:"I was amazed by how professional and detailed my resume turned out. The AI scoring tool gave me confidence that my resume was up to industry standards. The job matching feature also made it super easy to find relevant job openings."

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBgthbf9ow1iQXaApN2wka5NlVtKly6JFyw&s",
      name: "Emily Davis",
      description: " HR Specialist",
      content:"The team at ResumeSquad really knows how to highlight key skills and accomplishments. My resume was completely transformed, and I could see the difference in the response I got from employers. I highly recommend their resume writing and LinkedIn optimization services!"

    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfHsJ0gRyl8LGr5W-V-dq3jKf-iUoOynafQ&s",
      name: "Michael Lee",
      description: "Sales Executive",
      content:"After using ResumeSquad, I noticed an immediate improvement in my job search. Their expert writers and AI tools helped create a resume that passed ATS filters and attracted attention from recruiters. The cover letter and profile optimization were also fantastic additions!"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzz0nwW80C5NM4wXwDvTpqYyV4RBG2h9Wfw&s",
      name: " Laura Green",
      description: "Project Manager",
      content:"ResumeSquad's services were a game-changer for me. The resume they created was not only professionally written but also keyword optimized, which helped me stand out. The ATS compliance and AI scoring were incredibly valuable in getting my resume noticed by employers."
    },
   
  ];
  return (
    <>
      <div className="bg-white py-6 ">
        <h1 className=" text-3xl  font-bold px-2 md:px-44 my-8">
        The ResumeSquad Experience
        </h1>
        <div className="">
          <SecondCardSlider secondcards={secondcards} />
        </div>
      </div>
    </>
  );
}

export default Instructor;
