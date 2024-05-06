import BadgeHeroSection from "@/components/badge/badge-hero-section/badge-hero-section";
import MainResearch from "@/components/recherche/recherche-principal/recherche-principal";

export default function HeroView(){



    return(
        <section id="#Accueil " className=" h-[680px] w-full bg-hero-section-bg     "> 
                <div className="w-full h-full  bg-black bg-opacity-80 " >  
                    <div className="container mx-auto h-full  items-center  w-full">
                        <div className="text-center text-white w-full">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold leading-[1.1] ">Trouver les photo libre de droit pour vos projet </h1>

                        </div>
                        <MainResearch/>
                        <BadgeHeroSection/>
                    </div>

          
        </div>

        </section>

    )   
}
