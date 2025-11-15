"use client";
import Image from "next/image";
import Buildings from "../../../../public/images/Building.png";
import { useEffect } from "react";
import AOS from "aos";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // biar setiap scroll muncul lagi
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(at 10.15% 20.46%, #ffffff 0px, transparent 30%), radial-gradient(at 90.55% 52.86%, #ffffff 0px, transparent 20%), #fffff",
        }}
        id="About"
        className="hero min-h-screen text-yellow-300 md:max-h-screen h-auto"
      >
        <div className="w-full"></div>
        <div className="md:pl-18 hero-content text-neutral-content text-start w-full md:p-0 md:py-0 sm-p-5 md:pr-3 flex justify-between h-auto">
          <div className="w-full md:justify-between md:flex ">
            <div className="md:max-w-2/4 flex flex-col justify-center w-full">
              <div className="flex items-center content-center justify-start text-center"></div>
              <div
                className=""
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h3 className="font-PublicSans mb-5 text-3xl font-bold text-start text-yellow-900 leading-[1.2] md:leading-normal">
                  We are a local business focusing on historic preservation,
                  using traditional materials and techniques.
                </h3>
                <p className="text-yellow-700">
                  Our passion lies in bringing history back to life. With a deep
                  respect for heritage and detail, we use traditional materials
                  and proven techniques to restore buildings with authenticity
                  and care.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="md:flex md:justify-end w-full mt-8 md:mt-0 md:w-1/2 flex justify-center"
            >
              <Image src={Buildings} alt="Building" width={450} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
