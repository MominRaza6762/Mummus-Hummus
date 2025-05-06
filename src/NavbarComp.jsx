import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/navbarComp.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLang } from "./context/LangContext";

const NavbarComp = ({ isOpen, setIsOpen }) => {
    const { language, setLanguage } = useLang();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="navbar customNav">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-wave"></div>

      <div className={`menuListz ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          {language=== "en" ? "Home" : "HEM"}
        </Link>
        <Link to="/#section1" onClick={() => setIsOpen(false)}>
          {language=== "en" ? "About" : "OM OSS"}
        </Link>
        <Link to="/#section2" onClick={() => setIsOpen(false)}>
          {language=== "en" ? "Menu" : "MENY"}
        </Link>
        <Link to="/#section3" onClick={() => setIsOpen(false)}>
          {language=== "en" ?" Gallery" : "GALLERI"}
        </Link>
        <Link to="/#section4" onClick={() => setIsOpen(false)}>
          {language=== "en" ?"Contact" : "KONTAKT"}
        </Link>
        <button className="cateringmenubtn">
          <Link to="/catering-menu">Catering Menu</Link>
        </button>

        <div className="language-dropdown">
          <div className="language-selected">
            {language === "en" ? (
              <div>
                <img src="/ukimg.png" alt="langimg" />
                <p>English</p>
                <MdKeyboardArrowDown />
              </div>
            ) : (
              <div>
                <img src="/swedish_flag.png" alt="langimg" />
                <p>Svenska</p>
                <MdKeyboardArrowDown />
              </div>
            )}
          </div>
          <div className="language-options">
            <div onClick={() => setLanguage("sv")}>Svenska</div>
            <div onClick={() => setLanguage("en")}>English</div>
          </div>
        </div>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavbarComp;
