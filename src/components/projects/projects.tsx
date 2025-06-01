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
        },
        {
            title: "Rehabit",
            description: "A tool to help people improve their habits, based on the habit loop concept (cue, routine, reward).",
            link: "https://frontend-rehabit.vercel.app/",
            image: "/project-rehabit.png",
            Technologies: ["NextJS", "React", "JavaScript", "Firebase"],
        },
    ];

    return (
        <section id="projects" className="mb-30 pt-5">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row md:justify-between items-center">
            {projects.map((project, index) => (
                <Link href={project.link} key={index}>
                    <section className="md:py-10 md:px-20 px-10 py-10">
                        <div className="text-justify">
                            <Image src={project.image} alt="foto" width="700" height="100" className="rounded-md object-cover mb-10" />
                            <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                            <span>{project.description}</span><br></br>
                        </div>
                    </section>
                </Link>
            ))}

            </div>
        </section>
    );
}