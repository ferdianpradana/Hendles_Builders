"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentServices from "../service/content/content";

export default function Services() {
  useEffect(() => {
    // Inisialisasi ulang setiap kali halaman di-mount
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // biar setiap scroll muncul lagi
    });

    // Pastikan AOS aware sama semua elemen yang baru render
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div
      id="Service"
      className="hero min-h-screen text-yellow-300 h-auto"
      style={{
        background:
          "radial-gradient(at 10.25% 15.26%, #ffffff 0px, transparent 10%), radial-gradient(at 90.55% 30.86%, #ffffff 0px, transparent 20%), #ffffff",
      }}
    >
      <div className="hero-content text-neutral-content text-start w-full md:p-20 sm:p-5 flex flex-col h-auto">
        <div className="w-full my-10 font-PublicSans flex justify-between items-center content-center text-start">
          <div className="max-w-1/2">
            <h3
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4"
            >
              What we can do for you
            </h3>
          </div>
          <div className="max-w-1/2">
            <p className="text-yellow-700 font-light text-lg"
             data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1000">
              At Hendles Builders, we’re all about turning your ideas into
              solid, lasting results...
            </p>
          </div>
        </div>
        <div 
        data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="1900">
          <ContentServices />
        </div>
      </div>
    </div>
  );
}
