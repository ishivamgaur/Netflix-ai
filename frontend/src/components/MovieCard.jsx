import React from "react";
import { TMBD_IMAGE_PATH_URL_LOW_RES } from "../utils/constants";

const MovieCard = ({ movieDetails }) => {
  return (
    <div className=" min-h-90 flex justify-center p-5 bg-gray-950/50 hover:bg-gray-900/50 transition-all duration-300 rounded-xl">
      <div className="w-42 flex flex-col gap-2 items-center">
        <img
          className="w-full h-62 object-cover"
          src={`${TMBD_IMAGE_PATH_URL_LOW_RES}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <h2
          title={movieDetails.title}
          className="text-center text-white font-semibold line-clamp-3"
        >
          {movieDetails.title}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
