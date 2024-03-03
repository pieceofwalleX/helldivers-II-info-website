import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {  useWeaponByNameId, useWeaponId } from '../hooks/useWeapon';


export function WeaponDetail(){
    let {id} = useParams();


    if(!id){
        return;
    }

    const {data:weapon,isLoading,error} = useWeaponByNameId(id);

    


    if (isLoading) {
        return <div>Loading...</div>; // Retornar um componente de carregamento enquanto os dados estão sendo carregados
    }
    if(error) {
        return <div>Error</div>; // Retornar um componente de carregamento enquanto os dados estão sendo carregados
    }
       

    return(
        <div className='bg-neutral-900'>
            <Navbar page={1}/>
            <div className='flex w-full min-h-[100dvh]'>
                {weapon?.name}
            </div>
        </div>
    );

}