import { useEffect, useState } from "react";
import { checkValidate } from "../utils/formValidate.js";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [inputValidateError, setinputValidateError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = userData.name.trim();
    const email = userData.email.trim();
    const password = userData.password.trim();

    const validatedError = checkValidate(
      isSignIn ? null : name,
      email,
      password
    );
    console.log("validatedError: ", validatedError);
    setinputValidateError(validatedError);
    if (validatedError) return;

    console.log(userData);
    setUserData({ name: "", email: "", password: "" });
  };

  const handleToggleAuth = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    setUserData({ name: "", email: "", password: "" });
    setinputValidateError("");
  }, [isSignIn]);

  return (
    <div className="w-full min-h-screen -mt-20">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="min-w-3/12 bg-black/60 min-h-40 flex flex-col gap-5 p-15 rounded-2xl *:transition-all *:duration-500 ">
          <h1 className="text-3xl font-bold text-white ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col w-full gap-5 *:transition-all *:duration-500 ">
            {!isSignIn && (
              <input
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
                type="text"
                placeholder="Enter name"
              />
            )}
            <input
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
              type="email"
              placeholder="Enter email"
            />
            <input
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="bg-gray-100/10 text-white border-none border-1 outline-none ring-0 focus:ring-2 ring-transparent focus:ring-sky-500/50 px-4 py-3 rounded-md"
              type="password"
              autoComplete="false"
              placeholder="Enter password"
            />
            {inputValidateError && (
              <p className="text-lg font-bold text-red-500">
                {inputValidateError}
              </p>
            )}
            <button
              onClick={(e) => handleFormSubmit(e)}
              className="bg-red-500/50 text-xl font-semibold cursor-pointer hover:bg-red-500/60 text-white  px-4 py-3 rounded-md"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            onClick={handleToggleAuth}
            className="text-gray-400 hover:text-gray-200 cursor-pointer pb-5 "
          >
            {isSignIn
              ? "Don't have an account? Sign Up"
              : "Already have account? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
