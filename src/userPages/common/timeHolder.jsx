import React, { useEffect, useState } from "react";
import gif from "../../assets/gif.gif";
import { FaCheckCircle } from "react-icons/fa";
const TimeHolder = () => {
  const [progress, setProgress] = useState(50);
  useEffect(() => {
    let startTime = Date.now();
    let endTime = startTime + 5000;
    let interval = setInterval(() => {
      let now = Date.now();
      let elapsedTime = now - startTime;
      let percentage = (elapsedTime / 5000) * 100;
      if (percentage > 100) {
        percentage = 100;
        clearInterval(interval);
      }
      setProgress(percentage);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full sm:w-[65%] xl:w-[50%] text-black  flex flex-col p-[15px] items-center gap-[12px]">
      <img src={gif} alt="gif" className="w-full sm:w-[80%]" />
      <div className="w-full flex flex-col gap-[7px]">
        <h2 className="text-[20px] font-semibold text-center">
          Some Magic is happening Please hold on! We Are Processing Your
          Request!
        </h2>
        <div className="w-full flex flex-col gap-[4px]">
          <div className="w-full flex justify-between gap-[15px] items-center">
            <p>Uploading Resume</p>
            <FaCheckCircle />
          </div>
          <div className="relative w-[100%] h-[10px] rounded-[50px] bg-gray-200">
            <div
              style={{ width: `${Math.round(progress)}%` }}
              className={`absolute  left-0 top-0 bg-[#8d77ab] h-full rounded-[50px]`}
            ></div>
          </div>

          <div className="flex justify-between items-center">
            <p>{Math.round(progress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeHolder;
