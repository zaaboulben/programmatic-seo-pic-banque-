"use client";

import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import AutoPlay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from "react";
import './embla.css'
import Link from "next/link";
type Image = {
  src: string;
  alt: string;
};


type CarouselProps = {
  image: Image[];
};

type PropType = {
  image: Image[];
  options?: EmblaOptionsType;
};
const OPTION:EmblaOptionsType = {
  loop: true,
  dragFree: true,

};


export default function Carousel(props: PropType) {
  const [emblaRef,emblaApi] = useEmblaCarousel({ loop:true,dragFree:true } ,[AutoScroll({delay:1000,speed:1 ,stopOnInteraction:false,direction:'backward'})] );
  


 
  return(
    <div className="overflow-clip" ref={emblaRef}>
      <div className="embla__container">
        {props.image.map((image, index) => (
          <div className=" embla__slide   "  key={index} >
            <Link href={image.src } >
            <Image src={image.src} alt={image.alt} 
            width={250} height={300}

            />
        
            </Link>
          </div>
        ))}
      </div>
      
    </div>



 )
}
