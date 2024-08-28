import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#f5f3f5]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-clearanceGrey font-bold text-[60px]">Oops!</h1>
        <h2 className="font-semibold">404 - PAGE NOT FOUND</h2>
        <p className="w-[70%] text-center">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/admin/">
          {" "}
          <button className="bg-clearanceGrey px-4 py-3 text-white rounded-md mt-2 font-semibold ">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
