import React from "react";
import { useTranslation } from "react-i18next";
import { IoGlobeOutline } from "react-icons/io5";

const StageAsporta = () => {
    const { t } = useTranslation();
    const technologies = ['React', 'Node.js', 'PostgreSQL'];

  return (
    <div className="p-[10%] pt-28 pb-20">
        <div className="home-parent mb-10 mt-12">
            <div className="home1 text-center">{t('stage.title')}</div>
            <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
            {/* Image à gauche */}
            <div className="w-full md:w-2/3">
                <img
                    src="/images/stage.png"
                    alt={t('stage.title')}
                    className="w-full h-auto object-cover rounded"
                />
                <div className="flex flex-col md:flex-row gap-10 mt-8 justify-between">
                    <div className="flex gap-2 flex-wrap mb-6">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-[#F7D460] text-xs px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-400 mb-4">03 - 04/2025</p>
                </div>
            </div>
         {/* Description à droite */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
                <div>
                    <p className="mb-6">{t('stage.description')}</p>
                </div>
                {/* Boutons de liens */}
                <div className="flex gap-4 flex-wrap mt-4">
                        <a
                            href={"https://asporta.org/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#E2FFEB] px-4 py-2 rounded hover:bg-[#D7FFE3] transition text-sm flex items-center gap-2"
                        >
                            <IoGlobeOutline className="text-[20px]"/> Accéder au site web
                        </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StageAsporta;