import React from "react";
import "./footer.css";
import logo from "../assets/fcfinal.png";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__wrapper">
            <img src={logo} alt="logo" />
            <div className="footer__home">
              <ul>
                <li>
                  <a className="footer__links-item" href="#">
                    Главная
                  </a>
                </li>
                <li>
                  <a className="footer__links-item" href="#">
                    Фото
                  </a>
                </li>
                <li>
                  <a className="footer__links-item" href="#">
                    План
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <a className="footer__contacts-number" href="#">
              +373 79-808-080
            </a>
            <div className="footer__home-btn">
              <ul>
                <li>
                  <a href="#">
                    <FaPhoneAlt className="footer__social-item" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <a href="#">
                <FaFacebookSquare className="footer__social-item" />
              </a>
              <a href="#">
                <AiFillTikTok className="footer__social-item" />
              </a>
              <a href="#">
                <FaSquareInstagram className="footer__social-item" />
              </a>
            </div>
          </div>
          <div className="footer__home_mobile">
            <a href="#">
              <IoHomeOutline className="footer__social-item" />
            </a>
          </div>
        </div>

        <div className="footer__address">
          <div className="footer__address-street">
            <a href="#">НАШ АДРЕС: УЛ ГИДИГИЧ 5, (НИАГАРА) </a>
          </div>
          <div className="footer__adress-timework">
            ЧАСЫ РАБОТЫ С 10:00 ДО 00:00
          </div>
        </div>
        <div className="footer__maps">
          <iframe
            className="footer__maps-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.2252214717698!2d28.78518937615748!3d47.0510136335448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbd7f81c5b95b9%3A0x4e63f864f132327a!2sFanconi%20Riviera%20Summer%20Club!5e0!3m2!1sru!2s!4v1716167775424!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
