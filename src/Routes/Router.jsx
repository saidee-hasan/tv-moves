import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Category from "../components/Category/Category";
import Video from "../components/Video/Moves";
import Moves from "../components/Video/Moves";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      
     

          { path: "/", element: <Category/> },

          { path: "/dashboard", element: <Moves/> },
          
    ],
  },
]);
