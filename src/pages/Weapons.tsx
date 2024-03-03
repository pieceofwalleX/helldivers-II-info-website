import { Navbar } from "../components/Navbar";
import { FilterIcon, Crosshair, Flame, Cross } from "lucide-react";
import { Checkbox } from "../components/ui/Checkbox";
import { useWeapon } from "../hooks/useWeapon";
import { Showcase } from "../components/ui/Showcase";


export function Weapons() {
  const { data } = useWeapon();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Erro ao carregar os dados: {error.message}</div>;

  return (
    <div className="bg-neutral-900 bg-cover bg-center">
      <Navbar page={1} />
      <div className="flex w-full  pl-64 py-28 bg-neutral-900">
        <div className="flex flex-col border-2 border-yellow-400 bg-neutral-900 rounded w-72 h-fit pb-5 font-overpass font-semibold">
          <div className="flex bg-neutral-950 w-full h-12 justify-center items-center text-lg text-red-700 ">
            Filters
            <FilterIcon className="ml-2 size-4" />
          </div>
          <div className="flex flex-col  my-4 px-2">
            <div className="flex items-center px-1 font-bold text-base text-red-500 tracking-wide">
              Type
              <Crosshair className="size-4 ml-1 mb-1" />
            </div>
            <ul className="flex flex-col font-medium text-base text-blue-200 px-5">
              <li>
                <Checkbox title="Pistols" />
              </li>
              <li>
                <Checkbox title="Shotgun" />
              </li>
              <li>
                <Checkbox title="SMG" />
              </li>
              <li>
                <Checkbox title="Rifle" />
              </li>
              <li>
                <Checkbox title="Battle Rifle" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-2">
            <div className="flex items-center px-1 font-bold text-base text-red-800 tracking-wide">
              Fire Mode
              <Flame className="size-4 ml-1 mb-1" />
            </div>
            <ul className="flex flex-col font-medium text-base px-5 text-blue-200">
              <li>
                <Checkbox title="Single Fire" />
              </li>
              <li>
                <Checkbox title="Burst" />
              </li>
              <li>
                <Checkbox title="Automatic" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-2">
            <div className="flex items-center px-1 pt-4 font-bold text-base text-red-800 tracking-wide">
              Ammo
              <Cross className="size-4 ml-1 mb-1" />
            </div>
            <ul className="flex flex-col font-medium text-base px-5 text-blue-200">
              <li>
                <Checkbox title="Default" />
              </li>
              <li>
                <Checkbox title="Energy" />
              </li>
              <li>
                <Checkbox title="Fire" />
              </li>
              <li>
                <Checkbox title="Pen" />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-neutral-950 w-full h-fit ml-12 pl-12 py-10 rounded border-2 border-yellow-400 max-w-[74rem]">
          {data?.map((weapon) => (
            <Showcase
              key={weapon.id}
              name={weapon.name}
              img={weapon.img}
              stats={[
                weapon.stats.damage,
                weapon.stats.ammo,
                weapon.stats.recoil,
                weapon.stats.fire_rate,
                weapon.stats.price,
              ]}
              color_scheme='yellow-red'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
