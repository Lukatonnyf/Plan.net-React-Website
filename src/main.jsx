import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loggin from "./pages/loggin/Loggin.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Loggin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
