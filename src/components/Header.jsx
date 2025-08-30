import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { MdLogout } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { toggleAiSearchView } from "../store/slices/aiSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const signedInUser = useSelector((store) => store.user);
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  // console.log("signedInUser: ", signedInUser);

  // console.log("currentUser: ",signedInUser)

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully");
    } catch (error) {
      console.error("Something went wrong: ", error);
      toast.error("Signout failed");
      navigate("/error");
    }
  };

  const handleToggleAiToMainContainer = () => {
    console.log("clicked");
    dispath(toggleAiSearchView());
  };

  return (
    <div className="w-full relative z-20 bg-gradient-to-b from-20% from-black/80 to-transparent">
      <nav className="h-20 flex items-center container mx-auto justify-between">
        <div>
          <Link to={"/"}>
            <img src={LOGO} alt="logo" className="h-18 select-none" />
          </Link>
        </div>
        {signedInUser ? (
          <div className="h-18 flex items-center text-white gap-6 *:transition-all *:duration-300">
            <button
              onClick={handleToggleAiToMainContainer}
              className="bg-green-900 flex items-center gap-2 hover:bg-green-950 cursor-pointer rounded-full text-lg font-semibold px-4 py-1"
            >
              {showAiSearch ? (
                "Main page"
              ) : (
                <>
                  Ai Search <IoSearch size={22} />
                </>
              )}
            </button>

            <div className="flex items-center gap-2 *:transition-all *:duration-300">
              <img
                src={signedInUser.photoURL}
                alt={signedInUser.displayName}
                title={signedInUser.displayName}
                className="h-10 w-10 object-cover bg-black  rounded-full border-2 border-red-500/50 hover:border-red-500 "
              />

              <p className="capitalize">{signedInUser.displayName}</p>
              <MdLogout
                onClick={handleSignOut}
                size={28}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
            </div>
          </div>
        ) : (
          <div className="h-18 flex items-center  *:transition-all *:duration-300">
            <Link
              to={"/auth"}
              className="bg-red-800/50 hover:bg-red-900 text-white font-bold px-4 py-2 text-lg rounded-full cursor-pointer"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
