import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import Hero from "../components/Hero";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Browse from "../pages/Browse.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default AppRouter;
