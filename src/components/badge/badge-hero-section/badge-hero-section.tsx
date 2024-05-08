import { Badge } from "@/components/ui/badge";
import Link from "next/link";


export default function BadgeHeroSection() {
const number = 10;
const ARRAY = ["homme noir barbe", "femme blonde", "femme brune", "homme blanc", "femme asiatique", "homme asiatique", "femme noire", "homme noir", "femme rousse", "homme roux"];

    return (
        <div  className="gap-3 flex text-nowrap justify-start items-center flex-wrap ">

            { ARRAY.map((item, index) => (

                <Badge key={index} className=" bg-mid text-text-secondary font-sans text-sm font-light rounded-md  hover:bg-brand ring-1 ">
                    <Link href={`/blog/${index}`}>{item}</Link>
                </Badge>
            ))  


            
            
            }
           
        </div>
    )
}
