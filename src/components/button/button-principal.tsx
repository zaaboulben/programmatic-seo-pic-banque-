// components/buttons/MainButton.tsx

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ButtonType } from "@/button";

export default function MainButton( {
    children,
    className,
    type,
    onClick,
    disabled,
    asChild
}: Readonly<{
    children: React.ReactNode;
    className: string;
    type: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    asChild?: any;
}>){
    return (
        <Button
            type={type}
            disabled={disabled}
            onClick={onClick}
            asChild={asChild}
            className={cn("h-10 pl-6 pr-6 pt-3 pb-3 transition-all ring-2 ring-background-main relative overflow-hidden duration-200 ease-in rounded-[8px] antialiased text-text-secondary bg-background-main-button font-sans font-semibold text-[18px] border-background-main shadow-xl shadow-background-main hover:bg-black  ",
                className
            )}
        >
            {children}
        </Button>
    );
}
//"main-button  bg-background-main-button relative overflow-hidden rounded-md transition-all duration-200 ease-in inline-flex shadow-md shadow-blue-900/70 border text-text-secondary font-sans font-semibold  border-border-primary",
