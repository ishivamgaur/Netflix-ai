import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-black"
      style={{
        backgroundImage: "url('/netflix-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="z-10 relative">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
