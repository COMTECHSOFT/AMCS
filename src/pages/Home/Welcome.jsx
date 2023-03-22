import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const getItem = JSON.parse(localStorage.getItem("item"));

  const handleLogout = () => {
    localStorage.removeItem("item");
    // navigate("/login");
    window.location.reload()
  };
  return (
    <div className="text-4xl font-bold text-blue-600 flex flex-col justify-center items-center h-screen">
      <h1>Welcome To AMANA Group</h1>
     {getItem? <button onClick={handleLogout}>logout</button>:<button onClick={()=>navigate('/login')}>Login</button>}
    </div>
  );
};

export default Welcome;
