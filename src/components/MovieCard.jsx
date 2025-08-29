import React from "react";
import { TMBD_IMAGE_PATH_URL_LOW_RES } from "../utils/constants";

const MovieCard = ({ movieDetails }) => {
  console.log("MoviesDetails: ", movieDetails);

  console.log(`${TMBD_IMAGE_PATH_URL_LOW_RES}${movieDetails.poster_path}`);

  return (
    <div className="w-42 flex">
      <img
        className="w-full object-cover"
        src={`${TMBD_IMAGE_PATH_URL_LOW_RES}${movieDetails.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
