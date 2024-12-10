import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Homepage from "./Components/Homepage.jsx";
import Card from "./Components/Card.jsx";
import DataNotAdded from "./Components/DataNotAdded.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
    ],
  },
  {
    path: "/card",
    element: <Header></Header>,
    children: [
      {
        path: "/card",
        element: <Card></Card>,
      },
    ],
  },
  {
    path: "/about",
    element: <Header></Header>,
    children: [
      {
        path: "/about",
        element: <DataNotAdded msg="About us  page"></DataNotAdded>,
      },
    ],
  },
  {
    path: "/contact",
    element: <Header></Header>,
    children: [
      {
        path: "/contact",
        element: <DataNotAdded msg="Contact Us page"></DataNotAdded>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
