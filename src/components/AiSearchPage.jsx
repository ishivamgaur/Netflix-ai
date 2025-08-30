import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const AiSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    console.log(searchInput);
  };

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
