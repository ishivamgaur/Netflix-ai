import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "../src/routes/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>
);
