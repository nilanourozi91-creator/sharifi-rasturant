"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Slider } from "radix-ui";
import { motion } from "framer-motion"


export default function about(){
    return(
       <div className=" bg-white text-black grid grid-cols-2 h-screen justify-between  w-full items-center">
             <div className=" flex flex-2">
             <motion.div
     
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/cake.jpg"
        alt=""
        width={500}
        height={300}
        className="rounded-4xl pl-5 h-80 w-50 "
      />
    </motion.div>

     <motion.div
     
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/cake-2.jpg"
        alt=""
        width={500}
        height={300}
        className="rounded-3xl pl-5  h-80 w-50 mt-30 ml-20"
      />
    </motion.div>
    </div>
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-xl font-bold"
    >
      <div className="col-span-1">
              <h1 className="text-5xl">Sharifi Connection</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis delectus perferendis molestias in distinctio tenetur eligendi rerum nesciunt harum deleniti ab assumenda dicta ducimus molestiae, voluptatibus libero possimus obcaecati accusamus!</p>
                <Button className="text-white bg-black px-10 py-5 text-xl mt-6">book now</Button>
           </div> 
    </motion.h1>
       </div>
    )
}
