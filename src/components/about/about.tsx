"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mb-30 pt-20 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 section-title">
          {t.about.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#dd5245] to-[#2241d7] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <Image
              src="/jose-foto.jpg"
              alt="José Silva"
              width="350"
              height="350"
              className="relative rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              {t.about.intro.includes("José Silva")
                ? <>
                    {t.about.intro.split("José Silva")[0]}
                    <span className="text-[#dd5245] font-semibold">José Silva</span>
                    {t.about.intro.split("José Silva")[1]}
                  </>
                : t.about.intro}
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              {t.about.paragraph2}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-[#101630] rounded-full text-sm border border-[#dd5245]/30">
                {t.about.tags.problemSolving}
              </span>
              <span className="px-4 py-2 bg-[#101630] rounded-full text-sm border border-[#dd5245]/30">
                {t.about.tags.fullStack}
              </span>
              <span className="px-4 py-2 bg-[#101630] rounded-full text-sm border border-[#dd5245]/30">
                {t.about.tags.collaboration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}