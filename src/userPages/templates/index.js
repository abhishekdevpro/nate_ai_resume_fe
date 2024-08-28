// Templates.jsx
import React, { useState, useRef } from "react";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import resumeImg from "../assets/images/resume1.png";
// import resumeImg2 from "../assets/images/resume2.png";
// import resumeImg3 from "../assets/images/resume3.png";
// import resumeImg5 from "../assets/images/RESUME 5.png";
// import resumeImg4 from "../assets/images/resume4.png";
import Resume1 from "../resume/resume1";
// import Resume2 from "../resume/resume2";
// import Resume3 from "../resume/resume3";
// import Resume4 from "../resume/resume4";
// import Resume5 from "../resume/resume5";
import { useDispatch, useSelector } from "react-redux";
import { setColorValue } from "../../state/reducer/colorSlice";
import { selectTemplate } from "../../state/reducer/templateSlice";
import { useParams } from "react-router-dom";
import Resume2 from "../resume/resume2";
import Resume from "../resume/resume";
import Resume3 from "../resume/resume3";
// import ReactToPrint from "react-to-print";

const Templates = () => {
  const resumeRef = useRef(null);
  const { template } = useParams();
  //   //colors
  const { id } = useParams();
  const colors = ["#232323", "#172f53", "#361146", "#160a45", "#5b6c61"];

  const selectedTemplate = useSelector(
    (state) => state.template.selectedTemplate
  );

  const dispatch = useDispatch();

  // Use the selectedTemplate from Redux state
  const [resume, setResume] = useState(selectedTemplate);

  const handleResume = (index) => {
    setResume(index);
    // Dispatch the selectTemplate action to update Redux state
    dispatch(selectTemplate(index));
  };

  localStorage.setItem("resume", resume);

  return (
    <div className="h-full">
      <div className="flex justify-between w-full bg-[#b2b6c1] py-4 items-center px-4">
        <Link to={`/user/create-resume/${id}`}>
          <h2 className="flex gap-2 cursor-pointer max text-clearanceGrey font-semibold items-center max-[1100px]:hidden">
            <FaArrowLeft />
            Back to Editor
          </h2>
          <button className="hidden max-[1100px]:block px-2 py-2 rounded-full bg-white text-black">
            <FaArrowLeft />
          </button>
        </Link>
        {/* <div className="flex gap-2">
          {colors.map((item) => {
            return (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className="h-9 w-9 rounded-3xl bg-slate-500 opacity-80 cursor-pointer hover:opacity-100"
                onClick={() => dispatch(setColorValue(item))}
              />
            );
          })}
        </div> */}

        <div className="hidden">
          {/* <ReactToPrint
            trigger={() => {
              return (
                <button className="bg-white border max-[650px]:text-[10px] max-[650px]:px-1 border-white text-black px-4 py-2  rounded-md">
                  Print
                </button>
              );
            }}
            content={() => resumeRef.current}
          /> */}
        </div>
      </div>
      <div className="max-[1100px]:flex-col flex gap-2 items-start relative h-full">
        <div className="w-1/2 max-[1100px]:w-full max-[1100px]:h-auto justify-center flex gap-10 max-[650px]:gap-5 max-[650px]:px-5  flex-wrap px-10 py-10 bg-clearanceGrey h-full box-border max-[650px]:h-auto items-center">
          <div className="flex flex-wrap gap-[50px] justify-center max-[1100px]:gap-5">
            <div
              onClick={() => handleResume(1)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg1"
            >
              <div className="w-full absolute bottom-0 left-0 text-[14px] bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
              </div>
            </div>

            <div
              onClick={() => handleResume(2)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg2"
            >
              <div className="w-full absolute bottom-0 left-0 text-[14px] bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
              </div>
            </div>

            {/* <div
              onClick={() => handleResume(3)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg2"
            >
              <div className="w-full absolute bottom-0 left-0 text-[14px] bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
              </div>
            </div>
            <div
              onClick={() => handleResume(4)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg2"
            >
              <div className="w-full absolute bottom-0 left-0 text-[14px] bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
              </div>
            </div> */}
            {/* <div
              onClick={() => handleResume(3)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg3"
            >
              <div className="w-full absolute bottom-0 flex justify-center text-[14px] gap-2 left-0 bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
                <p>WORD</p>
              </div>
            </div>
            <div
              onClick={() => handleResume(4)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-contain bg-white bg-no-repeat bg-resumeImg4"
            >
              <div className="w-full absolute bottom-0 left-0 text-[14px] bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
              </div>
            </div>
            <div
              onClick={() => handleResume(5)}
              className="cursor-pointer relative w-[132px] sm:w-[150px] h-[200px] bg-top bg-white bg-contain bg-no-repeat bg-resumeImg5"
            >
              <div className="w-full absolute bottom-0 flex justify-center text-[14px] gap-2 left-0 bg-black h-[15px ] text-white text-center font-semibold">
                <p>PDF</p>
                <p>WORD</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="absolute w-1/2 right-0 h-full overflow-y-scroll max-[1100px]:relative max-[1100px]:overflow-visible max-[1100px]:w-full p-5 py-[60px] max-[650px]:p-0 bg-clearanceDarkBlue">
          <div ref={resumeRef} className="w-full h-full flex justify-center">
            {resume === 1 ? <Resume /> : null}
            {resume === 2 ? <Resume2 /> : null}
            {/* {resume === 3 ? <Resume3 /> : null}
            {resume === 4 ? <Resume1 /> : null} */}
            {/* {resume === 3 ? <Resume3 /> : null}
            {resume === 4 ? <Resume4 /> : null}
            {resume === 5 ? <Resume5 /> : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
