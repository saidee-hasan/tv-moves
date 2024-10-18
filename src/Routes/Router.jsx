import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Category from "../components/Category/Category";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        { path: "/", element: <Category/> },
    ],
  },
]);
