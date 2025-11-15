'use client';
import Icon from "../../../../public/images/Icon.png";
import Image from "next/image";
import Link from "next/link";
import BG from "../../../../public/images/BG.jpg";
import MainSec from "./main/main";
import MainMaps from "./section/maps";

export default function Footer() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${BG.src})`,
  };

  return (
    <>
      <footer id="Footer" className="h-fit py-10 pb-0 " >
        <div className="w-full"></div>
        <div className="hero-content text-neutral-content text-start w-full flex justify-center content-center items-center">
          <div className="w-full h-full text-yellow-700 md:flex justify-between p-10 bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] rounded-3xl ">
            <MainSec/>
            <MainMaps/>
          </div>
        </div>
      </footer>
    </>
  );
}
