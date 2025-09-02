import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLoginClick = () => {
    // Replace with your routing logic
    console.log("Navigate to /auth");
  };

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
      <div className="relative flex items-center justify-center min-h-screen flex-col gap-5 px-6 text-center z-10">
        {/* Netflix-style logo/brand */}
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-red-600 text-2xl font-black tracking-wider">
            NETFLIX with AI
          </div>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl">
            Unlimited movies, TV shows, and more
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
            Watch anywhere. Cancel anytime. Ready to watch? Enter your email to
            create or restart your membership.
          </p>
        </div>

        {/* Email signup section */}
        <div
          className={`w-full max-w-2xl transition-all duration-1000 delay-900 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-6 py-4 rounded-lg bg-black/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <button
              onClick={handleLoginClick}
              className="group bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-xl hover:shadow-red-500/30 transform hover:scale-105 flex items-center gap-3 min-w-fit"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Alternative login link */}
        <div
          className={`transition-all duration-1000 delay-1100 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400">
            Already have an account?{" "}
            <button
              onClick={handleLoginClick}
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
              className="text-white hover:text-red-400 transition-colors duration-300 underline underline-offset-4 font-medium"
            >
              Sign in now
            </button>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-600/10 rounded-full filter blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-red-600/10 rounded-full filter blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Netflix-style red accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </div>
  );
};

export default Hero;
