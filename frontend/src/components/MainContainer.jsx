import React, { useEffect } from "react";
import MovieTitleOfVideo from "./MovieTitleOfVideo.jsx";
import MovieVideoBackground from "./MovieVideoBackground.jsx";
import useTrailerVideo from "../hooks/useTrailerVideo.js";
import { useSelector } from "react-redux";

const MainContainer = ({ movie }) => {
  // console.log("movie: ", movie);
  const { id } = movie;
  useTrailerVideo(id);

  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  // if (!trailerVideo) return;

  // console.log("trailerVideo: ", trailerVideo);

  return (
    <div className="relative">
      <MovieTitleOfVideo movie={movie} />
      <MovieVideoBackground trailerVideo={trailerVideo} />
    </div>
  );
};

export default MainContainer;
