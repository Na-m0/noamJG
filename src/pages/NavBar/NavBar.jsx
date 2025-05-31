import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const location = useLocation();

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
    { name: "Accueil", path: "/home" },
    { name: "À propos", path: "/about" },
    { name: "Projets", path: "/projects" },
    { name: "Portfolio", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

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
        <ul className="hidden md:flex space-x-6 text-white font-medium text-sm md:text-base">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
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
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
