import React from "react";
import "./Home.css";
import A_propos from "./A_propos/A_propos";
import Projets from "./Projets/Projets";
import Competences from "./Competences/Competences";
import bg_competences from "../../assets/fond_comp.png";

const Home = () => {
    return (
        <div>
            <div className="min-h-[100vh] flex items-center justify-center">
                <h1 className="text-4xl font-semibold">Bienvenue</h1>
            </div>

            {/* À propos */}
            <div className="home-parent">
                <div className="home">À propos</div>
                <div className="home1">À propos</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>
            <A_propos />

            {/* Compétences */}
            <div
                className="min-h-[100vh]"
                style={{
                    backgroundImage: `url(${bg_competences})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="home-parent">
                    <div className="home text-[#EDE8FF]">Compétences</div>
                    <div className="home1 text-[#EDE8FF]">Compétences</div>
                    <div className="bg-[#FFF] w-[50%] h-[10px] rounded-[2px]"></div>
                </div>
                <Competences />
            </div>

            {/* Projets */}
            <div className="home-parent">
                <div className="home">Projets</div>
                <div className="home1">Projets</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>
            <Projets />
        </div>
    );
};

export default Home;
