import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import { topicsLoader } from "./DataLoader/topicsLoader";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children : [
        {
          path:'/',
          loader:topicsLoader,
          element:<Home></Home>
        },
        {
          path:'/home',
          loader:topicsLoader,
          element:<Home></Home>
        },

      ]
    },
    {
      path:'*',
      element :<div>Error :404 </div>
    }

  ])
  return (

      <div className="App">
       <RouterProvider router={router}></RouterProvider>
      </div>

  );
}

export default App;
