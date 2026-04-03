"use client";

import { FaDocker, FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiDotnet } from "react-icons/si";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { DiPostgresql } from "react-icons/di";

export default function Skills() {
  const { t } = useLanguage();
    const hardSkills  = [
        {
            language: "JavaScript",
            image: IoLogoJavascript,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            color: "#F7DF1E"
        },
        {
            language: "TypeScript",
            image: SiTypescript,
            link: "https://www.typescriptlang.org/",
            color: "#3178C6"
        },

        {
            language: ".NET",
            image: SiDotnet,
            link: "https://dotnet.microsoft.com/",
            color: "#512BD4"
        },

        {
            language: "ReactJS",
            image: FaReact,
            link: "https://react.dev/",
            color: "#61DAFB"
        },

        {
            language: "AngularJS",
            image: IoLogoAngular,
            link: "https://angular.dev/",
            color: "#DD0031"
        },

        {
            language: "C#",
            image: TbBrandCSharp,
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            color: "#239120"
        },

        {
            language: "Docker",
            image: FaDocker,
            link: "https://www.docker.com/",
            color: "#2496ED"
        },

        {
            language: "PostgreSQL",
            image: DiPostgresql,
            link: "https://www.postgresql.org/",
            color: "#000000"
        }


    ]

    return (
        <section id="skills" className="mb-30 pt-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 section-title">
                  {t.skills.title}
                </h2>
                <h4 className="text-xl md:text-2xl font-light mt-5 mb-12 text-gray-300">
                  {t.skills.hardSkills}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {hardSkills.map((skill, index) => (
                    <Link 
                        href={skill.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="group"
                    >
                        <div className="card-hover bg-[#101630] border border-[#dd5245]/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 custom-shadow h-full">
                            <skill.image 
                                aria-label={skill.language} 
                                className="text-4xl md:text-6xl transition-transform duration-300 group-hover:scale-110"
                                style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                {skill.language}
                            </span>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    )
}