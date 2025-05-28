import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/data.json";
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const DetailProjet = () => {
    const { id } = useParams();
    const project = data.find((proj) => proj.id === id);

    if (!project) {
        return <div className="p-10">Projet non trouvé</div>;
    }

    return (
        <div className="p-[10%] pt-28 pb-20">
            <div className="home-parent mb-10">
                <div className="home1 text-center">{project.title}</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                {/* Image à gauche */}
                <div className="w-full md:w-2/3">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded"
                    />
                    <div className="flex flex-col md:flex-row gap-10 mt-8 justify-between">
                        <div className="flex gap-2 flex-wrap mb-6">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-[#F7D460] text-xs px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 mb-4">{project.date} — {project.type}</p>
                    </div>
                </div>

                {/* Description à droite */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
                    <div>
                        <p className="mb-6">{project.description}</p>
                    </div>
                    {/* Boutons de liens */}
                    <div className="flex gap-4 flex-wrap mt-4">
                        {project.link && project.link !== "#" && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#E2FFEB] px-4 py-2 rounded hover:bg-[#D7FFE3] transition text-sm flex items-center gap-2"
                            >
                                <IoGlobeOutline className="text-[20px]"/> Accéder au site web
                            </a>
                        )}

                        {project.github && project.github !== "#" && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#EDE8FF] px-4 py-2 rounded hover:bg-[#E6DFFF] transition text-sm flex items-center gap-2"
                            >
                                <FaGithub className="text-[20px]"/> Accéder au github
                            </a>
                        )}
                    </div>
                </div>
            </div>




            {project.context?.length > 0 && (
              <div className="mt-12 space-y-8">
                <div className="inline-block mb-12">
                  <span className="text-[28px] font-semibold uppercase block">Contexte</span>
                  <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
                </div>
                {project.context.map((ctx, index) => (
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-10 items-center`}>
                    <div className={`w-full ${ctx.image ? 'md:w-1/2' : ''}`}>
                        <p className="text-left mt-6">{ctx.text}</p>
                    </div>
                    {ctx.image && (
                      <img src={ctx.image} alt={ctx.title} className="w-full md:w-2/4 h-full rounded" />
                    )}
                  </div>
                ))}
              </div>
            )}


            {project.competence_acquise?.length > 0 && (
              <div className="mt-20 space-y-8">
                <div className="inline-block mb-12">
                  <span className="text-[28px] font-semibold uppercase block">Compétences acquises</span>
                  <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
                </div>
                {project.competence_acquise.map((ctx, index) => (
                  <div key={index}>
                      <div className="text-[24px] font-semibold ml-6">{ctx.title}</div>
                      <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-10 items-center`}>
                          <div className={`w-full ${ctx.image ? 'md:w-1/2' : ''}`}>
                              <p className="text-left mt-6">{ctx.description}</p>
                          </div>
                          {ctx.image && (
                              <img src={ctx.image} alt={ctx.title} className="w-full md:w-2/4 h-full rounded" />
                          )}
                      </div>
                  </div>
                ))}
              </div>
            )}



{project.collaborateurs?.length > 0 && (
  <div className="mt-20">
    <div className="inline-block mb-12">
      <span className="text-[28px] font-semibold uppercase block">Collaborateurs</span>
      <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
    </div>                
    <div className="flex flex-wrap gap-4 text-center">
      {project.collaborateurs.map((collab, index) => (
        collab.github ? (
          <a
            key={index}
            href={collab.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F7D460] px-4 py-2 rounded hover:bg-[#FFE388] transition flex items-center gap-2"
          >
            <FaGithub className="text-[20px]" />
            {collab.name}
          </a>
        ) : (
          <span key={index} className="px-4 py-2">{collab.name}</span>
        )
      ))}
    </div>
  </div>
)}



            <div className="mt-20">
                <Link
                    to="/projects"
                    className="text-[#7b61ff] hover:underline"
                >
                    ← Retour aux projets
                </Link>
            </div>
        </div>
    );
};

export default DetailProjet;
