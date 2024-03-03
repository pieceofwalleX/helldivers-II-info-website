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
            <div className="bg-red-700 w-3 h-3 rounded">
            </div> : 
            <div className="relative bg-black w-3 h-3 rounded">
                <Check className='absolute text-white w-5 h-5 -top-[0.30rem] -left-[0.1rem]'/>
            </div>
            }
            <div className='mt-1'>
                {props.title}
            </div>
        </div>
    );
}