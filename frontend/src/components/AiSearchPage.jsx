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
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="pt-20 md:pt-30">
          <AiSearchBar
            setFetchLoading={setFetchLoading}
            fetchLoading={fetchLoading}
          />
        </div>

        <div className="flex gap-5 items-center justify-center flex-wrap pb-5 md:pb-10">
          {aiMoviesSuggestion !== null ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 items-center justify-center">
              {aiMoviesSuggestion.map((movie) => (
                <MovieCard key={movie.id} movieDetails={movie} />
              ))}
            </div>
          ) : !fetchLoading ? (
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center px-4">
              What movie vibe are you looking for today? 😊
            </h1>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 items-center justify-center">
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
