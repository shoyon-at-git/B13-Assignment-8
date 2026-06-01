"use client";
import "animate.css";
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
        className="w-11/12 mx-auto rounded-2xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center text-center transition-all duration-700 animate__animated animate__fadeIn"
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
          
          <h1
  key={slides[index].title}
  className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight animate__animated animate__fadeInDown"
>
  {slides[index].title}
</h1>

          <p
  key={slides[index].subtitle}
  className="mt-3 text-sm sm:text-base md:text-lg opacity-90 animate__animated animate__fadeInUp"
>
  {slides[index].subtitle}
</p>

          <Link
  href="/my-products"
  className="btn btn-primary mt-5 px-6 animate__animated animate__pulse animate__infinite"
>
  Shop Now
</Link>

        </div>
      </div>

    </div>
  );
};

export default Banner;