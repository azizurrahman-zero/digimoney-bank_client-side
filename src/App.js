import { Route, Routes } from "react-router-dom";
import "./App.css";

import Blog from "./pages/Blog/Blog";

import Cards from "./pages/Cards/Cards";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Menubar from "./Shared/Menubar";
import Profile from "./UserDashboard/Profile";
import Summary from "./UserDashboard/Summary";
import UserDashboardArea from "./UserDashboard/UserDashboardArea";

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
        <Route path="/dashboard" element={<UserDashboardArea />}>
            <Route index element={<Summary></Summary>}></Route>
            <Route path='summary' element={<Summary></Summary>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>
      </Routes>

      <Footer />
     
    </div>
  );
}

export default App;
