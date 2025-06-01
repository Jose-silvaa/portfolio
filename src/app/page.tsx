import Header from "@/components/header/header";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div>
        <Header />
        <About />
        <Projects/>
        <Experience />
        <Skills/>
        <Contact/>
    </div>
  );
}
