import HomePageMenu from "@/components/home-page-menu/home-page-menu";
import HomePagePhrase from "@/components/home-page-phrase/home-page-phrase";
import HomeSectionSocial from "@/pages/home-page/home-page-sections/home-section-social";
import Image from "next/image";


export default function HomeSectionHeader(){

    return (
        <header className="flex flex-col">
            <HomePageMenu />
            <section className="flex flex-row justify-center sm:justify-around px-10 py-15 flex-wrap text-left mt-10 w-full">
                <section className="">
                    <Image className="rounded-xl" src="/jose-foto.jpg" width="250" height="250" alt="José Vitor"/>
                </section>
                <section className="mt-10 sm:mt-0">
                    <HomePagePhrase />
                    <HomeSectionSocial />
                </section>

            </section>
        </header>
    )
}