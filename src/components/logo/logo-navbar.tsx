import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo/logo-photo-gen.webp"

export default function LogoMain() {



    return (
        <Link href="/" className=" flex gap-2 item-center"  >
            <Image src={Logo} alt="Logo photo-generer" className="w-[46px] h-[46px] rounded-md" />
            <p className="font-raleway font-semibold text-sm leading-4 md:text-lg md:leading-5 text-text-primary">
                Photo<br></br>Gen
            </p>
        </Link>
    )
}