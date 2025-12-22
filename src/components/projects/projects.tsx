import Image from "next/image";
import Link from "next/link";


export default function Projects(){
    const projects = [
        {
            title: "Civis Conectados",
            description: "A collaboration platform between citizens and the police for sharing information about crimes.",
            link: "https://civis-conectados-i5zxympap-jose-vitor-s-projects-e0a86c12.vercel.app/",
            image: "/project-civis.png",
            Technologies: ["NextJS", "React", "JavaScript", "Firebase"],
            repository: "https://github.com/Jose-silvaa/Civis-Conectados",
        },
        {
            title: "Rehabit",
            description: "A tool to help people improve their habits, based on the habit loop concept (cue, routine, reward).",
            link: "https://frontend-rehabit.vercel.app/",
            image: "/project-rehabit.png",
            Technologies: ["NextJS", "React", "JavaScript", "Firebase"],
            repository: "https://github.com/Jose-silvaa/frontend-rehabit",
        },
        {
            title: "Biblioteca",
            description: "A Library Management System is a software application designed to manage and organize the daily operations of a library efficiently",
            image: "/project-biblioteca.png",
            link: "https://biblioteca-frontend-one.vercel.app/",
            Technologies: ["C#", ".NET", "Postgresql", "Angular"],
            repository: "https://gitlab.com/Jose02/backend",

        }
    ];

    return (
        <section id="projects" className="mb-30 pt-5">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {projects.map((project, index) => (
                <section className="md:py-10 md:px-20 px-10 py-10" key={index}>
                    <div className="text-justify">
                        <Link href={project.link} key={index}>
                            <Image src={project.image} alt="foto" width="700" height="100" className="rounded-md object-cover mb-10" />
                        </Link>
                        <h3 className="font-bold text-2xl mb-5">{project.title}</h3>
                        <span>{project.description}</span>
                        <br></br>
                        <h3 className="font-semibold mt-3 mb-3">Repository: <Link href={project.repository} key={index}> {project.repository}</Link></h3>
                        <p>Technologies : {project.Technologies.join(', ')}</p>
                    </div>
                </section>
            ))}

            </div>
        </section>
    );
}