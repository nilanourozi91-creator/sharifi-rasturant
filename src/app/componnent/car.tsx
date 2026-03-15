import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function ResponsiveCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>

        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/img1.jpg" className="w-full rounded-lg" />
        </CarouselItem>

        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/img2.jpg" className="w-full rounded-lg" />
        </CarouselItem>

        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/img3.jpg" className="w-full rounded-lg" />
        </CarouselItem>

        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/img4.jpg" className="w-full rounded-lg" />
        </CarouselItem>

        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/img5.jpg" className="w-full rounded-lg" />
        </CarouselItem>

      </CarouselContent>
    </Carousel>
  )
}
