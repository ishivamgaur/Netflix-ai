import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="w-full relative  min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/netflix-bg.jpg')",
      }}
    >
      <div className="absolute z-1 inset-0 bg-black/40"></div>

      <div className="z-10 relative">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
