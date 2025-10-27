import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projets = () => {
    const { t } = useTranslation();
    const [selectedFilter, setSelectedFilter] = useState("Tous");

    const projects = t('projects', { returnObjects: true });
    const filterKeys = Object.keys(t('project_filter', { returnObjects: true }));
    const filters = filterKeys.map(key => ({
      key,
      label: t(`project_filter.${key}`)
    }));
    
    const getYearForSort = (dateStr) => {
        if (dateStr.includes("-")) {
            const parts = dateStr.split("-");
            return parseInt(parts[1], 10);
        }
        return parseInt(dateStr, 10);
    };

    const filteredProjects = (selectedFilter === "Tous"
        ? projects
        : projects.filter(project => project.type === selectedFilter)
    ).sort((a, b) => getYearForSort(b.date) - getYearForSort(a.date));

    return (
        <div className="p-[10%] pt-28 pb-20">
            <div className="home-parent mb-20">
                <div className="home">{t('project_title')}</div>
                <div className="home1">{t('project_title')}</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>
            <div className="flex gap-2 flex-wrap mb-10">
            {filters.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => setSelectedFilter(key)}
                    className={`px-4 py-1 rounded-[0.5rem] transition ${
                        selectedFilter === key
                            ? "bg-[#EDE8FF]"
                            : "bg-transparent border border-[#D9D9D9] hover:bg-[#d4ccff]"
                    }`}
                >
                    {label}
                </button>
            ))}

            </div>

            <div className="flex flex-wrap justify-center gap-y-10">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[48%] max-w-[570px] h-[400px] mx-auto relative flex flex-col"
                    >
                        <div className="relative z-10">
                            <Link to={`/projects/${project.id}`} className="relative z-10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-[0.5rem] w-full h-full max-h-[230px] cursor-pointer hover:opacity-90 transition"
                                />
                            </Link>
                        </div>

                        <div className="bg-[#FCFBFF] rounded-[0.5rem] p-4 -mt-6 z-20 relative flex flex-col justify-between grow">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-bold">{project.title}</h3>
                                    <span className="text-xs text-gray-400">{project.date}</span>
                                </div>
                                <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                                <div className="flex gap-1 flex-wrap">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-[#F7D460] text-xs px-3 py-1 rounded-[0.8rem]"
                                        >
                                            {tech}
                                        </span>
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
        </div>
    );
};

export default Projets;
