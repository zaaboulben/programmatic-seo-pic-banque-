import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ButtonType, MainButtonProps } from "@/button"

export default function SecondaryButton( {
    children,
    className,
    type,
    onClick,
    disabled,
    variant,
    asChild
}: Readonly<{
    children: React.ReactNode;
    className: string;
    type: ButtonType;
    asChild?: any;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}>){


    return(
        <>
        <Button className=" transition-all ring-2  ring-background-secondary-button relative overflow-hidden  duration-200 ease-in rounded-[8px] antialiased text-text-secondary bg-background-secondary-button font-sans font-semibold text-[18px] border-background-main shadow-xl shadow-background-main"  >
            {children}
        </Button>
        </>
    )
}