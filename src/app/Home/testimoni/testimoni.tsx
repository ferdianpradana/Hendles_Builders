"use client"
import { useEffect } from "react";
import Content from "./content/content";
import Aos from "aos";
export default function Testimoni() {
  useEffect(() => {
    // Inisialisasi ulang setiap kali halaman di-mount
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // biar setiap scroll muncul lagi
    });

    // Pastikan AOS aware sama semua elemen yang baru render
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }, []);

  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(at 10.15% 30.46%, #ffffff 0px, transparent 20%), radial-gradient(at 90.55% 52.86%, #ffffff 0px, transparent 20%), #ffffff",
        }}
        className=" hero min-h-screen text-yellow-300 md:max-h-screen h-auto my-10 mb-30"
      >
        <div className="w-full"></div>
        <div className="hero-content text-neutral-content text-start w-full md:p-0 md:py-0 sm-p-5 flex justify-between h-auto">
          <div className="w-full md:justify-between md:flex ">
            <div className="md:max-w-full flex flex-col justify-center w-full">
              <div className="flex items-center content-center justify-start text-center"></div>
              <div className="w-full flex content-center items-center text-center justify-center">
                <div className="flex-col">
                  <div
                    className="text-black text-3xl font-bold w-full flex flex-col justify-center"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <h2 className="text-yellow-700 text-start md:text-center">
                      Our trusted
                      <span className="ml-2 text-white bg-gradient-to-tr from-pink-400  to-orange-500 p-2 rounded-2xl">
                        clients
                      </span>
                    </h2>
                    <div className="w-full flex justify-center items-center pt-2">
                      <p className="md:w-1/2 text-start md:text-center font-medium text-gray-600 text-2xl">
                        our mission is to drive progress and enhance the lives
                        of our customers by delivering superior product and
                        services that exceed expectations
                      </p>
                    </div>
                  </div>
                  <div>
                    <Content />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
