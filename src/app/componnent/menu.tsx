// import { Button } from "@/components/ui/button";

// import Image from "next/image";
// import { Slider } from "radix-ui";
// export default function menu(){
//     return(
        
//        <div className="bg-black text-white h-[60vh] w-full">
//            <div className="flex justify-between pt-5 px-4">
//             <h1 className="text-4xl">Flover of sharifi resturant</h1>
//             <Button className="bg-white text-black px-9 py-5">view full menu</Button>
//            </div>
//            <div>
            
//            </div>
//        </div>
//     )
// }
// "use client"

// import Image from "next/image"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function menu() {
//   return (
//     <Carousel className="w-full max-w-xl">
//       <CarouselContent>
//         <CarouselItem>
//           <Image src="/home-1.jpg" alt="Pizza" width={600} height={400} />
//         </CarouselItem>

//         <CarouselItem>
//           <Image src="/home-1.jpg" alt="Burger" width={600} height={400} />
//         </CarouselItem>

//         <CarouselItem>
//           <Image src="/home-1.jpg" alt="Pasta" width={600} height={400} />
//         </CarouselItem>
//       </CarouselContent>

//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }


"use client"

// import Image from "next/image"
// import Autoplay from "embla-carousel-autoplay"

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
//     import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function menu() {

//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }



import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function menu() {
  const plugins = React.useRef(
    Autoplay({ delay: 3000 })
  // const plugin = React.useRef(
  //   Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugins.current]}
      className="w-full bg-black max-w-full"
    >
      <CarouselContent>
        
        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-1.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>
             
               <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-12.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>
              
               <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-13.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>
              
               <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-14.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>
               
               
        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-11.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>
               
            <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-7.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>


            <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-8.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>


            <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-9.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

            <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-10.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-2.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-3.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-4.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

        <CarouselItem className="basis-1/3 md:basis-1/2 lg:basis-1/3 p-2">
          <img src="/food-5.jpg" className="w-full h-[50vh] rounded-lg"/>
        </CarouselItem>

      </CarouselContent>
    </Carousel>
  )
}

    // <Carousel className="w-full h-full">
    //   <CarouselContent>
    //     <CarouselItem>
    //       <Image src="/food-1.jpg" alt="Pizza" width={600} height={400} />
    //     </CarouselItem>

    //     <CarouselItem>
    //       <Image src="/food-2.jpg" alt="Burger" width={600} height={400} />
    //     </CarouselItem>

    //     <CarouselItem>
    //       <Image src="/food-3.jpg" alt="Pasta" width={600} height={400} />
    //     </CarouselItem>
    //   </CarouselContent>

    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>

//   )
// }
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"

// export default function menu() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 3000,
//         }),
//         CarouselItem:3,

//       ]}
//       className="50"
//     >
//       <CarouselContent>

//         <CarouselItem className="relative h-[60vh] w-50">
//           <Image
//             src="/slide1.jpg"
//             alt="food"
//             fill
//             className="object-cover"
//           />
//         </CarouselItem>

//         <CarouselItem className="relative h-[60vh] w-50">
//           <Image
//             src="/home-1.jpg"
//             alt="food"
//             fill
//             className="object-cover"
//           />
//         </CarouselItem>

//         <CarouselItem className="relative h-[60vh] w-50">
//           <Image
//             src="/slide3.jpg"
//             alt="food"
//             fill
//             className="object-cover"
//           />
//         </CarouselItem>

//       </CarouselContent>
//     </Carousel>
//   )
// }