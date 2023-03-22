import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!(username === "a" && password === "a")) {
      alert("Username and Password Did not matche");
    } else {
      navigate("/account");
      localStorage.setItem("item", JSON.stringify("item"));
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex h-screen">
      <div className="bg-slate- flex-1 justify-center items-center flex">
        <img
          className=" h-[600px] shadow-md"
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
        />
      </div>
      <div className="bg-slate-100 flex-1 justify-center items-center flex">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute  right-[330px] top-[430px] text-gray-700 "
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Clear
            </button>
            <button
              type="submit"
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
