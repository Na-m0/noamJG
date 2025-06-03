import React from "react";
import { useTranslation } from "react-i18next";

const SaeS6 = () => {
    const { t } = useTranslation();

  return (
    <div className="p-[10%] pt-28 pb-20">
      <div className="home-parent mb-10 mt-12">
        <div className="home1">{t('saes6.title')}</div>
        <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-2/3">
                    <img
                        src="/images/sae.png"
                        alt="Sae"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
                <div className="w-full md:w-2/4 flex items-center text-center">
                    <div className="">{t('saes6.description')}</div>
                </div>
            </div>
    </div>
  );
};

export default SaeS6;