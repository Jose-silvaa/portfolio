import HomePageMenu from "@/components/home-page-menu/home-page-menu";
import HomePagePhrase from "@/components/home-page-phrase/home-page-phrase";
import HomeSectionSocial from "@/pages/home-page/home-page-sections/home-section-social";
import Image from "next/image";


export default function HomeSectionHeader(){

    return (
        <header className="flex flex-col">
            <HomePageMenu />
            <section className="flex flex-row flex-wrap text-center mt-18 ">
                <section className="flex flex-col items-center justify-center bg-base-100/10 px-18 py-15 w-1/2">
                    <HomePagePhrase />
                    <HomeSectionSocial />
                </section>
                <section className="w-1/2 px-18 py-15 flex justify-center items-start">
                    <Image className="rounded-xl" src="/jose-foto.jpg" width="200" height="200" alt="José Vitor"/>
                </section>
            </section>
        </header>
    )
}