import React from "react";
import { Link } from "react-router-dom";
import { GrDocumentUser } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import fondFooter from "../../assets/fond_footer.png";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-white pt-12 pb-6 px-6 md:px-20" style={{ backgroundImage: `url(${fondFooter})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex gap-4 text-[#444444] flex justify-center mb-8">
        <a href="https://www.linkedin.com/in/noam-joly-girods-3a27b62a4/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-[30px] hover:text-gray-400 transition" /></a>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-24 text-[17px] footer-responsive">
        <div>
          <h3 className="text-[20px] text-[#444444] font-bold mb-2">{t("footer.navigation")}</h3>
          <ul className="space-y-1">
            <li><Link to="/home" className="hover:text-gray-400 transition">{t("footer.home")}</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition">{t("footer.about")}</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400 transition">{t("footer.projects")}</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">{t("footer.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] text-[#444444] font-bold mb-2">{t("footer.contact")}</h3>
          <ul className="space-y-1">
            <li>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <GrDocumentUser className="inline mr-2" />{t("footer.cv")}
              </a>
            </li>
            <li>
              <a href="mailto:noamjoly2812@gmail.com" className="hover:text-gray-400 transition">
                <IoMdMail className="inline mr-2" />noamjoly2812@gmail.com
              </a>
            </li>
            <li className="text-[#444444]">
              <FaMapMarkerAlt className="inline mr-2" />Montbéliard, France
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 Noam Joly-Girods. {t("footer.all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
