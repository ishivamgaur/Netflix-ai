import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="flex items-center-safe flex-col gap-3">
        <h1 className="text-4xl font-extrabold">404 Page Not Found ❌</h1>
        <h3 className="text-2xl text-gray-300">
          The page you are looking for is not available🚫
        </h3>
        <Link
          to={"/"}
          className="px-4 py-2 font-semibold text-xl cursor-pointer bg-red-500/50 hover:bg-red-600/50 rounded-xl"
        >
          Go back to 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
