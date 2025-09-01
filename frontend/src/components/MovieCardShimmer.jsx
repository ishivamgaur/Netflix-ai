import React from "react";

const MovieCardShimmer = () => {
  return (
    <div className="min-h-80 w-52 bg-gray-900 rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image shimmer */}
      <div className="h-60 bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950"></div>

      {/* Title shimmer */}
      <div className="p-3 space-y-2">
        <div className="h-4 w-4/4 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded"></div>
        <div className="h-4 w-4/4 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded"></div>
      </div>
    </div>
  );
};

export default MovieCardShimmer;
