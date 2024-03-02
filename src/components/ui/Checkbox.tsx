import {Check} from 'lucide-react'
import { useState } from 'react';

interface props{
    title:string;
}

export function Checkbox(props:props){

    const [toggle,setToggle] = useState(true);

    const hToggle = () => {
        return setToggle(!toggle);
    };

    return(
        <div className="flex gap-1.5 items-center hover:cursor-pointer" onClick={hToggle}>
            { toggle ?
            <div className="bg-neutral-800 w-3 h-3 rounded">
            </div> : 
            <div className="relative bg-neutral-950 w-3 h-3 rounded">
                <Check className='absolute text-white w-4 h-4 -top-[0.15rem]'/>
            </div>
            }
            <div className='mt-1'>
                {props.title}
            </div>
        </div>
    );
}