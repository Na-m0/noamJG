import React from "react";
import "./Competences.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import node from "../../../assets/icons/node.png"
import react from "../../../assets/icons/react.png"
import vue from "../../../assets/icons/vue.png"
import html from "../../../assets/icons/html.png"
import css from "../../../assets/icons/css.png"
import js from "../../../assets/icons/javascript.png"
import pypy from "../../../assets/icons/pypy.png"
import prisma from "../../../assets/icons/prisma.png"
import mysql from "../../../assets/icons/mysql.png"
import mongo from "../../../assets/icons/mongo.png"
import postgres from "../../../assets/icons/postgres.png"
import java from "../../../assets/icons/java.png"
import kotlin from "../../../assets/icons/kotlin.png"
import php from "../../../assets/icons/php.png"
import swift from "../../../assets/icons/swift.png"
import github from "../../../assets/icons/github.png"
import trello from "../../../assets/icons/trello.png"
import figma from "../../../assets/icons/figma.png"
import docker from "../../../assets/icons/docker.png"
import postman from "../../../assets/icons/postman.png"
import springboot from "../../../assets/icons/springboot.png"

const Competences = () => {
  const icons = {
    React: react,
    "Vue.js": vue,
    HTML5: html,
    CSS3: css,
    JavaScript: js,
    "Node.js": node,
    Prisma: prisma,
    MySQL: mysql,
    PostgreSQL: postgres,
    MongoDB: mongo,
    Python: pypy,
    Java: java,
    Kotlin: kotlin,
    PHP: php,
    Swift: swift,
    GitHub: github,
    Trello: trello,
    Figma: figma,
    Docker: docker,
    Postman: postman,
    "Spring boot": springboot,
  };
  
  const { t } = useTranslation();

  const competencesData = t('competences', { returnObjects: true });

  return (
    <div className="p-[10%] pb-20 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {competencesData.map((table, i) => (
          <div key={i} className="table-skill p-6 border border-[5px] border-[#A46D26]">
            <h3 className="text-2xl font-bold text-white mb-4">{table.title}</h3>
            <div className="flex flex-wrap gap-4">
              {table.items.map((skill, j) => (
                <Link key={j} className="skill-icon" to={skill.to} target="_blank" rel="noreferrer">
                  <div className="plate">
                    <img src={icons[skill.name]} alt={skill.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="tooltip">{skill.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
