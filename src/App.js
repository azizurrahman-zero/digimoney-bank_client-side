import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Blog from "./pages/Blog/Blog";
import Cards from "./pages/Cards/Cards";
import AboutUs from "./pages/About/AboutUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import WelcomePage from "./pages/Dashboard/WelcomePage";
import Profile from "./pages/Dashboard/Profile";
import Review from "./pages/Dashboard/Review";
import Service from "./pages/Service/Service";
import Camera from "./pages/Login/Camera";
import Team from "./pages/Company/Team";
import UserRequest from "./pages/Dashboard/Maneger/UserRequest";
import AllUsers from "./pages/Dashboard/AllUsers";
import Landingpage from "./pages/Landingpage/Landingpage";
import SendMoney from "./pages/Dashboard/SendMoney";
import Menubar from "./Shared/Menubar";
import Transection from "./pages/Dashboard/Transection";
import ScrollToTop from "./Shared/ScrollToTop";
import Balance from "./pages/Dashboard/Balance";
import UserInformation from "./pages/Dashboard/UserInformation/UserInformation";
import PrivateRute from "./pages/Login/PrivateRute";
import PrivateadminRoute from "./pages/Login/PrivateAdminRoute";
import { useEffect, useState } from "react";
import FindTransection from "./pages/Dashboard/Maneger/FindTransection";
const getFromLocalStorage=()=>{
  const data= localStorage.getItem('darkmood')
  let dark;
  if(data){
    dark= JSON.parse(data)
  }
  return dark
}
function App() {
  const { pathname } = useLocation();
  const [darkMood,setDarkMood]=useState(getFromLocalStorage())


  return (
    <div data-theme={darkMood?"dark":"mytheme"} className={` bg-base-100`}>
      {!pathname.includes("dashboard")  && !pathname.includes("signUp") && <Menubar darkMood={darkMood} setDarkMood={setDarkMood}></Menubar>}
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/home" element={<Landingpage/>}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/camera" element={<Camera />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="review" element={<Review />} />
        <Route path="/dashboard" element={<PrivateRute><Dashboard /></PrivateRute>}>
          <Route index element={<WelcomePage />} />
          <Route path="dashboard" element={<WelcomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="balance" element={<Balance />} />
          <Route path="user-request" element={<UserRequest />} />
          <Route path="allusers" element={<PrivateadminRoute><AllUsers /></PrivateadminRoute>} />
          <Route path="findtransection" element={<PrivateadminRoute><FindTransection /></PrivateadminRoute>} />
          <Route path="information/:id" element={<UserInformation />} />
          <Route path="sendmoney" element={<SendMoney />} />
          <Route path="review" element={<Review />} />
          <Route path="transection" element={<Transection />} />
          <Route path="balance" element={<Balance />} />
        </Route>
      </Routes>
      <ScrollToTop />
      {/* {!pathname.includes("dashboard") && <Footer></Footer>}  */}
      {!pathname.includes("login") && !pathname.includes("dashboard") &&!pathname.includes("signUp") && (
        <Footer></Footer>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
