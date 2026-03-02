"use client";

import { Social } from "@/components/social/social";
import NavMenu from "@/components/nav-menu/nav-menu";
import { useLanguage } from "@/contexts/language-context";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="flex flex-col mb-30 min-h-screen flex justify-center items-center background">
      <NavMenu />
      <section className="flex justify-center sm:justify-around px-5 py-20 flex-wrap text-center animate-fade-in-up">
        <section className="max-w-4xl">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block mb-2">{t.header.title}</span>
              <span className="gradient-text block">{t.header.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              {t.header.tagline}
            </p>
          </div>
          <Social />
          <div className="flex flex-col sm:flex-row justify-center gap-4 p-5 mt-8">
            <a
              href="/jose-silva-cv.pdf"
              download
              className="bg-[#dd5245] hover:bg-[#c9453a] text-white font-semibold rounded-lg px-8 py-3 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t.header.cvEn}
            </a>
            <a
              href="/Desenvolvedor de Software - José Silva.pdf"
              download
              className="bg-transparent border-2 border-[#dd5245] hover:bg-[#dd5245] text-white font-semibold rounded-lg px-8 py-3 cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {t.header.cvPt}
            </a>
          </div>
        </section>
      </section>
    </header>
  );
}
