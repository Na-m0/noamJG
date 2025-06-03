import React from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();

  return (
    <div className="p-[10%] pt-28 pb-20">
      <div className="home-parent">
        <div className="home">Portfolio</div>
        <div className="home1">Portfolio</div>
        <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
      </div>

      <div className="text-center my-[60px]">{t('portfolio.texte')}</div>

      <div className="inline-block">
          <span className="text-[28px] font-semibold uppercase block">{t('portfolio.stage')}</span>
          <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
      </div>
      <div className="flex justify-center my-[60px]">
        <img
          src="/images/stage.png"
          alt="Stage"
          className="rounded-[6px] border-[5px] border-[#D9D9D9] mx-auto w-[60%] cursor-pointer"
          onClick={() => window.location.href = "/stage-asporta"}
        />
      </div>
      <div className="inline-block">
          <span className="text-[28px] font-semibold uppercase block">{t('portfolio.sae')}</span>
          <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
      </div>
      <div className="flex justify-center my-[60px]">
        <img
          src="/images/sae.png"
          alt="Sae"
          className="rounded-[6px] border-[5px] border-[#D9D9D9] mx-auto w-[60%] cursor-pointer"
          onClick={() => window.location.href = "/sae-yoleau"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
