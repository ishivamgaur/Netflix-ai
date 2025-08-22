import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import SignInPage from "../pages/SignInPage";
import SignupPage from "../pages/SignupPage";
import Hero from "../components/Hero";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignInPage /> },
    ],
  },
]);

export default AppRouter;
