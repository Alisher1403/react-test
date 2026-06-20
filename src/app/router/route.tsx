import { createBrowserRouter } from "react-router";

import Home from "@src/pages/home";
import Cart from "@src/pages/cart";
import Favorites from "@src/pages/favorites";
import ProductId from "@src/pages/product/[id]";
import DefaultLayout from "../layout/default/default";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductId />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
