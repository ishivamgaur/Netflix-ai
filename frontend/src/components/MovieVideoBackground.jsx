import React from "react";

const MovieVideoBackground = ({ trailerVideo }) => {
  // console.log("trailervideo: ", trailerVideo);
  return (
    <div className="cursor-none selection:none select-auto">
      {trailerVideo ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo.key}&playsinline=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <div className="w-full aspect-video bg-red-800 flex items-center justify-center">
          <h1 className="text-xl text-white">Loading Trailer video...</h1>
        </div>
      )}
    </div>
  );
};

export default MovieVideoBackground;
