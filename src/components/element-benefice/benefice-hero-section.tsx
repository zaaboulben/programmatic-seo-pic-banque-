import Image from "next/image";
import copyrightfree from "../../../public/icone/copyright-free.png";
import format from "../../../public/icone/differente-format.png";
import resolution from "../../../public/icone/differente-resolution.png";
import sansinscription from "../../../public/icone/pas-inscription.png";

export default function MainAdvantage() {
    return (
        <div>
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-start">
                    <div className="p-4 flex-col flex  items-center gap-3 justify-start ">
                        <Image src={copyrightfree} alt="copyright"  className="w-20 h-20" />

                        <h2 className="text-xl font-bold font-raleway text-text-secondary">
                            {" "}
                            100% Copyright free
                        </h2>
                        <p className="mt-2 text-base font-sans  font-normal text-text-secondary text-center">
                            un large choix photo en un clic utilisable de facon commercial ou
                            non-comercial
                        </p>
                    </div>

                    <div className="p-4 flex-col flex  items-center  gap-3  justify-start ">
                        <Image src={format} alt="format"  className="w-20 h-20"/>
                        <h2 className="text-xl font-bold font-raleway text-text-secondary">
                            {" "}
                            Differente format{" "}
                        </h2>
                        <p className="mt-2 text-base  font-sans font-normal  text-text-secondary text-center">
                            pas besoin de convertir vos image pour sadapter a vos projet en un
                            simple clic vous avez le choix a tout les formats que se soit JPG
                            ou heic.
                        </p>
                    </div>
                    <div className="p-4 flex-col flex  items-center gap-3 justify-start ">
                        <Image src={resolution} alt="resolution" className="w-20 h-20" />
                        <h2 className="text-xl font-bold font-raleway text-text-secondary">
                            Differente resolution
                        </h2>
                        <p className="mt-2 text-base font-sans font-normal  text-text-secondary text-center">
                            notre technologie nous permet d’adpter nos image a vos besoin pour
                            vous permttre d’avoir les media optimaux a vos besoin
                        </p>
                    </div>{" "}
                    <div className="p-4 flex-col flex items-center  gap-3 justify-start ">
                        <Image src={sansinscription} alt="sans inscription"  className="w-20 h-20" />
                        <h2 className="text-xl font-bold font-raleway text-text-secondary">
                            Sans Inscription
                        </h2>
                        <p className="mt-2 font-sans  text-base font-normal text-text-secondary text-center">
                            pas besoin de vous inscrire pour utiliser nos service 100% gratuit
                            et illimite{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
