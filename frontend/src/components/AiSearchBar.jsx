import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import aiSuggestions from "../utils/aiSuggestion.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addAiSuggestions } from "../store/slices/aiSlice.js";
import toast from "react-hot-toast";

const AiSearchBar = ({ setFetchLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const [aiMovieSuggestions, setAiMovieSuggestions] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    dispatch(addAiSuggestions(null));
    setFetchLoading(true);
    e.preventDefault();
    if (searchInput.trim() === "") return;
    console.log("fetching..");
    try {
      let data = await aiSuggestions(searchInput);

      console.log("data", data);

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
    console.log("aiMovieSuggestions: ", aiMovieSuggestions);
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
        const title = data.results[0]?.title;
        let filteredResultTitle = data.results.filter((movie) => {
          let results = movie.title === title;
          return results;
        });

        let filterResults = filteredResultTitle[0];

        return filterResults;
      }).filter(Boolean);

      console.log("movies: ", movies);
      filtedMovies = movies;
    }

    dispatch(addAiSuggestions(filtedMovies));
    setFetchLoading(false);
  };

  useEffect(() => {
    console.log("Ai movie response: ", aiMovieSuggestions);
    fetchTmdbMovie();
  }, [aiMovieSuggestions]);

  return (
    <form className="w-1/2 mx-auto p-5 rounded-xl bg-black/90 gap-5 flex *:transition-all *:duration-300">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for movies suggestions"
        className="w-9/12 text-xl rounded-md px-5 h-15 placeholder:text-gray-200/20 ring-2 ring-transparent focus:ring-red-900 outline-none bg-gray-800/50 text-white"
      />
      <button
        onClick={handleFormSubmit}
        className="bg-red-900 hover:bg-red-950 px-5 py-2 w-3/12 h-15 rounded-md text-xl font-semibold cursor-pointer text-white flex items-center gap-2 justify-center"
      >
        <IoSearch size={28} />
        Ai Search
      </button>
    </form>
  );
};

export default AiSearchBar;
