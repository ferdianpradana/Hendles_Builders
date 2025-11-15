import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  message: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  message,
  image,
}: Testimonial) {
  const [imgSrc, setImgSrc] = useState(
    image ||
      "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
  );

  return (
    <div className="bg-gradient-to-r from-[#ab6023] via-[#944066] to-[#bc5353] rounded-2xl shadow-md p-6 w-full max-w-sm hover:shadow-lg transition-all duration-300 min-h-52 ">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <Image
            src={imgSrc}
            alt={name}
            width={56}
            height={56}
            className="object-cover w-full h-full"
            onError={() =>
              setImgSrc(
                "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
              )
            }
          />
        </div>
        <div className="text-start">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-100 font-light">
            {role}
            {company && ` • ${company}`}
          </p>
        </div>
      </div>

      <p className="text-gray-100 text-sm leading-relaxed italic">
        “{message}”
      </p>
    </div>
  );
}
