import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hero from "./pages/HeroPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
