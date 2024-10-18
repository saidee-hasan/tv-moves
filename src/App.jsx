
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";


function App() {



  return (
    <div>
          <RouterProvider router={router}>
            <Layout/>
            
          </RouterProvider>
    
    
     
    </div>
  )
}

export default App
