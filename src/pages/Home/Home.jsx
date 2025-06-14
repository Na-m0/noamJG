import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';

import "./Home.css";
import A_propos from "./A_propos/A_propos";
import Projets from "./Projets/Projets";
import Competences from "./Competences/Competences";
import bg_competences from "../../assets/fond_comp.png";
import AnimatedBackground from "./AnimatedBackground";

const Home = () => {
  const { t } = useTranslation();
  const aProposRef = useRef(null);

  const scrollToAPropos = () => {
    aProposRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Section Bienvenue */}
      <div className="relative h-screen overflow-hidden flex items-center justify-center text-[#444444]">
        <AnimatedBackground />

        <div className="z-10 text-center px-4 mt-20">
          <h1 className="text-5xl md:text-7xl font-bold">{t('welcome')}</h1>
          <p className="mt-4 text-lg md:text-2xl opacity-80">
            {t('discover')}
          </p>
          <div
            className="mt-20 animate-bounce text-3xl opacity-50 cursor-pointer"
            onClick={scrollToAPropos}
          >
            ↓
          </div>
        </div>
      </div>

      {/* À propos */}
      <div ref={aProposRef}>
        <div className="home-parent py-12">
          <div className="home">{t('about_title')}</div>
          <div className="home1">{t('about_title')}</div>
          <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
        </div>
        <A_propos />
      </div>

      {/* Compétences */}
      <div
        className="min-h-[100vh]"
        style={{
          backgroundImage: `url(${bg_competences})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="home-parent py-12">
          <div className="home text-[#EDE8FF]">{t('competence_title')}</div>
          <div className="home1 text-[#EDE8FF]">{t('competence_title')}</div>
          <div className="bg-[#FFF] w-[50%] h-[10px] rounded-[2px]"></div>
        </div>
        <Competences />
      </div>

      {/* Projets */}
      <div className="home-parent py-12">
        <div className="home">{t('project_title')}</div>
        <div className="home1">{t('project_title')}</div>
        <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
      </div>
      <Projets />
    </div>
  );
};

export default Home;
