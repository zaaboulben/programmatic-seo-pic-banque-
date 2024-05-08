//ici element de base pour un carrousel d'image 

import Image from "next/image"
import { Suspense } from "react"
import Carousel from "./carrousel_template/carrousel-temp"
import { EmblaOptionsType } from "embla-carousel"

export default function MainCarrousel() {
    const ARAAY_IMAGE = [
        {
            id: 1,
            src: "/image-carrousel/Image_1.png",
            alt: "image1"

        },
        {
            id: 2,
            src: "/image-carrousel/Image_2.png",
            alt: "image2"

        },
        {
            id: 3,
            src: "/image-carrousel/Image_3.png",
            alt: "image3"

        },
        {
            id: 4,
            src: "/image-carrousel/Image_4.png",
            alt: "image4"

        },
        {
            id: 5,
            src: "/image-carrousel/Image_5.png",
            alt: "image5"

        },
        {
            id: 6,
            src: "/image-carrousel/Image_6.png",
            alt: "image6"

        },
        {
            id: 7,
            src: "/image-carrousel/Image_7.png",
            alt: "image7"

        },
        {
            id: 8,
            src: "/image-carrousel/Image_8.png",
            alt: "image8"

        },
        {
            id: 9,
            src: "/image-carrousel/Image_9.png",
            alt: "image9"

        },
        {
            id: 10,
            src: "/image-carrousel/Image_10.png",
            alt: "image10"

        },
        {
            id: 11,
            src: "/image-carrousel/Image_11.png",
            alt: "image11"

        },
        {
            id: 12,
            src: "/image-carrousel/Image_12.png",
            alt: "image12"

        },
        {
            id: 13,
            src: "/image-carrousel/Image_13.png",
            alt: "image13"

        },
        {
            id: 14,
            src: "/image-carrousel/Image_14.png",
            alt: "image14"

        },
        {
            id: 15,
            src: "/image-carrousel/Image_15.png",
            alt: "image15"

        },
        {
            id: 16,
            src: "/image-carrousel/Image_16.png",
            alt: "image16"

        },
        {
            id: 17,
            src: "/image-carrousel/Image_17.png",
            alt: "image17"

        },
        {
            id: 18,
            src: "/image-carrousel/Image_18.png",
            alt: "image18"

        },
        {
            id: 19,
            src: "/image-carrousel/Image_19.png",
            alt: "image19"

        },
        {
            id: 20,
            src: "/image-carrousel/Image_20.png",
            alt: "image20"

        },
        {
            id: 21,
            src: "/image-carrousel/Image_21.png",
            alt: "image21"

        },
        {
            id: 22,
            src: "/image-carrousel/Image_22.png",
            alt: "image22"

        },
        {
            id: 23,
            src: "/image-carrousel/Image_23.png",
            alt: "image23"

        },
        {
            id: 24,
            src: "/image-carrousel/Image_24.png",
            alt: "image24"

        }
    ]
 


    return (<>

        <div className="container mx-auto w-screen h-full pl-12 pr-12">
            <h1 className="text-xl md:text-2xl lg:text-2xl flex-wrap first-letter: font-raleway font-bold leading-[1.1] pt-4 ">
                Les plus Telecharger
            </h1>
            <Suspense fallback={<div>loading...</div>}>
                <div className="h-[300px]" >
                    <Carousel  image={ARAAY_IMAGE }  />
                </div>
            </Suspense>
        </div>




    </>

    )
}