import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./A_propos.css";
import { Link } from "react-router-dom";

const A_propos = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <div className="p-[12%] pt-12 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-[40px] mb-20">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <MdOutlineQuestionMark className="question-icon" />
              <span className="corner top-left" />
              <span className="corner top-right" />
              <span className="corner bottom-left" />
              <span className="corner bottom-right" />
            </div>
            <div className="flip-card-back">
              <img
                src="./images/JOLY-GIRODS_Noam_A2_photo.jpg"
                alt=""
                className="rounded-[1rem]"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[100%]">
          <h2 className="font-bold text-[1.5rem] mb-6 text-center">{t("about.title")}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-6">{p}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/about" className="bg-[#EDE8FF] px-12 py-2 rounded-[0.5rem] button_first">
          {t("about.buttonText")}
        </Link>
      </div>
    </div>
  );
};

export default A_propos;
