"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/language-context";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.supportSystemApi.title,
      description: t.projects.supportSystemApi.description,
      image: "/jira-image.jpg",
      link: "https://github.com/Jose-silvaa/Support-System-API",
      Technologies: ["C#", ".NET 9", "Entity Framework Core", "SQL Server", "JWT"],
      repository: "https://github.com/Jose-silvaa/Support-System-API",
      liveDemo: "https://support-system-frontend-delta.vercel.app",
    },
  ];

    return (
        <section id="projects" className="mb-30 pt-20 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 section-title">
                  {t.projects.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="card-hover bg-[#101630] rounded-xl overflow-hidden border border-[#dd5245]/20 custom-shadow"
                    >
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block relative group">
                            <div className="relative overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    width="700" 
                                    height="400" 
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                        </Link>
                        <div className="p-6">
                            <h3 className="font-bold text-2xl mb-3 text-white">{project.title}</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.Technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-3 py-1 bg-[#0a0e27] rounded-full text-sm text-gray-300 border border-[#dd5245]/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4 mt-6">
                                <Link
                                    href={project.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#dd5245] hover:text-[#c9453a] transition-colors"
                                >
                                    <FaGithub size={20} />
                                    <span className="text-sm font-medium">{t.projects.repository}</span>
                                </Link>
                                <Link
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#dd5245] hover:text-[#c9453a] transition-colors"
                                >
                                    <FaExternalLinkAlt size={16} />
                                    <span className="text-sm font-medium">{t.projects.liveDemo}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}