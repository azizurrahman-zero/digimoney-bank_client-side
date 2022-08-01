import { Route, Routes } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Cards from "./pages/Cards/Cards";
import AboutUs from "./pages/About/AboutUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Menubar from "./Shared/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import WelcomePage from "./pages/Dashboard/WelcomePage";


function App() {
 const {pathname}=   useLocation()
  return (
    <div className={`mx-auto max-w-7xl ${pathname.includes("dashboard")&&"py-2"}`}>
     {!pathname.includes("dashboard")&& <Menubar></Menubar>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home />}></Route>
         <Route path="/login" element={<Login />}></Route> 
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<WelcomePage />} />
        </Route>
       

      </Routes>
      {!pathname.includes("dashboard")&& <Footer></Footer>}
      

    </div>
  );
}

export default App;
