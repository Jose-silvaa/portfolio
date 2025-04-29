

export default function HomeSectionProjects(){
    const projects = [
        {
            title: "Memory App",
            description: "An app to record and share personal memories with photos, videos, and emotions.",
            link: "https://memoryapp.example.com",
        },
        {
            title: "SEO Analytics SaaS",
            description: "A scalable platform to track and optimize website SEO performance.",
            link: "https://seoanalytics.example.com",
        },
        {
            title: "TypeLink Clone",
            description: "A simple, fast link-in-bio tool inspired by type.link.",
            link: "https://typelinkclone.example.com",
        },
    ];

    return (
        <section className="px-15 py-10" id="projects">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-medium mb-4 text-left">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Some of the projects I have been working on recently. Feel free to check them out!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-2xl shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-gray-700">{project.title}</h3>
                            <p className="text-gray-600 mb-6">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}