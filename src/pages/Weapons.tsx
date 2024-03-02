import { Navbar } from "../components/Navbar";
import {FilterIcon, Sword, Flame} from 'lucide-react'
import { Checkbox } from "../components/ui/Checkbox";

export function Weapons(){
    return(
        <div className="bg-[#01212f] h-[100dvh]">
            <Navbar page={1}/>
            <div className="flex bg-neutral-700 w-full h-[calc(100dvh-5rem)] px-64 py-28">
                <div className="flex flex-col bg-red-400 w-72 font-overpass font-semibold">
                    <div className="flex bg-yellow-500 w-full h-12 justify-center items-center">
                        Filters<FilterIcon className="ml-2 size-4"/>
                    </div>
                    <div className="flex flex-col  my-4 ">
                        <div className="flex items-center px-1 font-bold text-base text-orange-300 tracking-wide">
                            Type<Sword className="size-4 ml-1 mb-1"/>
                        </div>
                        <ul className="flex flex-col font-medium text-base px-5">
                            <li><Checkbox title="Pistols"/></li>
                            <li><Checkbox title="Shotgun"/></li>
                            <li><Checkbox title="SMG"/></li>
                            <li><Checkbox title="Rifle"/></li>
                            <li><Checkbox title="Battle Rifle"/></li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center px-1 font-bold text-base text-orange-300 tracking-wide">
                                Fire Mode<Flame className="size-4 ml-1 mb-1"/>
                        </div>
                        <ul className="flex flex-col font-medium text-base px-5">
                            <li><Checkbox title="Single Fire"/></li>
                            <li><Checkbox title="Burst"/></li>
                            <li><Checkbox title="Automatic"/></li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center px-1 font-bold text-base text-orange-300 tracking-wide">
                            Ammo<Flame className="size-4 ml-1 mb-1"/>
                        </div>
                    </div>
                </div>
                <div className="grid bg-blue-500 w-full ml-12">
                    Showcases
                </div>
            </div>
        </div>
    );
}