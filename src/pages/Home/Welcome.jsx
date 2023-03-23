import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));

  const handleLogout = () => {
    localStorage.removeItem("item");
    navigate("/login");
  };
  return (
    <div>
      <div>
        {getItem ? (
          <button
            onClick={handleLogout}
            className="text-red-500 underline absolute right-0 p-4 text-xl font-bold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-blue-500 absolute right-0 p-4 text-xl font-bold"
          >
            <button>Please Login</button>
          </Link>
        )}
      </div>
      <div className="text-4xl font-bold text-blue-600 flex flex-col justify-center items-center h-screen">
        {/* <h1>Welcome To AMANA Group</h1> */}
        <img
          className=" h-[300px] "
          src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
        />
      </div>
    </div>
  );
};

export default Welcome;
