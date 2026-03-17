// 

"use client"

import Footer from "../componnent/footer"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"
import Image from "next/image"
import { useRef } from "react"
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa"

export default function Contacts() {

    

  return (
   <div className=" h-screen relative w-full text-center flex flex-col justify-center ">
       <div className=" bg-green-100 h-[50vh] gap-3 w-full  flex items-center justify-center flex-col">
    <h1 className="text-4xl font-bold">See you soon</h1>
    <h1 className="font-semibold">visit us</h1>
    <h1 className="font-extralight">123 AnyWhere St. Any city ,st 12345</h1>
    <h1 className=" font-normal">Our restaurant has accessible parking spaces and restrooms</h1>
    <h1 className="text-2xl">Call us for Dliveries & Reservation</h1>
       <div className="flex items-center gap-2 bg-green-100 w-full text-center  justify-center ">
               <FaPhone />
               <a href="tel:+93792410628" className="hover:text-red-500">
                 +93 792410628
               </a>
             </div>
    <h1 className="text-3xl">Fallow us on our socail</h1>
     <div className=" gap-4 text-2xl bg-green-100 w-full text-center flex  justify-center ">
    
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaFacebook />
            </a>
    
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram/>
            </a>
    
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
    </div>
          </div>
        
          <Image
          src="/contact-2.jpg"
          alt=""
          height={2000}
          width={2000}
          className="w-full h-[50vh] ">
              
          </Image>
         <div className=" absolute text-center bottom-30 it w-full">
                <h1 className="text-black text-5xl">A TASTS FROM SHARIFI RASTURANT</h1>
            </div>
   </div>
  )
}