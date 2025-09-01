import { useSelector } from "react-redux";
import AiSearchBar from "./AiSearchBar";
import MovieCard from "./MovieCard";
import { useState } from "react";
import MovieCardShimmer from "./MovieCardShimmer";

const AiSearchPage = () => {
  const aiMoviesSuggestion = useSelector(
    (store) => store.ai.aiMoviesSuggestions
  );

  const [fetchLoading, setFetchLoading] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black background-image">
      <div className="flex flex-col gap-8">
        <div className="pt-30">
          <AiSearchBar setFetchLoading={setFetchLoading} />
        </div>

        <div className="flex gap-5 items-center justify-center flex-wrap pb-10">
          {aiMoviesSuggestion !== null ? (
            <div className="grid grid-cols-6 gap-10 p-20 items-center justify-center">
              {aiMoviesSuggestion.map((movie) => (
                <MovieCard key={movie.id} movieDetails={movie} />
              ))}
            </div>
          ) : !fetchLoading ? (
            <h1 className="text-xl font-semibold text-white">
              What movie vibe are you looking for today? 😊
            </h1>
          ) : (
            <div className="grid grid-cols-6 gap-10 p-20 items-center justify-center">
              {Array.from({ length: 10 }).map((_, index) => (
                <MovieCardShimmer key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiSearchPage;
