import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Cards from "./pages/Cards/Cards";
=======
import Header from "./pages/Home/Header";
>>>>>>> 84b2d7630efd41991617c849da1af1766478de44

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Menubar from "./Shared/Menubar";

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
      </Routes>

      <Footer />
     
    </div>
  );
}

export default App;
