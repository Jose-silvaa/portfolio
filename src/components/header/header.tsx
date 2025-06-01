import {Social} from "@/components/social/social";
import NavMenu from "@/components/nav-menu/nav-menu";


export default function Header(){

    return (
        <header className="flex flex-col mb-30">
            <NavMenu />
            <section className="flex justify-center sm:justify-around px-5 py-35  flex-wrap text-center ">
                <section>
                    <h1 className="text-3xl md:text-5xl font-semibold mb-5">
                        <span>José Silva </span>
                        <span className="[color:#dd5245]">Software Developer</span>
                    </h1>
                    <Social/>
                    <div className="flex flex-col md:flex-wrap md:flex-row justify-center p-5">
                        <a href="/jose-silva-cv.pdf" download className="md:mr-5 border-1 rounded-md px-10 py-2 cursor-pointer hover:bg-[#dd5245]">READ THE CV</a>
                        <a href="/jose-silva-cv-pt.pdf" download className="border-1 rounded-md px-10 py-2 cursor-pointer hover:bg-[#dd5245]">READ THE CV - PT</a>
                    </div>
                </section>
            </section>
        </header>
    )
}