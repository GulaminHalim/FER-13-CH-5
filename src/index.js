import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Base from "./pages/Base";

import App from "./App";
import BannerCar from "./components/BannerCar";
import Landing from "./pages/Landing";
import SearchCar from "./pages/SearchCar";
import Test from "./Test.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <SearchCar />
    </React.StrictMode>
  </BrowserRouter>
);


