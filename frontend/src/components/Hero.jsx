import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full min-h-screen -mt-20 relative overflow-hidden">
      {/* Netflix-style background */}
      <div className="absolute inset-0 bg-black">
        {/* Simulated movie poster grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="aspect-[2/3] bg-gradient-to-br from-red-500/90 to-orange-400 rounded-lg animate-pulse"
                style={{
                  animationDelay: `${(i * 0.1) % 3}s`,
                  animationDuration: `${2 + (i % 3)}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen flex-col gap-6 sm:gap-7 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 text-center z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-red-600 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wide">
            Netflix with AI Suggestions
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-relaxed px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12">
            Browse popular, new, and top-rated movies 🎬 or just tell our AI
            your mood — we'll find the perfect match instantly.
          </p>
        </div>

        <div
          className={`w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl transition-all duration-1000 delay-900 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 items-center justify-center">
            <Link
              to={"/auth"}
              className="group relative bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl text-base xs:text-lg sm:text-xl font-bold text-white shadow-lg hover:shadow-red-500/40 transform hover:scale-105 flex items-center gap-2 xs:gap-3 min-w-fit"
            >
              <span>🚀 Get Started</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-42 h-42 bg-red-600/30 rounded-full filter blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-42 h-42 bg-red-600/30 rounded-full filter blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Netflix-style red accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </div>
  );
};

export default Hero;
