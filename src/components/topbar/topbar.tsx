import { StarIcon } from "@heroicons/react/24/solid";
import { CameraIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
    const numberOfStars = 5;

    return (
        <>
           <div className="bg-background-top-bar py-2 text-text-secondary  font- font-semibold">
<div className="mx-auto max-w-7xl">
    <div className="flex text-text-white items-center justify-center lg:justify-between md:px-2">
        <p className="hidden lg:flex gap-3 text-xs font-medium">
            <SparklesIcon
                className="sm:h-4 sm:w-4 h-3.5 w-3.5 font-medium"
                strokeWidth={2.5}
                aria-hidden="true"
            />
            toute nos photographie sont libre de droit
        </p>

        <div className="flex gap-1 items-center  ">
            {Array.from({ length: numberOfStars }, (value, index) => (
                <StarIcon
                    key={index}
                    className="sm:h-4 sm:w-4 h-3.5 w-3.5 text-etoile"
                    aria-hidden="true"
                />
            ))}
            <p className="text-xs font-medium">
                les photographie generer par ia les plus realiste du marcher{" "}
            </p>
        </div>
        <p className="hidden lg:flex gap-3 text-xs font-medium align-baseline">

            <CameraIcon
                className="sm:h-4 sm:w-4 h-3.5 w-3.5 font-medium"
                strokeWidth={2.5}
                aria-hidden="true"
            />
            31 030+ portraits professionnels générés.
        </p>
    </div>
</div>

</div>
        </>
)
}


