import Image from "next/image";


export default function About() {

    return (
        <section id="about" className="mb-30 pt-5">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">About</h2>
            <div className="flex md:flex-row flex-wrap md:justify-between md:py-10 md:px-20  px-10 py-10">
                <Image src="/jose-foto.jpg" alt="foto" width="300" height="300" className="rounded-md object-contain mb-10" />
                <p className="md:w-1/2 text-justify">Hello, my name is José Silva, and I am currently pursuing a degree in Information Systems. I am a software developer with experience programming languages and a solid background in problem-solving.
                </p>
            </div>
        </section>
    )
}