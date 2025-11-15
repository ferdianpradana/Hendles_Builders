"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "../../../../components/testiCard/testiCards";
import { testimonials } from "../../../../data/testimonials";
import Pagination from "../../../../components/pagination/pagination"; // sesuaikan path pagination kamu
import Aos from "aos";

export default function TestimonialsSection() {
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

  const itemsPerPage = 6; // tampil 6 card per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // ambil data sesuai halaman aktif
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Testimonial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center  min-h-[30rem]">
          {currentTestimonials.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <TestimonialCard key={index} {...item} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
