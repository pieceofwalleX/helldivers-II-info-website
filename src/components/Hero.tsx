import logo from '../assets/helldivers2.png'

export function Hero(){
    return(
        <div className="-mt-20 h-[calc(100dvh)] bg-black bg-hero-pattern bg-cover bg-center select-none">
            <div className='flex flex-col items-center py-24 font-russo font-normal'>
                <div className='text-4xl text-white '>
                    FOR
                </div>
                <div className='text-8xl text-white'>
                    DEMOCRACY
                </div>
            </div>
            <img src={logo} className='absolute w-[25rem] bottom-12 left-[calc(50dvw-12.5rem)]'/>
        </div>
    );
}