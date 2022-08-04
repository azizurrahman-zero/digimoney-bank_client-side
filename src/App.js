import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
import Profile from "./pages/Dashboard/Profile";
import Review from "./pages/Dashboard/Review";
import Service from "./pages/Service/Service";
<<<<<<< HEAD
import Camera from "./pages/Login/Camera";

=======
import UserRequest from "./pages/Dashboard/Maneger/UserRequest";


import Team from "./pages/Company/Team";
>>>>>>> 469728fb3a9be9fe9f075679b63677680a90ba59

function App() {
  const { pathname } = useLocation();
  return (
    <div
      className={`mx-auto max-w-7xl ${pathname.includes("dashboard") && "py-2"
        }`}
    >
      {!pathname.includes("dashboard") && <Menubar></Menubar>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/camera" element={<Camera />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route index element={<WelcomePage />} />
        <Route path="dashboard" element={<WelcomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user-request" element={<UserRequest />} />
        
        <Route path="review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<WelcomePage />} />
          <Route path="dashboard" element={<WelcomePage />} />
          <Route path="profile" element={<Profile />} />

          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
      {!pathname.includes("dashboard") && <Footer></Footer>}
    </div>
  );
}

export default App;