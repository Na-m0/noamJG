import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projets = () => {
    const { t } = useTranslation();

    const projects = t('projects', { returnObjects: true });

    const getLatestYear = (dateStr) => {
        if (!dateStr || typeof dateStr !== 'string') return 0;
        const years = dateStr.match(/\d{4}/g);
        if (!years) return 0;
        return Math.max(...years.map(Number));
    };
    

    const sortedProjects = projects.sort((a, b) => getLatestYear(b.date) - getLatestYear(a.date));

    return (
        <div className="p-[10%] pt-12 pb-20">
            <div className="flex flex-wrap">
            {sortedProjects.slice(0, 2).map((project, index) => (
                <div key={index} className="w-full md:w-[48%] max-w-[570px] h-[400px] mx-auto relative mb-20 flex flex-col">
                    <div className="relative z-10">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-[0.5rem] w-full h-full max-h-[230px]"
                        />
                    </div>
                            
                    <div className="bg-[#FCFBFF] rounded-[0.5rem] p-6 -mt-6 z-20 relative flex flex-col justify-between grow">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <span className="text-xs text-gray-400">{project.date}</span>
                            </div>
                            <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                        </div>
                            
                        <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                            <div className="flex gap-2 flex-wrap">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-[#F7D460] text-xs px-3 py-1 rounded-[0.8rem]">{tech}</span>
                                ))}
                            </div>
                            <Link
                                to={`/projects/${project.id}`}
                                className="bg-[#EDE8FF] px-4 py-2 text-sm rounded-[0.5rem] button_first hover:bg-[#d4ccff] transition"
                            >
                                {t('voir_plus')} →
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className="flex justify-center">
                <Link to="/projects" className="bg-[#EDE8FF] px-12 py-2 rounded-[0.5rem] button_first">{t('voir_mes_projets')}</Link>
            </div>
        </div>
    );
};

export default Projets;
