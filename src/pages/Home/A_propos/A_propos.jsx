import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import "./A_propos.css";

const A_propos = () => {
    return (
        <div className="p-[12%] pt-20 pb-20">
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
                            <img src="./images/JOLY-GIRODS_Noam_A2_photo.jpg" alt="" className="rounded-[1rem]" />
                        </div>
                    </div>
                </div>

                <div className="max-w-[100%]">
                    <h2 className="font-bold text-[1.5rem] mb-6 text-center">Qui est ce Noam Joly-Girods ?</h2>
                    <p className="mb-6">Noam est encore un petit étudiant en informatique, il est capable de grandes chose avec sa capacité d’adaptation hors norme et son esprit d’équipe extrêmement complet.</p>
                    <p className="mb-6">Il sait lorsqu’il faut travailler et aussi quand rigoler.</p>
                    <p className="mb-6">Il possède un assez bon niveau dans le développement informatique et souhaite sincèrement réaliser les applications les plus belles et fonctionnel qui soit.</p>
                    <p>C’est tout ces points qui le rendent si remarquable ahah ...</p>
                </div>
            </div>
            <div className="flex justify-end">
                <a href="/about" className="bg-[#EDE8FF] px-12 py-2 rounded-[0.5rem] button_first">En savoir plus</a>
            </div>
        </div>
    );
};

export default A_propos;
