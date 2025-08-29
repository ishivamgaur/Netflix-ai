import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer.jsx";
import SecondaryContainer from "../components/SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpCommingMovies from "../hooks/useUpCommingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies(); 

  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  // console.log("Movies: ", movies);

  const firstMovie = movies[0];

  return (
    <div className="w-full min-h-screen bg-white -mt-20 bg-center ">
      <MainContainer movie={firstMovie} />
      <SecondaryContainer moviesList={movies} />
    </div>
  );
};

export default Browse;
