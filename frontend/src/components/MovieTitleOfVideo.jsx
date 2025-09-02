import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieTitleOfVideo = ({ movie }) => {
  const { original_title, overview, backdrop_path } = movie;
  return (
    <div className="absolute z-10 top-18 lg:top-0 left-0 bottom-0 right-0 aspect-video bg-gradient-to-r from-black to-black/50 flex items-center px-4 md:px-10 lg:px-20">
      <div className="w-full md:w-8/12 lg:w-5/12 flex flex-col gap-1 md:gap-2">
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold">
          {original_title}
        </h1>
        <p className="text-gray-400 text-md sm:text-base md:text-lg lg:text-[20px] leading-tight line-clamp-3 md:line-clamp-none !m-0 !p-0">
          {overview}
        </p>
        <div className="flex gap-3 md:gap-5 pt-3 md:pt-5">
          <button className="bg-white hover:bg-white/80 flex items-center gap-1 md:gap-2 rounded-md cursor-pointer px-4 md:px-6 lg:px-8 py-2 md:py-3 text-base md:text-xl lg:text-2xl font-semibold">
            <FaPlay className="text-sm hidden md:block md:size-6 md:text-base" />
            <span>Play</span>
          </button>
          <button className="bg-gray-500 hover:bg-gray-500/80 flex items-center justify-center gap-1 md:gap-2 rounded-md cursor-pointer text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 text-base md:text-xl lg:text-2xl font-semibold">
            <AiOutlineInfoCircle className="text-sm  hidden md:block md:size-6 md:text-base" />
            <span className="hidden sm:inline">More Info</span>
            <span className="sm:hidden">Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitleOfVideo;
