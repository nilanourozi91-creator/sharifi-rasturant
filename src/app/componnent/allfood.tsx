import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Slider } from "radix-ui";
export default function allfood(){
    return(
        <div className="bg-black text-white h-fit w-full pb-20">
       <div className="bg-black text-white flex h-fit justify-center w-full ">
           <div className="text-center w-[44vw] h-fit mt-20 ">
            <div className="w-full flex items-center justify-center">
                <div className="h-px w-[20vw] bg-white"></div>
            </div>
            
            <h1 className="text-5xl w-full py-10">Menu</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda corporis! Quod aut, itaque, impedit ex beatae porro sit possimus tenetur alias nesciunt enim autem esse consequuntur veritatis earum facilis.</p>
           </div> 
       </div>
       <h1 className="text-2xl w-full  text-center py-6"> APPTIZER</h1>
        <div className=" flex   justify-center w-full ">
           <div className="flex justify-between ">

            
           <div className=" flex w-[44vw] justify-between">
            <div className="block">
            <div><a href="">Onion Soup</a></div>
            <div><a href="">Warm Goat Chasses Salad</a></div>
            <div><a href="">Tartare De Salmon</a></div>
            <div><a href="">Scarcagots De Bourgogne</a></div>
            </div>
            <div className="block">
            <div>9$</div>
            <div>10$</div>
            <div>12$</div>
            <div>11$</div>
            </div>
           </div>
           
           </div> 
       </div>
        <h1 className="text-2xl w-full  text-center py-6">MAINS</h1>
        <div className=" flex   justify-center w-full ">
           <div className="flex justify-between ">

            
           <div className=" flex w-[44vw] justify-between">
            <div className="block">
            <div><a href="">BEEF BURGUNDY</a></div>
            <div><a href="">ROUST CHICKEN WITH THARRAGON</a></div>
            <div><a href="">SEARED SCOLLOPS</a></div>
            <div><a href="">RATATOUILLE</a></div>
            </div>
            <div className="block">
            <div>24$</div>
            <div>21$</div>
            <div>26$</div>
            <div>18$</div>
            </div>
           </div>
           
           </div> 
       </div>
        <h1 className="text-2xl w-full  text-center py-6">DESSERTS</h1>
        <div className=" flex   justify-center w-full ">
           <div className="flex justify-between ">

            
           <div className=" flex w-[44vw] justify-between">
            <div className="block">
            <div><a href="">KREME BRULEE</a></div>
            <div><a href="">TARTE TATIN</a></div>
            <div><a href="">DARK SCHOCOLATE</a></div>
            <div><a href="">MOUSSE</a></div>
            <div><a href="">PROFITROLISE</a></div>
            </div>
            <div className="flex justify-between w-30 ">
            <div>
                <p>solo</p>
                <div>9$</div>
            <div>10$</div>
            <div>12$</div>
            <div>11$</div>
            </div>
            <div>
                <p>sharing</p>
                <div>9$</div>
            <div>10$</div>
            <div>12$</div>
            <div>11$</div>
            </div>
            </div>
           </div>
           
           </div> 
       </div>
        <h1 className="text-2xl w-full  text-center py-6">DIRNKS</h1>
        <div className=" flex   justify-center w-full ">
           <div className="flex justify-between ">

            
           <div className=" flex w-[44vw] justify-between">
            <div className="block">
            <div><a href="">VAN DU JOUR</a></div>
            <div><a href="">FRANCH LONG COFFEE</a></div>
            <div><a href="">SPARKLING WATER</a></div>
            <div><a href="">SOJO</a></div>
            </div>
            <div className="block">
                 {/* <p>PEER GLUSS/48$ PEER BOTTLE</p> */}
            <div>48%/10$</div>
           
            <div>10$</div>
            <div>8$</div>
            <div>20$</div>
            </div>
           </div>
           
           </div> 
       </div>
       </div>
    )
}