import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import '../src/assets/style/boostrap/bootstrap.css'
import './App.css';
import AOS from 'aos';
import './assets/style/aos/aos.css'
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
  });
}, []);
  return (
    <>
     <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
