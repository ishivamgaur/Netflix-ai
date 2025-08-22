import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import Hero from "../components/Hero";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/auth", element: <AuthPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default AppRouter;
