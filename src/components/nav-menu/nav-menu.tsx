"use client"

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  return (
    <nav className="text-white px-15 py-10 flex items-center justify-between">

      <div className="hidden md:flex items-center gap-8">
        <div className="flex space-x-10">
          <Link href="#" className="hover:text-[#dd5245] transition-colors">
            {t.nav.home}
          </Link>
          <Link href="#about" className="hover:text-[#dd5245] transition-colors">
            {t.nav.about}
          </Link>
          <Link href="#projects" className="hover:text-[#dd5245] transition-colors">
            {t.nav.projects}
          </Link>
          <Link href="#skills" className="hover:text-[#dd5245] transition-colors">
            {t.nav.skills}
          </Link>
          <Link href="#experience" className="hover:text-[#dd5245] transition-colors">
            {t.nav.experience}
          </Link>
          <Link href="#contact" className="hover:text-[#dd5245] transition-colors">
            {t.nav.contact}
          </Link>
        </div>
        <div className="flex items-center gap-1 border border-[#dd5245]/40 rounded-lg p-0.5">
          <button
            onClick={() => setLocale("en")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              locale === "en"
                ? "bg-[#dd5245] text-white"
                : "text-gray-400 hover:text-white"
            }`}
            aria-label="English"
          >
            EN
          </button>
          <button
            onClick={() => setLocale("pt")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              locale === "pt"
                ? "bg-[#dd5245] text-white"
                : "text-gray-400 hover:text-white"
            }`}
            aria-label="Português"
          >
            PT
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <div className="flex items-center gap-1 border border-[#dd5245]/40 rounded-lg p-0.5">
          <button
            onClick={() => setLocale("en")}
            className={`px-2 py-1 rounded text-sm ${locale === "en" ? "bg-[#dd5245] text-white" : "text-gray-400"}`}
            aria-label="English"
          >
            EN
          </button>
          <button
            onClick={() => setLocale("pt")}
            className={`px-2 py-1 rounded text-sm ${locale === "pt" ? "bg-[#dd5245] text-white" : "text-gray-400"}`}
            aria-label="Português"
          >
            PT
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 right-6 left-6 bg-[#101630] border border-[#dd5245]/20 rounded-xl shadow-xl flex flex-col space-y-2 p-4 md:hidden z-50">
          <a href="#" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.home}
          </a>
          <a href="#about" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#projects" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.projects}
          </a>
          <a href="#skills" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.skills}
          </a>
          <a href="#experience" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.experience}
          </a>
          <a href="#contact" className="py-2 hover:text-[#dd5245] transition-colors" onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}