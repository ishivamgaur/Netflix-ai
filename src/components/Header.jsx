import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full relative z-20 bg-gradient-to-b from-20% from-black/80 to-transparent">
      <nav className="h-20 flex items-center container mx-auto  cursor-pointer">
        <Link
          to={"/"}
          className="text-4xl font-bold bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent"
        >
          <img
            src="/netflix_logo.png"
            alt="logo"
            className="h-18 select-none"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
