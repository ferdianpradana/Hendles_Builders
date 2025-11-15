"use client";
import React, { useEffect, useState } from "react";
import Card from "../../../../components/card/card";
import Pagination from "../../../../components/pagination/pagination";
import { services } from "../../../../data/services";

export default function ServiceContent() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 768 ? 8 : 6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(services.length / visibleCount);
  const startIndex = (currentPage - 1) * visibleCount;
  const visibleServices = services.slice(startIndex, startIndex + visibleCount);

  // 🟢 Tambahkan function ini
  const handlePageChange = (page: number) => {
  setCurrentPage(page);

};
  return (
    <div className="flex flex-col items-center gap-10 min-h-[80vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleServices.map((item) => (
          <Card key={item.id} image={item.image ?? ""} title={item.title} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} // 🔁 gunakan function baru ini
      />
    </div>
  );
}
