import { Button } from "@/components/ui/button";

export default function time(){
    return(
        <div className="bg-green-100 h-[50vh] w-full flex justify-center items-center">  
            <div>
                <h5 className="text-center text-2xl pb-4">Hours</h5>
                <h1 className="text-3xl font-semibold">weekdays:11:00 am -9:00 pm</h1>
                <h1 className="text-3xl font-semibold">weekends:11:30 am -10:300 pm</h1>
                <h1 className="text-3xl font-semibold">Closed on public holidays</h1>
            </div>
        </div>
    )
}