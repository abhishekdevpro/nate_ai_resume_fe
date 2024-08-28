import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EmployeeEmailVerification = () => {
  const [status, setStatus] = useState("verifying");
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useParams();
  useEffect(() => {
    console.log(token);
    axios
      .get(
        `https://api.resumesquad.net/api/admin/employee/verify-account/${token}`
      )
      .then((response) => {
        console.log(response);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setErrorMessage(
          error.response?.data?.message || "Error occurred during verification."
        );
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded">
        {status === "verifying" && <p>Verifying...</p>}
        {status === "success" && (
          <div className="flex flex-col gap-[7px] items-center">
            <p className="text-green-600">Your Email has been Verified!</p>
            <Link to="/employee/login">
              <button className="bg-green-600 text-white font-semibold px-[30px] py-[12px] rounded-[7px]">
                Click Here to Login
              </button>
            </Link>
          </div>
        )}
        {status === "error" && <p className="text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default EmployeeEmailVerification;
