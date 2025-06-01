"use client"


import {useState} from "react";
import Link from "next/link";

export default function NavMenu(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white px-15 py-10 flex items-center justify-between">

            <div className="text-3xl">JS</div>

            <div className="hidden md:flex space-x-10">
                <Link href="#" >Home</Link>
                <Link href="#about" className="hover:underline">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#experience">Experience</Link>
                <Link href="#contact">Contact</Link>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
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
                <div className="absolute top-16 right-6 bg-gray-800 rounded-lg shadow-md flex flex-col space-y-4 p-6 md:hidden">
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
                    <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
                    <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
                    <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
                    <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
                </div>
            )}
        </nav>
    )
}