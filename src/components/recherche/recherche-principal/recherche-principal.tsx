import MainButton from "@/components/button/button-principal";
import { Input } from "@/components/ui/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function MainResearch(){




    return(
        <>     <div className="flex bg-background-main   rounded-md p-1 w-[773px]" >

        <Input lang="fr" autoComplete="google_chrome_fix" type="text" placeholder="Recherche" >

   
        </Input>
        <MainButton asChild={false} type="submit" className=" flex justify-center items-center gap-3"  >
                <p>
                    Validez
                </p>
                <MagnifyingGlassIcon strokeWidth={2.5} className="h-14 w-14"/>

            </MainButton>
            </div>
        </>
    )}