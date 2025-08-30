import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieTitleOfVideo = ({ movie }) => {
  const { original_title, overview, title, backdrop_path } = movie;
  return (
    <div className="absolute z-10 top-0 bottom-0 right-0 aspect-video  bg-gradient-to-r from-30% from-black/90 to-black/10 flex items-center px-20 ">
      <div className="w-5/12 flex flex-col gap-2">
        <h1 className="text-white font-text-white text-5xl leading-tight font-extrabold">
          {title}
        </h1>
        <p className="text-gray-400 text-[20px] leading-tight">{overview}</p>
        <div className="flex gap-5 pt-5">
          <button className="bg-white hover:bg-white/80 flex items-center gap-2 rounded-md cursor-pointer px-8 py-3 text-2xl font-semibold ">
            <FaPlay /> Play
          </button>
          <button className="bg-gray-500 hover:bg-gray-500/80 flex items-center gap-2 rounded-md cursor-pointer text-white px-8 py-3 text-2xl font-semibold ">
            <AiOutlineInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitleOfVideo;
