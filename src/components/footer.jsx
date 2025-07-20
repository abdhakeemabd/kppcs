import React from 'react'
import Logo from "../assets/images/logo/logo.png";
import '../assets/style/css/footer.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";


function Footer() {
  return (
    <footer className='footer'>
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <a href="#" className='mb-3 d-flex align-items-center'>
                    <img className='logo' src={Logo} alt="Logo" loading='lazy' />
                   <div className='d-block mt-3'>
                   <div className='text-white text-uppercase'>Consulting</div>
                   <div className='text-white text-uppercase lp-2'>Group</div>
                   </div>
                </a>
                <p className='mb-1 text-m-white'>
                Driving business success through innovation, excellence, and customer-focused solutions.
                </p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className='menu'>
                <li className='link-items'>
                  <a className='link' href={"/"}>Home</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/about"}>About</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/services"}>Service</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/protfolio"}>Protfolio</a>
                </li>
                <li className='link-items'>
                  <a className='link' href={"/contact"}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
            <ul className='contact-right p-0 p-md-auto'>
              <li>
                 <div className="d-flex">
                 <div className=''>
                 <FaMapMarkerAlt />
                 </div>
                 <div className='ms-2'>
                 <div className='text-white'>Bare shell, Battarhalli, <br />  Bengalore, <br /> 560049
                 </div>
                 </div>
                 </div>
              </li>
              <li>
                <div className="d-flex mt-2">
                  <div>
                  <IoCall />
                  </div>
                  <div className='ms-2'>
                  <a className='d-block' href="tel:8606065001">+91 8606065001</a>
                  </div>
                {/* <a className='d-block' href="tel:+91 98460 07257">+91 6282 014 275</a> */}
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <div> 
                  <IoIosMail />
                  </div>
                  <div className='ms-2'> <a className='d-block' href="mailto:admin@kppcs.com">admin@kppcs.com</a></div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <div>
                  <TbWorld />
                  </div>
                  <div className='ms-2'>
                  <a className='d-block' href="https://kppcs.com/" target='_blank'>kppcs.com</a>
                  </div>
                </div>
              </li>
            </ul>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer
