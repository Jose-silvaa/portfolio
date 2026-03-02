"use client";

import Form from "next/form";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function Contact() {
  const { t } = useLanguage();
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState<boolean | null>(null)

    useEffect(() => {
        if (response === true) {
            const timer = setTimeout(() => {
                setResponse(null);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [response]);


    const sendEmail = async (event: React.MouseEvent<HTMLButtonElement>)=>{

        event.preventDefault();

        const dataSend = {
            email : email,
            subject : subject,
            message : message,
        }

        const res = await fetch(`/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })

        if (res.status > 199 && res.status < 300) {
            setResponse(true)
            setEmail("")
            setSubject("")
            setMessage("")
        }else{
            setResponse(false)
        }
    }

    return (
        <section id="contact" className="flex flex-col background py-20 font-sans relative">
            <div className="max-w-6xl mx-auto w-full px-5 md:px-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 section-title">
                  {t.contact.title}
                </h2>
                <section className="flex flex-col lg:flex-row justify-between gap-12">
                    <section className="lg:w-1/2 space-y-6">
                        <h3 className="text-3xl font-bold mb-6">{t.contact.heading}</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {t.contact.description}
                        </p>
                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#dd5245] rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:jvitorfacanha@gmail.com" className="text-lg text-gray-300 hover:text-[#dd5245] transition-colors">
                                    jvitorfacanha@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#dd5245] rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-300">{t.contact.location}</p>
                            </div>
                        </div>
                    </section>
                    <Form action="/search" className="flex flex-col gap-6 p-8 w-full lg:w-1/2 bg-[#101630] border border-[#dd5245]/20 rounded-xl custom-shadow">
                        <div>
                            <input
                                value={email}
                                className="w-full bg-[#0a0e27] border border-[#dd5245]/30 rounded-lg px-4 py-3 outline-none focus:border-[#dd5245] focus:ring-2 focus:ring-[#dd5245]/20 transition-all text-white placeholder-gray-500"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t.contact.placeholderEmail}
                                required
                            />
                        </div>
                        <div>
                            <input
                                value={subject}
                                className="w-full bg-[#0a0e27] border border-[#dd5245]/30 rounded-lg px-4 py-3 outline-none focus:border-[#dd5245] focus:ring-2 focus:ring-[#dd5245]/20 transition-all text-white placeholder-gray-500"
                                onChange={(e) => setSubject(e.target.value)}
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={t.contact.placeholderSubject}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                value={message}
                                className="w-full bg-[#0a0e27] border border-[#dd5245]/30 rounded-lg px-4 py-3 outline-none focus:border-[#dd5245] focus:ring-2 focus:ring-[#dd5245]/20 transition-all text-white placeholder-gray-500 min-h-[150px] resize-none"
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                name="message"
                                placeholder={t.contact.placeholderMessage}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="bg-[#dd5245] hover:bg-[#c9453a] text-white font-semibold rounded-lg px-6 py-3 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={(event) => sendEmail(event)}
                            type="submit"
                        >
                            {t.contact.sendButton}
                        </button>
                    </Form>
                </section>
            </div>
            {response && (
                <div className="fixed bg-green-600 rounded-lg text-white p-4 left-1/2 transform -translate-x-1/2 top-[90%] shadow-2xl z-50 animate-fade-in-up">
                    <span className="font-semibold">{t.contact.successMessage}</span>
                </div>
            )}
            {response === false && (
                <div className="fixed bg-red-600 rounded-lg text-white p-4 left-1/2 transform -translate-x-1/2 top-[90%] shadow-2xl z-50 animate-fade-in-up">
                    <span className="font-semibold">{t.contact.errorMessage}</span>
                </div>
            )}
        </section>
    )
}