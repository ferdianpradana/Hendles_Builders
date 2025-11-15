"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {

  
  return (
    <div className="join flex flex-wrap justify-center gap-3">
      {/* Tombol Prev */}
      <button
        className="btn bg-yellow-200 text-black rounded-2xl"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        «
      </button>

      {/* Hanya tampilkan halaman saat ini */}
      <div className="btn bg-amber-300 text-black rounded-2xl cursor-default">
        Page {currentPage}
      </div>

      {/* Tombol Next */}
      <button
        className="btn bg-yellow-200 text-black rounded-2xl"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
}
