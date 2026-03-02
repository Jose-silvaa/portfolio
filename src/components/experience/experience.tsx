
"use client";

import Link from "next/link";
import { FaCalendarAlt, FaBuilding, FaBriefcase } from "react-icons/fa";
import { useLanguage } from "@/contexts/language-context";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "CASEEJ",
      functionKey: "softwareDeveloper" as const,
      link: "https://www.linkedin.com/company/case-empresa-j%C3%BAnior/",
      start: "2023",
      end: "2025",
    },
    {
      company: "Sapiensia Tecnologia",
      functionKey: "qaTester" as const,
      link: "https://www.linkedin.com/company/sapiensia-tecnologia/",
      start: "2024",
      endKey: "present" as const,
    },
  ];

    return (
        <section id="experience" className="mb-30 pt-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 section-title">
                  {t.experience.title}
                </h2>
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <Link 
                            key={index} 
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="card-hover bg-[#101630] border border-[#dd5245]/20 rounded-xl p-6 custom-shadow group">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#dd5245] to-[#2241d7] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FaBuilding className="text-white" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#dd5245] transition-colors">
                                                {experience.company}
                                            </h3>
                                            <p className="text-gray-300 flex items-center gap-2">
                                                <FaBriefcase size={14} />
                                                {t.experience[experience.functionKey]}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#dd5245] font-medium">
                                        <FaCalendarAlt size={16} />
                                        <span>
                                          {experience.start} -{" "}
                                          {"endKey" in experience
                                            ? t.experience.present
                                            : experience.end}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}