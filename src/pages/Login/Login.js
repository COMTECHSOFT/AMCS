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
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-slate- flex-1 justify-center items-center flex">
        <img
          className=" md:h-[300px] "
          src="https://amanagroupbd.com/wp-content/uploads/2021/09/logo-1.png"
        />
      </div>
      <div className="bg-white flex-1 justify-center items-center flex">
        <form className="bg-slate-50 h-[80vh] w-[80%] flex flex-col justify-center p-6 rounded-lg shadow-md">
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
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  );
};

export default Login;
