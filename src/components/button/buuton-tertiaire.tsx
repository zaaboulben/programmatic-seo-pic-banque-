import { ButtonType } from "@/button";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function TertiaryButton({


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
}>



) {
return(
    <Button
    type={type}
    disabled={disabled}
    onClick={onClick}
    asChild={asChild}
    className={cn(" transition-all ring-2 ring-border-primary  relative overflow-hidden duration-200 ease-in rounded-[8px] antialiased text-text-primary bg-background-tertiary-button font-sans font-semibold text-[18px] border-background-main shadow-xl shadow-background-main",
        className
    )}

    >
        {children}
    </Button>
)



}