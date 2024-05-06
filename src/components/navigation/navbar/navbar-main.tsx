import MainButton from "@/components/button/button-principal"
import LogoMain from "@/components/logo/logo-navbar"
import Topbar from "@/components/topbar/topbar"
import objectif from "../../../../public/icone/objectif.png"
import Image from "next/image"
export default function NavbarMain(){



return(
<div className="sticky inset-x-0 top-0 z-50" >
    <header className="bg-background-navbar shadow-md shadow-background-top-bar backdrop-blur-md w-full   ">

<Topbar></Topbar>
<div className=" pl-6 pr-6 pt-3 pb-3 "  >
    <div className="flex justify-between items-center  bg-white text-black relative  font-sans" role="navigation">
        <div className="flex justify-between items-center gap-20">
        <LogoMain/>
        
        <div className="pr-8">
            <a href="#" className="pl-2">Accueil</a>
            <a href="#" className="pl-2">A propos</a>
            <a href="#" className="pl-2">Contact</a>
            <a href="#" className="pl-2">Connexion</a>
        </div>
        </div>
        <MainButton type="submit" asChild={false} className=" gap-2 flex items-center">
          connect
          <Image src={objectif} alt="icone lien vers photo Maintenat" className="h-5 w-5  " />

        </MainButton>
    </div>
</div>

</header>


</div>)
}

