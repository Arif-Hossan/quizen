import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import { topicsLoader } from "./DataLoader/topicsLoader";

function App() {
  return (

      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="topics" loader={topicsLoader} element={<Topics></Topics>}></Route>
        </Routes>
      </div>

  );
}

export default App;
