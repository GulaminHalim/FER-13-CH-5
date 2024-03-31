import { Navigate } from "react-router";

import Base from "../pages/Base";
import LandingPage from "../pages/Landing";
import SearchCar from "../pages/SearchCar";
import ResultCarPage from "../pages/ResultCar";
import Footer from "../components/Footer";

const routes = [
  {
    path: "",
    element: <Navigate to="/landing" />,
  },
  {
    path: "/landing",
    element: <Base />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/search-car",
    element: <SearchCar />,
    children: [
      {
        path: "",
        element: <SearchCar />,
      },
    ],
  },
  {
    path: "/result-car",
    element: <ResultCarPage />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
];

export { routes };
