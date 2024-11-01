import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Category from "../components/Category/Category";

import Moves from "../components/Video/Moves";
import Detail from "../components/Video/Detail";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Category /> },
      { path: "/product/:productKey", element: <Detail /> },
      { path: "/dashboard", element: <Moves /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
