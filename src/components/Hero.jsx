import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-cover -mt-20 bg-center">
      {/* Content above overlay */}
      <div className="flex items-center justify-center min-h-screen flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Welcome to Netflix Clone
        </h1>
        <Link className="text-white" to={"/auth"}>
          Go to login page
        </Link>
      </div>
    </div>
  );
};

export default Hero;
