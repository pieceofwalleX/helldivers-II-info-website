import { Showcase } from "./ui/Showcase";
import weapon1 from '../assets/sg-225.png'
import weapon2 from '../assets/AR-23 Liberator.png'
import weapon3 from '../assets/SMG-37 Defender.png'

export function Information(){
    return(
        <div className="h-[calc(100dvh-5rem)] bg-[#01212f]">
            <div className="flex flex-col items-center justify-center pt-20 gap-28">
                <div className="text-5xl text-white font-russo">
                    Best Weapons
                </div>
                <div>
                    <ul className="flex gap-44 justify-evenly">
                        <Showcase name='SG-225 Breaker' img={weapon1} stats={[330,16,30,300,20,'LAP','Warbonds']} />
                        <Showcase name='AR-23 Liberator' img={weapon2} stats={[55,45,15,640,0,'LAP','Warbonds']} />
                        <Showcase name='SMG-37 Defender' img={weapon3} stats={[70,45,10,520,15,'LAP','Warbonds']} />
                    </ul>
                </div>
            </div>
        </div>
    );
}