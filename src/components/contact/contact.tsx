"use client"

import Form from "next/form";
import {useEffect, useState} from "react";

export default function Contact() {


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
        <section id="contact" className="flex flex-col background py-20 font-sans">
            <h2 className="text-3xl px-10 md:px-20 font-semibold">Contact</h2>
            <section className="text-xl font-normal mt-2 md:text-justify flex flex-col sm:flex-row justify-between md:py-10 md:px-20 px-10 md:h-[70vh] ">
                <section className="md:w-1/2">
                    <h3 className="text-2xl mb-5">Drop Me a Message</h3>
                    <p className="mb-5 text-md">Hi, If you are a recruiter or potential collaborator interested in discussing opportunities, I would love to hear from you!</p>
                    <p className="mb-5 text-md">jvitorfacanha@gmail.com</p>
                    <p className="mb-5 text-md">Macaé, Rio de Janeiro, Brazil</p>
                </section>
                <Form action="/search" className="flex flex-col justify-between p-8 w-full max-w-[500px] custom-shadow text-lg">
                    <input value={email} className="bg-[#101630] md:py-[0.6rem] px-4 py-3 mb-5 outline-none" onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Your email" required/>
                    <input value={subject} className="bg-[#101630] md:py-[0.6rem] px-4 py-3 mb-5 outline-none" onChange={(e)=> setSubject(e.target.value)} type="text" id="subject" name="subject" placeholder="Subject" required/>
                    <textarea value={message} className="bg-[#101630] md:py-[0.6rem] px-4 py-3 mb-5 outline-none" onChange={(e)=> setMessage(e.target.value)} id="message" name="message" placeholder="Message" required></textarea>
                    <button className="bg-[#101630] md:py-[0.6rem] px-4 py-3 mb-5 outline-none cursor-pointer" onClick={(event)=>sendEmail(event)} type="submit">Send</button>
                </Form>
            </section>
            {response && (
                <div className="fixed bg-green-600 rounded-md text-white p-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[90%] ">
                    <span>Send Successfully!</span>
                </div>
            )}
        </section>
    )
}