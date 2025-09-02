import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverHandler = (e) => {
      if (e.target.closest("button, a")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseover", hoverHandler);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseover", hoverHandler);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 hidden sm:block -translate-x-1/2 -translate-y-1/2  left-0 pointer-events-none z-50 w-5 h-5 rounded-full border-2 border-red-500 transition-transform duration-500 ease-out ${
        hovered ? "scale-500 bg-black/60 border-[0.5px]" : "scale-100"
      }`}
      style={{
        left: position.x - 10,
        top: position.y,
      }}
    />
  );
}
