
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/Header';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './Shared/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      {/* <Home></Home> */}

      <Footer />
    </div>
  );
}

export default App;
