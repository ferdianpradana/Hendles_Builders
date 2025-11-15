import BG from "../../../public/images/BG.svg";
import Icon from "../../../public/images/Icon.png";
import Image from "next/image";
import Link from 'next/link'
 
export default function Hero() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${BG.src})`,
  };

  return (
    <>
      <div className="hero min-h-screen" style={backgroundImageStyle}>
        <div className="w-full"></div>
        <div className="hero-content text-neutral-content text-start w-full md:p-20 sm-p-5">
          <div className="w-full">
            <div className="flex mb-20 md:mb-44 items-center content-center justify-start text-center">
              <Image
                src={Icon}
                alt="Example Image"
                width={20}
                height={20}
              />
              <h1 className="pl-1 font-extrabold text-white font-PublicSans">Hendles Builders</h1>
            </div>
            <div className="max-w-2/4">
              <h2 className="font-PublicSans mb-5 text-5xl font-bold text-start text-white leading-[1.2] md:leading-normal">
                Revitalize your historic structure
              </h2>
            </div>
            <Link href={'/Home'}> 
            <button className="font-PublicSans btn btn-primary bg-white text-black justify-start flex border-none">
              GET IN TOUCH
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
