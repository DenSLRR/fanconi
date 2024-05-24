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
                <li><a  className='navbar__links-item' href="#events">Концерты</a></li>
                <li><a  className='navbar__links-item' href="#maps">Где мы</a></li>
                <li><a className='navbar__links-item' href="tel:+373079808080">Позвонить</a></li>
                <li><a className='navbar__links-item' href="#gallery">Фото</a></li>
            </ul>
        </div>
        <div className="navbar__mobile">
            <a href="https://www.instagram.com/fanconi_riviera/"><FaSquareInstagram className='navbar__mobile-item'/></a>
            <a href="https://www.facebook.com/fanconi.riviera.summer.club/?locale=ru_RU"><FaFacebookSquare className='navbar__mobile-item'/></a>
            <a href="https://www.tiktok.com/@fanconi_riviera"><AiFillTikTok className='navbar__mobile-item'/></a>
            <a href="#maps"><FaMapLocationDot className='navbar__mobile-item'/></a>
            <a href="tel:+373079808080"><FaPhoneAlt className='navbar__mobile-item'/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar