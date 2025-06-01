import { FaDocker, FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io"
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoNodejs, IoLogoJavascript  } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";




export default function Skills(){

    const hardSkills  = [
        {
            language: "JavaScript",
            image: IoLogoJavascript,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            language: "TypeScript",
            image: SiTypescript,
            link: "https://www.typescriptlang.org/",
        },

        {
            language: "NodeJS",
            image: IoLogoNodejs,
            link: "https://nodejs.org/en"
        },

        {
            language: "ReactJS",
            image: FaReact,
            link: "https://react.dev/"
        },

        {
            language: "AngularJS",
            image: IoLogoAngular,
            link: "https://angular.dev/"
        },

        {
            language: "C#",
            image: TbBrandCSharp,
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        },

        {
            language: "Docker",
            image: FaDocker,
            link: "https://www.docker.com/",
        },

        {
            language: "NextJS",
            image: RiNextjsFill,
            link: "https://nextjs.org/",
        }


    ]

    return (
        <section id="skills" className="mb-30 pt-10">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">Skills</h2>
            <h4 className="text-xl px-10 md:px-20 font-light mt-5">Hard Skills</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-wrap">
            {hardSkills.map((skill, index) => (
                <section className="md:py-10 md:px-20 px-10 py-10" key={index}>
                    <Link href={skill.link}>
                        <skill.image aria-label={skill.language} className="text-3xl md:text-5xl"/>
                    </Link>
                </section>
            ))}
            </div>
        </section>
    )
}