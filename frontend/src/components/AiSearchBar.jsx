import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import aiSuggestions from "../utils/aiSuggestion.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addAiSuggestions } from "../store/slices/aiSlice.js";
import toast from "react-hot-toast";

const AiSearchBar = ({ setFetchLoading, fetchLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const [aiMovieSuggestions, setAiMovieSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    setFetchLoading(true);
    dispatch(addAiSuggestions(null)); // Clear store immediately
    console.log("fetching..");
    try {
      let data = await aiSuggestions(searchInput);

      // console.log("data", data);

      if (data?.aiResponse.trim() === "noMovies") {
        toast.error("No movies available");
        setFetchLoading(false);
        dispatch(addAiSuggestions(null));
      } else if (data?.aiResponse) {
        setAiMovieSuggestions(data.aiResponse.split(","));
        // setFetchLoading(false);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
      setFetchLoading(false);
    }
  };

  const fetchTmdbMovie = async () => {
    // console.log("aiMovieSuggestions: ", aiMovieSuggestions);
    let filtedMovies = null;

    if (aiMovieSuggestions.length !== 0) {
      const promiseArray = aiMovieSuggestions.map(async (movieTitle) => {
        const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movieTitle}`,
          API_OPTIONS
        );
        const result = await data.json();
        return result;
      });

      const TmdbResults = await Promise.all(promiseArray); //* [{...}, {...}, {...}, {...}, {...}]
      setFetchLoading(false);
      let movies = TmdbResults.map((data) => {
        //* {..results: [{...}, {...}]}
        // const title = data.results[0]?.title;
        // let filteredResultTitle = data.results.filter((movie) => {
        //   let results = movie.title === title;
        //   return results;
        // });

        // let filterResults = filteredResultTitle[0];

        // return filterResults;
        return data.results[0];
      }).filter(Boolean);

      // console.log("movies: ", movies);
      // filtedMovies = movies;

      const uniqueMovies = movies.reduce((acc, movie) => {
        if (movie.id && !acc.some((m) => m.id === movie.id)) {
          acc.push(movie);
        }
        return acc;
      }, []);

      filtedMovies = uniqueMovies;
    }

    dispatch(addAiSuggestions(filtedMovies));
    setFetchLoading(false);
  };

  useEffect(() => {
    // console.log("Ai movie response: ", aiMovieSuggestions);
    fetchTmdbMovie();
  }, [aiMovieSuggestions]);

  return (
    <form className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-1/2 mx-auto p-3 sm:p-4 md:p-5 rounded-xl bg-black/90 gap-3 sm:gap-4 md:gap-5 flex flex-col sm:flex-row *:transition-all *:duration-300">
      <input
        disabled={fetchLoading}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for movies suggestions"
        className="w-full sm:w-8/12 md:w-9/12 text-base sm:text-lg md:text-xl disabled:cursor-not-allowed rounded-md px-3 sm:px-4 md:px-5 h-12 sm:h-14 md:h-15 placeholder:text-gray-200/20 ring-2 ring-transparent focus:ring-red-900 outline-none bg-gray-800/50 text-white"
      />
      <button
        disabled={fetchLoading}
        onClick={handleFormSubmit}
        className={`bg-red-900 hover:bg-red-950 disabled:bg-gray-900 disabled:cursor-not-allowed px-3 sm:px-4 md:px-5 py-2 w-full sm:w-4/12 md:w-3/12 h-12 sm:h-14 md:h-15 rounded-md text-base sm:text-lg md:text-xl font-semibold cursor-pointer text-white flex items-center gap-1 sm:gap-2 justify-center`}
      >
        <IoSearch size={20} className="sm:size-6 md:size-7" />
        <span className="hidden xs:inline">Ai Search</span>
        <span className="xs:hidden">Search</span>
      </button>
    </form>
  );
};

export default AiSearchBar;
