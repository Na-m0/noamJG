import React from "react";
import "./Competences.css";
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
import { Link } from "react-router-dom";

const competencesData = [
  {
    title: "Développement Frontend",
    items: [
      { name: "React", icon: react, to: "https://reactjs.org/" },
      { name: "Vue.js", icon: vue, to: "https://vuejs.org/" },
      { name: "HTML5", icon: html, to: "https://developer.mozilla.org/fr/docs/Web/HTML" },
      { name: "CSS3", icon: css, to: "https://developer.mozilla.org/fr/docs/Web/CSS" },
      { name: "JavaScript", icon: js, to: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
    ],
  },
  {
    title: "Développement Backend",
    items: [
      { name: "Node.js", icon: node, to: "https://nodejs.org/" },
      { name: "Prisma", icon: prisma, to: "https://www.prisma.io/" },
      { name: "MySQL", icon: mysql, to: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: postgres, to: "https://www.postgresql.org/" },
      { name: "MongoDB", icon: mongo, to: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Langages Polyvalents",
    items: [
      { name: "Python", icon: pypy, to: "https://www.python.org/" },
      { name: "Java", icon: java, to: "https://www.java.com/" },
      { name: "Swift", icon: swift, to: "https://developer.apple.com/swift/" },
      { name: "Kotlin", icon: kotlin, to: "https://kotlinlang.org/" },
      { name: "PHP", icon: php, to: "https://www.php.net/" },
    ],
  },
  {
    title: "Outils & autres",
    items: [
      { name: "GitHub", icon: github, to: "https://github.com/" },
      { name: "Trello", icon: trello, to: "https://trello.com/" },
      { name: "Figma", icon: figma, to: "https://figma.com/" },
      { name: "Docker", icon: docker, to: "https://www.docker.com/" },
      { name: "Postman", icon: postman, to: "https://www.postman.com/" },
      { name: "Spring boot", icon: springboot, to: "https://spring.io/projects/spring-boot" },
    ],
  },
];

const Competences = () => {
  return (
    <div className="p-[10%] pt-20 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {competencesData.map((table, i) => (
          <div key={i} className="table-skill p-6 border border-[5px] border-[#A46D26]">
            <h3 className="text-2xl font-bold text-white mb-4">{table.title}</h3>
            <div className="flex flex-wrap gap-4">
              {table.items.map((skill, j) => (
                <Link key={j} className="skill-icon" to={skill.to} target="_blank">
                  <div className="plate">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
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
