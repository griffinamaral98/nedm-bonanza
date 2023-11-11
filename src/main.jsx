import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./routes/Root";
import "./index.css";
import Bands from "./routes/Bands.jsx";
import FestInfo from "./routes/FestInfo.jsx";
import BandInfo from "./routes/BandInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/bands",
    element: <Bands />,
  },
  {
    path: "/festinfo",
    element: <FestInfo />,
  },
  {
    path: "/bandinfo",
    element: <BandInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
