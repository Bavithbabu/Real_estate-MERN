import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/Signout" element={<Signout />}/>
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App;
