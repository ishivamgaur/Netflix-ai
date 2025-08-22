import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("Pathname: ", pathname);

  const [isSignIn, setIsSignIn] = useState(null);

  useEffect(() => {
    if (pathname === "/signin") setIsSignIn(true);
    else if (pathname === "/signup") setIsSignIn(false);
  }, [pathname]);

  const handleClick = () => {
    if (pathname === "/signin") navigate("/signup");
    else if (pathname === "/signup") navigate("/signin");
  };

  return (
    <div className="w-full min-h-screen -mt-20">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="min-w-3/12 bg-black/80 min-h-40 flex flex-col gap-5 p-10 rounded-2xl">
          <h1 className="text-3xl font-semibold text-white ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col w-full gap-5 *:transition-all *:duration-400">
            {!isSignIn && (
              <input
                className="bg-gray-500/50 text-white border-none border-1 outline-none ring-3 ring-transparent focus:ring-sky-500 px-4 py-3 rounded-md"
                type="text"
                placeholder="Enter name"
              />
            )}
            <input
              className="bg-gray-500/50 text-white border-none border-1 outline-none ring-3 ring-transparent focus:ring-sky-500 px-4 py-3 rounded-md"
              type="email"
              placeholder="Enter email"
            />
            <input
              className="bg-gray-500/50 text-white border-none border-1 outline-none ring-3 ring-transparent focus:ring-sky-500 px-4 py-3 rounded-md"
              type="password"
              autoComplete="true"
              placeholder="Enter password"
            />
            <button className="bg-red-500/50 text-xl font-semibold cursor-pointer hover:bg-red-500/60 text-white  px-4 py-3 rounded-md">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            onClick={handleClick}
            className="text-gray-400 hover:text-gray-200 cursor-pointer pb-5 "
          >
            {isSignIn
              ? "Don't have an account? Sign Up Now"
              : "Already have accound? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
