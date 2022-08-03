import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/About/AboutUs";
import Cards from "./pages/Cards/Cards";
import Blog from "./pages/Blog/Blog";
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
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
