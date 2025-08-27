import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const signedInUser = useSelector((store) => store.user);
  console.log("signedInUser: ", signedInUser);

  // console.log("currentUser: ",auth.currentUser)

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

  return (
    <div className="w-full relative z-20 bg-gradient-to-b from-20% from-black/80 to-transparent">
      <nav className="h-20 flex items-center container mx-auto justify-between cursor-pointer">
        <div>
          <Link to={"/"}>
            <img src={LOGO} alt="logo" className="h-18 select-none" />
          </Link>
        </div>
        {auth.currentUser ? (
          <div className="h-18 flex items-center text-white gap-2 *:transition-all *:duration-300">
            <img
              src={auth.currentUser.photoURL}
              alt={auth.currentUser.displayName}
              title={auth.currentUser.displayName}
              className="h-12 w-12 object-cover bg-black  rounded-full border-2 border-red-500/50 hover:border-red-500 "
            />

            <button
              onClick={handleSignOut}
              className="text-gray-400 hover:text-gray-200 font-bold cursor-pointer"
            >
              (Sign Out)
            </button>
          </div>
        ) : (
          <div className="h-18 flex items-center  *:transition-all *:duration-300">
            <Link
              to={"/auth"}
              className="bg-red-800/50 hover:bg-red-900 text-white font-bold px-4 py-1 rounded-full cursor-pointer"
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
