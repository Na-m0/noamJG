import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import fr from "/images/fr.png";
import en from "/images/en.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setRotate(true);
    setTimeout(() => setRotate(false), 800);
  };

  const navItems = [
    { name: t('nav.home'), path: "/home" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.projects'), path: "/projects" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  // Import images (si elles sont dans /public/images)
  const flagImage = i18n.language === "fr" ? en : fr;
  const flagAlt = i18n.language === "fr" ? "English Flag" : "Drapeau Français";

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10">
        <Link to="/">
          <img className="w-20 ml-4" src="../images/logo.png" alt="logo" />
        </Link>

        {/* Bouton hamburger */}
        <div
          className={`md:hidden hamburger cursor-pointer ${rotate ? "rotate" : ""}`}
          onClick={handleToggleMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 text-white font-medium text-sm md:text-base">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleLanguageToggle}
            className="ml-4 bg-transparent border-none"
          >
            <img
              src={flagImage}
              alt={flagAlt}
              className="w-6 h-6 object-cover rounded-full border border-gray-300 hover:scale-110 transition-transform duration-200"
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col md:hidden items-center space-y-4 text-white font-medium text-base pb-4">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          <button
            onClick={handleLanguageToggle}
            className="mt-4 bg-transparent border-none"
          >
            <img
              src={flagImage}
              alt={flagAlt}
              className="w-8 h-8 object-cover rounded-full border border-gray-300 hover:scale-110 transition-transform duration-200"
            />
          </button>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
  