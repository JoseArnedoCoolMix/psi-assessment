import Image from "next/image";
import MainNav from "./MainComponents/MainNav";
import MobileNav from "./MainComponents/MobileNav";
import HomeComponent from "./Components/HomeMainComponent";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full">
        <HomeComponent />
      </div>
    </div>
  );
}
