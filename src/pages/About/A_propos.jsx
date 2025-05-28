import React from "react";
import "../FirstPage/FirstPage.css"

const A_propos = () => {
    return (
        <div className="p-[10%] pt-28 pb-20">
            <div className="home-parent mb-20">
                <div className="home">À propos</div>
                <div className="home1">À propos</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>

            <div className="text-center px-6 mb-20">
                <p><span className="font-bold">Étudiant en troisième année de BUT informatique</span>, je m’investis dans le développement de <span className="font-bold">d’applications web</span> et <span className="font-bold">mobiles</span> avec l’envie de créer des solutions concrètes et utiles.</p>
                <p>Mon parcours m’a conduit à explorer différents aspects du <span className="font-bold">développement</span>, de la <span className="font-bold">programmation</span> à la <span className="font-bold">gestion de bases de données</span>, en passant par le <span className="font-bold">travail en équipe</span> sur des projets collaboratifs. 
                    Ces expériences m’ont permis de développer un <span className="font-bold">sens de l’organisation</span>, de la <span className="font-bold">rigueur</span> et une <span className="font-bold">capacité à m’adapter</span> aux défis rencontrés. 
                    J’aime particulièrement apprendre de nouvelles technologies et les mettre en œuvre pour résoudre des problèmes réels. 
                    Que ce soit en autonomie ou au sein d’une équipe, je cherche toujours à évoluer tout en apportant une contribution utile. 
                    Mon objectif est de continuer à progresser dans un domaine où chaque projet peut avoir un véritable impact.</p>
            </div>

            <div className="inline-block">
                <span className="text-[28px] font-semibold uppercase block">Mes formations</span>
                <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
            </div>

            <div className="my-12 px-10">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">Septembre 2022 - Juin 2025</time>
                        <h3 className="text-lg font-semibold text-gray-900">BUT Informatique — IUT Nord Franche-Comté</h3>
                        <p className="text-gray-500">Belfort</p>
                        <p>Formation en développement informatique avec spécialisation en :</p>
                        <ul className="list-disc pl-6">
                            <li>Développement web</li>
                            <li>Base de données</li>
                            <li>Programmation orientée objet</li>
                            <li>Architecture logicielle</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div className="inline-block">
                <span className="text-[28px] font-semibold uppercase block">Mes expériences</span>
                <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
            </div>

            <div className="my-12 px-10">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">Mars - Mai 2025</time>
                        <h3 className="text-lg font-semibold text-gray-900">Stage en développement web full stack — Association ASPORTA</h3>
                        <p className="text-gray-500">Dole</p>
                        <p>Développement de deux site web full stack</p>
                        <ul className="list-disc pl-6">
                            <li><a href="https://asporta.org/">Site web de l'association ASPORTA</a></li>
                            <li><a href="https://tsatgd.fr/">Site web du club de tennis du TSATGD</a></li>
                        </ul>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">Avril - Juin 2024</time>
                        <h3 className="text-lg font-semibold text-gray-900">Stage en développement application web — Mairie de Montbéliard</h3>
                        <p className="text-gray-500">Montbéliard</p>
                        <p className="mb-2">Développement d'une application web de gestion de demande informatique pour la mairie de Montbéliard</p>
                        <div className="flex">
                            <a
                                href="https://noamjg-portfolio.vercel.app/"
                                className="bg-[#EDE8FF] px-4 py-2 text-sm rounded-[0.5rem] button_first hover:bg-[#d4ccff] transition"
                            >
                                Voir plus →
                            </a>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default A_propos;