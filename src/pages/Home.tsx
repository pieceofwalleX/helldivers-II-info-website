import { Hero } from "../components/Hero";
import { Information } from "../components/Information";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div>
      <Navbar page={0} />
      <Hero />
      <Information />
    </div>
  );
}
