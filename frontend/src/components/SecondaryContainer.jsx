import React from "react";
import MovieCard from "./MovieCard.jsx";
import MoviesList from "./MoviesList.jsx";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  // console.log("Top Rated: ", movies.topRatedMovies);

  return (
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRatedMovies &&
    movies.upCommingMovies && (
      <div className="w-full min-h-screen bg-black text-white px-4 sm:px-5 md:px-10 lg:px-20 py-8 md:py-10">
        <div className="md:-mt-30 xl:-mt-50 2xl:-mt-72 relative z-20 flex flex-col gap-4 md:gap-5">
          <MoviesList
            title={"Now Playing"}
            moviesList={movies.nowPlayingMovies}
          />
          <MoviesList title={"Popular"} moviesList={movies.popularMovies} />
          <MoviesList title={"Top Rated"} moviesList={movies.topRatedMovies} />
          <MoviesList title={"Upcoming"} moviesList={movies.upCommingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
