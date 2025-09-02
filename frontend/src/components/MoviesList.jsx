import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesList }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl md:text-2xl font-bold">{title} Movies</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-8 items-center">
          {moviesList.map((movie) => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
