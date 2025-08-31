import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import aiSuggestions from "../utils/aiSuggestion.js";
import { API_OPTIONS } from "../utils/constants.js";

const AiSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [aiMovieSuggestions, setAiMovieSuggestions] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    console.log(searchInput);
    let data = await aiSuggestions(searchInput);

    if (data.aiResponse.trim() === "noMovies") {
      console.log("aiResponse: ", data);
    } else if (data.aiResponse) {
      console.log("Success movie response: ", data.aiResponse);
      setAiMovieSuggestions(data.aiResponse.split(","));
    }
  };

  const fetchTmdbMovie = async () => {
    console.log("aiMovieSuggestions: ", aiMovieSuggestions);
    if (aiMovieSuggestions.length !== 0) {
      const promiseArray = aiMovieSuggestions.map(async (movieTitle) => {
        const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movieTitle}`,
          API_OPTIONS
        );
        const result = await data.json();
        return result;
      });

      console.log("movieDetails: ", promiseArray);

      const TmdbResults = await Promise.all(promiseArray); //* [{...}, {...}, {...}, {...}, {...}]
      console.log("TmdbResults: ", TmdbResults);

      TmdbResults.map((data) => { //* {..results: [{...}, {...}]}
        const title = data.results[0]?.title;
        console.log("title: ", title);
        let filteredResultTitle = data.results.filter((movie) => {   //* Filtering the result exact match with title
          let results = movie.title === title;
          return results;
        });

        console.log("FilterdResult: ", filteredResultTitle[0]);
      });
    }
  };

  useEffect(() => {
    console.log("Ai movie response: ", aiMovieSuggestions);
    fetchTmdbMovie();
  }, [aiMovieSuggestions]);

  return (
    <div className="w-full min-h-screen bg-black background-image">
      <div className="pt-40">
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
      </div>
    </div>
  );
};

export default AiSearchPage;
