import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import '../assets/style/css/navbar.css';
import Logo from '../assets/images/logo/logo.png';
import Search from "../assets/images/icons/search.png";
import Close from "../assets/images/icons/close.png";

function Navbar() {
  const navRef = useRef();
  const [showSearchField, setShowSearchField] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSearchField = () => {
    setShowSearchField(!showSearchField);
  };

  const closeField = () => {
    setShowSearchField(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-4 col-3 col-sm-3">
              <Link to={"/"}>
                <div className="d-flex align-items-center logo-card">
                <img src={Logo} className='logo' alt="Logo" loading='lazy' />
                <div className="title mt-3 fs-12">
                <div className='text-white text-uppercase '>Consulting</div>
                <div className='text-white text-uppercase lp-1'>Group</div>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-2 col-1">
              <nav ref={navRef} className="main-nav">
                <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link to={"/services"}>Services</Link></li>
                  <li><Link to={"/protfolio"}>Protfolio</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-xl-2 col-7 justify-items-end align-items-center">
              <ul className='p-0 m-0 d-flex justify-content-end'>
                <li className='search'>
                  <button className='btn search-btn' onClick={toggleSearchField}>
                    <img className='search-img' src={Search} alt="Search" loading='lazy' />
                  </button>
                </li>
                <li className='d-block d-xl-none'>
                  <button aria-label="Menu"
                    className="nav-btn btn"
                    onClick={showNavbar}>
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </li>
                <li>
                  <button aria-label="User" className='btn text-white shadow-none'><FaUser/></button>
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
