import {} from 'lucide-react';


interface props{
    name:string,
    img:string,
    stats:[number,number,number,number,number,string,string],
};

//Max dmg = 360
//Max capacity = 50
//Max recoil = 110
//Max firerate = 1380

function fillBox(value:number,type:number){
    switch(type){
        case 1:
            return Math.floor(value * 10 / 360);
            break;
        case 2:
            return Math.floor(value * 10 / 50);
            break;
        case 3:
            return 10 - Math.floor(value * 1 / 10);
            break;
        case 4:
            return Math.floor(value * 10 / 1380);
            break;
        default:
            return 0;
            break;
    }
}


export function Showcase(props: props){


    return(
        <div>
        <a href={`/weapons/${props.name}`}>
            <div className="border-2 rounded border-neutral-700 h-[24rem] w-80">
                <div className="flex border-b-2 border-neutral-800 h-12 justify-center items-center font-russo text-yellow-400">
                    {props.name}
                </div>
                <div className="h-42 border-b-2 border-neutral-800 ">
                    <img src={props.img} className="object-cover h-40 object-center"/>
                </div>
                <div className="bg-neutral-800 h-[calc(24rem-3rem-10.4rem)]">
                    <ul className="flex h-full w-auto">
                        <div className="flex flex-col justify-between h-full font-russo text-white border-r-2" >
                            <div className="py-2 px-1 pr-6 border-b-2">
                                Damage
                            </div>
                            <div className="py-2 px-1 pr-6 border-b-2">
                                Capacity
                            </div>
                            <div className="py-2 px-1 pr-6 border-b-2">
                                Control
                            </div>
                            <div className="py-2 px-1 pr-6 ">
                                Fire Rate
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-4/6 justify-between ">
                            {/* DMG BOXES */}
                            <div className="flex justify-between items-center  h-11 px-2">
                                {
                                    Array.from({ length: 10 }, (_, index) => (
                                        <div
                                        key={index}
                                        className={`border-2 transform -skew-x-12 px-1 py-2 ${
                                            index < fillBox(props.stats[0], 1)
                                                ? 'bg-yellow-500 border-yellow-300'
                                                : ''
                                        }`}
                                    ></div>
                                ))} 
                            </div>
                            {/* CAPACITY */}
                            <div className="flex justify-between items-center  h-11 px-2">
                                {
                                    Array.from({ length: 10 }, (_, index) => (
                                        <div
                                        key={index}
                                        className={`border-2 transform -skew-x-12 px-1 py-2 ${
                                            index < fillBox(props.stats[1], 2)
                                                ? 'bg-yellow-500 border-yellow-300'
                                                : ''
                                        }`}
                                    ></div>
                                ))} 
                            </div>
                            {/* Recoil */}
                            <div className="flex justify-between items-center  h-11 px-2">
                                {
                                    Array.from({ length: 10 }, (_, index) => (
                                        <div
                                        key={index}
                                        className={`border-2 transform -skew-x-12 px-1 py-2 ${
                                            index < fillBox(props.stats[2], 3)
                                                ? 'bg-yellow-500 border-yellow-300'
                                                : ''
                                        }`}
                                    ></div>
                                ))} 
                            </div>
                            {/* Fire Rate */}
                            <div className="flex justify-between items-center  h-11 px-2">
                                {
                                    Array.from({ length: 10 }, (_, index) => (
                                        <div
                                        key={index}
                                        className={`border-2 transform -skew-x-12 px-1 py-2 ${
                                            index < fillBox(props.stats[3], 4)
                                                ? 'bg-yellow-500 border-yellow-300'
                                                : ''
                                        }`}
                                    ></div>
                                ))} 
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </a>
            <div className="flex ml-[calc(20rem-14rem)] items-center justify-center w-28 border-r-2 border-l-2 border-b-2 rounded-b
            border-neutral-700 h-[calc(26rem-3rem-10rem-11rem)] font-overpass font-bold text-base text-white">
                +
            </div>
        </div>
    );
}