import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface WeaponData {
    id:number,
    name_id:string,
    name:string,
    img:string,
    class:string,
    fire_mode: string[],
    stats:{
        damage: number,
        ammo: number,
        recoil: number,
        fire_rate: number,
        price: number,
    },
};

export function useWeapon() {
    return useQuery({
        queryKey: ["weapon"],
        queryFn: async () => {
            const res = await axios.get<WeaponData[]>(`http://localhost:8000/weapons`);
            return res.data;
        }
    });
}


export function useWeaponId(ids: number[]) {
    return useQuery({
        queryKey: ["weapons", ids], // Usando uma matriz para a chave de consulta com os IDs
        queryFn: async () => {
            const promises = ids.map(id => axios.get<WeaponData>(`http://localhost:8000/weapons/${id}`)); // Mapeando sobre os IDs para criar uma matriz de promessas
            const responses = await Promise.all(promises); // Esperando que todas as promessas sejam resolvidas
            return responses.map(res => res.data); // Retornando os dados dos responses
        }
    });
}

export function useWeaponByNameId(nameId: string) {
    return useQuery({
        queryKey: ["weapons", nameId], // Usando uma matriz para a chave de consulta com os IDs
        queryFn: async () => {
            const res = await axios.get<WeaponData[]>(`http://localhost:8000/weapons?name_id=${nameId}`);
            return res?.data[0];
        }
    });
}