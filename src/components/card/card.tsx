import React from "react";

interface CardProps {
  image: string;
  title: string;
}

export default function ServiceCard({ image, title }: CardProps) {
  return (
    <div className=" bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 border-b-4 border-black shadow-xl/90 shadow-gray-600">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-black text-xl font-semibold">{title}</h4>
      </div>
    </div>
  );
}
