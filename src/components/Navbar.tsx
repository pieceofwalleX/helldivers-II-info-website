import { useEffect, useState } from 'react';
import logo from '../assets/helldivers2.png';


interface props{
    page:number,
}


export function Navbar({page}: props){

    const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Verifica se o scroll é maior que um determinado valor (por exemplo, 10px)
      setIsTop(window.scrollY < 10);
    };

    // Adiciona o event listener ao scroll
    window.addEventListener('scroll', onScroll);

    // Limpa o event listener quando o componente é desmontado
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


    return(
        <div className={` sticky top-0 z-50 transition duration-300 ${isTop ? 'bg-transparent' : 'bg-[#01212f]'} h-20 flex 
        items-center justify-between px-52`}>
            <div>
                <a href='/'>
                <img src={logo} alt='Helldivers II' className='w-36'/>
                </a>
            </div>
            <div>
                <ul className='flex font-overpass font-medium text-lg text-white tracking-wider gap-24'>
                    <a href='/weapons' className={`relative hover:text-yellow-500 hover:cursor-pointer ${page == 1 ? 'text-red-400 ' : ''} `}>
                       Weapons
                    </a>
                    <a href='stratagems' className='hover:text-yellow-500 hover:cursor-pointer'>
                        Stratagems
                    </a>
                    <a href='loadouts' className='hover:text-yellow-500 hover:cursor-pointer'>
                        Loadouts
                    </a>
                </ul>
            </div>
        </div>
    );
}