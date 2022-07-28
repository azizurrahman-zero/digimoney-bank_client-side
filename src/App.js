import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./pages/Cards/Cards";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Menubar from "./Shared/Menubar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
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
