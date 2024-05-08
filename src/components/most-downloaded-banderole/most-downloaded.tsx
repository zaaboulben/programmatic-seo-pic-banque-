import MainCarrousel from "../carrousel/hero-section-carroussel";

export default function MostDownloaded() {


    return (
        // configuring here the responsive design of the most downloaded banderole
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-4/5 lg:w-3/5 xl:w-2/5">
                <div className="flex flex-col items-center justify-center
                w-full h-96 mt-8">
                    <div className="flex items-center justify-center w-full h-full">
                        <MainCarrousel/>
                    </div>
                </div>
            </div>
        </section>


    )
}