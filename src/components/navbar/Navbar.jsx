import React, {useState} from 'react'
import './navbar.css'
import logo from '../assets/fcfinal.png'
import { FaSquareInstagram, FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaPhoneAlt  } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";




const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
          <p>Riviera</p>
        </div>
        <div className="navbar__links">
            <ul>
                <li><a  className='navbar__links-item' href="#">Концерты</a></li>
                <li><a  className='navbar__links-item' href="#">Где мы</a></li>
                <li><a className='navbar__links-item' href="#">Позвонить</a></li>
                <li><a className='navbar__links-item' href="#">Фото</a></li>
            </ul>
        </div>
        <div className="navbar__mobile">
            <a href="#"><FaSquareInstagram className='navbar__mobile-item'/></a>
            <a href="#"><FaFacebookSquare className='navbar__mobile-item'/></a>
            <a href="#"><AiFillTikTok className='navbar__mobile-item'/></a>
            <a href="#"><FaMapLocationDot className='navbar__mobile-item'/></a>
            <a href="#"><FaPhoneAlt className='navbar__mobile-item'/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar