import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

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
      navigate("/");
      localStorage.setItem("item", JSON.stringify("item"));
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" h-screen flex bg-indigo-50">
      <div className="shadow-xl bg-slate-50 flex flex-col md:flex-row rounded lg:w-[800px] m-auto">
      <div className=" p-8 flex-1 justify-center items-center flex">
        <img
          className="w-[200px] lg:w-[400px]"
          // src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
          src="https://lh3.googleusercontent.com/p/AF1QipPgKvyVYsnl_ilL0-LrxZPSfnE4fDCIKUgbrOwM=s680-w680-h510"
        />
      </div>
      <div className="bg-white flex-1 justify-center items-center flex flex-col">
        <img className="w-[200px] pt-8" src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png" />
        <h1 className="text-gray-600 font-bold my-6">Welcome to AMANA Group</h1>
        <form className="w-full lg:w-[72%] flex flex-col justify-center p-6 ">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-500 font-bold mb-2"
            >
              
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
              className="border-b-2 appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-500 font-bold mb-2"
            >
              
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className="border-b-2 appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <div className="flex">
              <button
                type="button"
                onClick={handleTogglePassword}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                {!showPassword ? (
                  <AiFillEyeInvisible className="text-xl h-6 " />
                ) : (
                  <AiOutlineEye className="text-xl h-6 " />
                )}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
