import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";

const SaeS6 = () => {
    const { t } = useTranslation();
    const saes6 = t("saes6", { returnObjects: true });
    const technologies = ['Vue.js', 'Node.js', 'PostgreSQL', 'ServerTCP', 'Arduino', 'IA'];

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
              <div className="flex flex-col md:flex-row gap-10 mt-8 justify-between">
                    <div className="flex gap-2 flex-wrap mb-6">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-[#F7D460] text-xs px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-400 mb-4">2024/2025</p>
                </div>
          </div>
          <div className="w-full md:w-2/4 flex items-center text-center">
              <div className="">{t('saes6.description')}</div>
          </div>
      </div>

       {saes6.context?.length > 0 && (
         <div className="mt-12 space-y-8">
           <div className="inline-block mb-12">
             <span className="text-[28px] font-semibold uppercase block">{t('context')}</span>
             <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
           </div>
           {saes6.context.map((ctx, index) => (
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


      {saes6.competence_acquise?.length > 0 && (
        <div className="mt-20 space-y-8">
          <div className="inline-block mb-12">
            <span className="text-[28px] font-semibold uppercase block">
              {t("competence_acquise")}
            </span>
            <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
          </div>
          <div className="text-[24px] font-semibold mb-4 text-center">
            {saes6.title_comp1}
          </div>
          <Carousel competences={saes6.competence_acquise} />
          <div className="bg-[#D9D9D9] h-[1px] rounded-[2px] w-full"></div>
          <div className="text-[24px] font-semibold mb-4 text-center">
            {saes6.title_comp2}
          </div>
          <Carousel competences={saes6.competence_acquise2} />
        </div>
      )}



       {saes6.ce_que_j_en_tire?.length > 0 && (
         <div className="mt-20 space-y-8">
           <div className="inline-block mb-12">
             <span className="text-[28px] font-semibold uppercase block">{t('ce_que_j_en_tire')}</span>
             <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
           </div>
           {saes6.ce_que_j_en_tire.map((ctx, index) => (
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


       {saes6.collaborateurs?.length > 0 && (
         <div className="mt-20">
           <div className="inline-block mb-12">
             <span className="text-[28px] font-semibold uppercase block">{t('collaborateurs_title')}</span>
             <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
           </div>                
           <div className="flex flex-wrap gap-4 text-center">
             {saes6.collaborateurs.map((collab, index) => (
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
               ← {t('Retour')}
           </Link>
       </div>
    </div>
  );
};

export default SaeS6;