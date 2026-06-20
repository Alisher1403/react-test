import { createBrowserRouter } from "react-router";

import Home from "@src/pages/home/home";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
]);
