// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     title: "Football Championship 2026",
//     description:
//       "Experience the excitement of world-class football matches and legendary moments.",
//     details:
//       "Football is a global sport played between two teams of 11 players. It requires skill, speed, teamwork and strategy. Major tournaments include FIFA World Cup and Champions League.",
//     image:
//       "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Cricket World Battle",
//     description:
//       "Feel the thrill of every boundary, wicket, and unforgettable cricket rivalry.",
//     details:
//       "Cricket is a bat-and-ball game popular in many countries. It includes formats like Test, ODI and T20. India, Australia and England are top teams.",
//     image:
//       "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Grand Tennis Tournament",
//     description:
//       "Watch elite tennis stars compete in the most prestigious tournaments.",
//     details:
//       "Tennis is played individually or in doubles. Grand Slam tournaments include Wimbledon, US Open, Australian Open and French Open.",
//     image:
//       "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     title: "Ultimate Sports Experience",
//     description:
//       "Discover the passion, energy, and greatness of international sports.",
//     details:
//       "Sports bring people together globally. They improve health, teamwork and discipline across all age groups.",
//     image:
//       "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
//   },
// ];

// export default function HeroSlider() {
//   const [activeSlide, setActiveSlide] = useState(null);

//   return (
//     <div className="w-full relative">

//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         loop={true}
//         className="rounded-2xl overflow-hidden"
//       >

//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>

//             <div className="relative w-full h-[60vh] md:h-[70vh]">
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-black/50" />

//               <div className="absolute inset-0 flex items-center">

//                 <div className="max-w-2xl px-4 sm:px-6 md:px-16 text-white">

//                   <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
//                     {slide.title}
//                   </h1>

//                   <p className="text-xs sm:text-sm md:text-lg mb-5 text-gray-200">
//                     {slide.description}
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                     <Link href="/all-facilities">
//                       <button className="bg-cyan-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-cyan-600 transition text-xs sm:text-sm md:text-base">
//                         Expore More
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </SwiperSlide>
//         ))}

//       </Swiper>

//       {/* DETAILS MODAL */}
//       {activeSlide && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">

//           <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">

//             <button
//               onClick={() => setActiveSlide(null)}
//               className="absolute top-3 right-3 text-black font-bold"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-3">
//               {activeSlide.title}
//             </h2>

//             <p className="text-gray-600">
//               {activeSlide.details}
//             </p>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Football Championship 2026",
    description:
      "Experience the excitement of world-class football matches and legendary moments.",
    details:
      "Football is a global sport played between two teams of 11 players. It requires skill, speed, teamwork and strategy.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cricket World Battle",
    description:
      "Feel the thrill of every boundary, wicket, and unforgettable cricket rivalry.",
    details:
      "Cricket is a bat-and-ball game popular worldwide with formats like Test, ODI, and T20.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Grand Tennis Tournament",
    description:
      "Watch elite tennis stars compete in the most prestigious tournaments.",
    details:
      "Tennis includes Grand Slam events like Wimbledon and US Open.",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ultimate Sports Experience",
    description:
      "Discover the passion, energy, and greatness of international sports.",
    details:
      "Sports bring people together and build teamwork and discipline.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(null);

  return (
    <div className="w-full relative">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex items-center">

                <div className="max-w-2xl px-4 sm:px-6 md:px-16 text-white">

                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-[12px] md:text-xl px-6 md:px-0 mb-5 text-gray-200">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                    <Link href="/all-facilities">
                      <button className="bg-cyan-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-cyan-600 transition text-xs sm:text-sm md:text-base">
                        Explore More
                      </button>
                    </Link>

                  </div>

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {activeSlide && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">

            <button
              onClick={() => setActiveSlide(null)}
              className="absolute top-3 right-3 text-black font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-3">
              {activeSlide.title}
            </h2>

            <p className="text-gray-600">
              {activeSlide.details}
            </p>

          </div>
        </div>
      )}

    </div>
  );
}