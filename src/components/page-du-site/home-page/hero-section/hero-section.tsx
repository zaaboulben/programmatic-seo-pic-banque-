import BadgeHeroSection from "@/components/badge/badge-hero-section/badge-hero-section";
import MainCarrousel from "@/components/carrousel/hero-section-carroussel";
import MainAdvantage from "@/components/element-benefice/benefice-hero-section";
import MostDownloaded from "@/components/most-downloaded-banderole/most-downloaded";
import MainResearch from "@/components/recherche/recherche-principal/recherche-principal";

export default function HeroView() {
  return (
    <section id="#Accueil ">
        <div  className="  w-full bg-hero-section-bg  ">
      <div className="w-full h-full  bg-hero-section-semi-opacity pt-6 ">
        <div className="container mx-auto h-full w-full flex flex-col gap-4 justify-center items-center justify-items-center">
          <div className="text-center text-white  flex justify-center flex-col  items-center w-2/3  gap-6">

            <h1 className="text-4xl md:text-4xl lg:text-5xl flex-wrap first-letter: font-raleway font-bold leading-[1.1] pt-10 ">
            Trouver les photo <span className="text-text-tertiary">libre de droit </span> pour <span className="text-text-tertiary ">vos projet</span>{" "}
            </h1>
          
          <div className="flex flex-col  justify-items-center gap-4 justify-center items-center  pr-10 pl-10  ">
            <MainResearch />
            <BadgeHeroSection />
          </div>
          </div>
          
          <MainAdvantage />
        </div>
      </div>
      </div>
      <MostDownloaded/>
    </section>
  );
}
