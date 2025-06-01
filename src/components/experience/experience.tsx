
import Link from 'next/link'

export default function Experience(){

    const experiences = [
        {
            company: "CASEEJ",
            function: "Software Developer",
            link: "https://www.linkedin.com/company/case-empresa-j%C3%BAnior/",
            start: "2023",
            end: "2025"
        },
        {
            company: "Sapiensia Tecnologia",
            function: "Quality Assurance Tester",
            link: "https://www.linkedin.com/company/sapiensia-tecnologia/",
            start: "2024",
            end: "Present"
        },
    ];

    return (
        <section id="experience" className="mb-30 pt-5">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">My Experiences</h2>
            <div className="md:py-10 md:px-20 px-10 py-10">
                {experiences.map((experience, index) => (
                    <Link key={index} href={experience.link}>
                        <section className="flex flex-col items-start sm:flex-row flex-wrap sm:justify-between sm:items-center py-5 px-5 rounded-md border-1 mb-10 hover:bg-[#dd5245] cursor-pointer">
                            <div>
                                <p>{`${experience.start} - ${experience.end}`}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-left sm:text-right">{experience.company}</span>
                                <span className="text-left sm:text-right">{experience.function}</span>
                            </div>
                        </section>
                    </Link>
                ))}
            </div>
        </section>
    )
}