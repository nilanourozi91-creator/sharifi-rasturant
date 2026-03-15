import { Button } from "@/components/ui/button";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
export default function banner(){
    return(
        <div className="relative h-11/12 w-full items-center">
            <Image
                      className="h-11/12 w-full"
                      src="/home-1.jpg"
                      alt="Next.js logo"
                      height={2000}
                      width={2000}
                      priority
                    />
            <div className=" absolute text-center bottom-90 it w-full">
                <h1 className="text-white text-5xl">A TASTS FROM SHARIFI RASTURANT</h1>
                <Button className="text-black bg-white px-10 py-6 mt-6 rounded-3xl text-xl"><a href="./contact.tsx">contact us</a></Button>
            </div>
        </div>
    )
}