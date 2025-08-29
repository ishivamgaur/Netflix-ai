import React from "react";
import MovieCard from "./MovieCard.jsx";
import MoviesList from "./MoviesList.jsx";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingMovies && (
      <div className="w-full min-h-screen bg-black text-white px-20 py-10">
        <div className="-mt-72 relative z-20 flex flex-col gap-5 ">
          <MoviesList
            title={"Now Playing"}
            moviesList={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Trending"}
            moviesList={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Popular"}
            moviesList={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
