"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {

  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Summer Sale 50% OFF",
      subtitle: "Grab your essentials before stock runs out!",
      bg: "/assets/banner1.png"
    },
    {
      title: "Hot Deals 🔥",
      subtitle: "Best summer products at lowest prices",
      bg: "/assets/banner2.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 sm:px-6 mt-6">
      
      <div
        className="w-11/12 mx-auto rounded-2xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center text-center transition-all duration-700"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url(${slides[index].bg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-white px-4 sm:px-6 max-w-xl">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {slides[index].title}
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg opacity-90">
            {slides[index].subtitle}
          </p>

          <Link href={"/my-products"} className="btn btn-primary mt-5 px-6">
            Shop Now
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Banner;