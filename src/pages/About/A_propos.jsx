import React from "react"; 
import "../FirstPage/FirstPage.css";
import { useTranslation, Trans } from "react-i18next";

const A_propos = () => {
    const { t } = useTranslation();

    return (
        <div className="p-[10%] pt-28 pb-20">
            <div className="home-parent mb-20">
                <div className="home">{t('about_title')}</div>
                <div className="home1">{t('about_title')}</div>
                <div className="bg-[#EDE8FF] w-[50%] h-[10px] rounded-[2px]"></div>
            </div>

            <div className="text-center px-6 mb-20">
                {/* Utilisation de Trans pour gérer les balises dans le JSON */}
                <Trans i18nKey="about_intro.p1" components={{ 
                    0: <span className="font-bold" />, 
                    1: <span className="font-bold" />, 
                    2: <span className="font-bold" /> 
                }} />
                <p>
                    <Trans i18nKey="about_intro.p2" components={{
                        0: <span className="font-bold" />,
                        1: <span className="font-bold" />,
                        2: <span className="font-bold" />,
                        3: <span className="font-bold" />,
                        4: <span className="font-bold" />,
                        5: <span className="font-bold" />,
                        6: <span className="font-bold" />
                    }} />
                </p>
            </div>

            <div className="inline-block">
                <span className="text-[28px] font-semibold uppercase block">{t('about_education_title')}</span>
                <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
            </div>

            <div className="my-12 px-10">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {t('about_education', { returnObjects: true }).map((edu, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
                            <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                            <p className="text-gray-500">{edu.location}</p>
                            <p>{edu.description}</p>
                            <ul className="list-disc pl-6">
                                {edu.specializations.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="inline-block">
                <span className="text-[28px] font-semibold uppercase block">{t('about_experience_title')}</span>
                <div className="bg-[#EDE8FF] h-[10px] rounded-[2px] w-full"></div>
            </div>

            <div className="my-12 px-10">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {t('about_experience', { returnObjects: true }).map((exp, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{exp.period}</time>
                            <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                            <p className="text-gray-500">{exp.location}</p>
                            <p>{exp.description}</p>
                            {exp.details && (
                                <ul className="list-disc pl-6">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                            {exp.links && (
                                <ul className="list-disc pl-6">
                                    {exp.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {exp.link && (
                                <div className="flex mt-2">
                                    <a
                                        href={exp.link.url}
                                        className="bg-[#EDE8FF] px-4 py-2 text-sm rounded-[0.5rem] button_first hover:bg-[#d4ccff] transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {exp.link.label}
                                    </a>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default A_propos;
