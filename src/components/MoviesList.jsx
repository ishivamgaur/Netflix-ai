import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesList }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-8 items-center">
          {moviesList.map((movie) => (
            <MovieCard movieDetails={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
