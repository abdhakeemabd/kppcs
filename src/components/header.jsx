import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../assets/style/css/navbar.css';
import Logo from '../assets/images/logo/logo.png';
import Search from "../assets/images/icons/search.png";
import Close from "../assets/images/icons/close.png";

function Navbar() {
  const navRef = useRef();
  const [showSearchField, setShowSearchField] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Track nav state

  const toggleSearchField = () => {
    setShowSearchField(!showSearchField);
  };

  const closeField = () => {
    setShowSearchField(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen); // Toggle state
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-4">
              <Link to={"/"}>
                <img src={Logo} className='logo' alt="Logo" loading='lazy' />
              </Link>
            </div>
            <div className="col-lg-6 col-2">
              <nav ref={navRef} className="">
                <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link to={"/services"}>Services</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-6 justify-items-end align-items-center">
              <ul className='p-0 m-0 d-flex justify-content-end'>
                <li className='search'>
                  <button className='btn search-btn' onClick={toggleSearchField}>
                    <img className='search-img' src={Search} alt="Search"  loading='lazy'/>
                  </button>
                </li>
                <li>
                  <button
                    className="nav-btn btn"
                    onClick={showNavbar}>
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="search-field"
            className={`search-field ${showSearchField ? 'expand' : ''}`}>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className='btn position-absolute' onClick={closeField}>
              <img className='search-img' src={Close} alt="Search"  loading='lazy'/>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
