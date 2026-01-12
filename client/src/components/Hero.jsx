import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../CSS/carousal.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Main App component for the carousel
function Hero() {
  const images = [
    "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?_gl=1*jmqhfb*_ga*MTk2MTc3OTYyMy4xNzQ2NDQwOTg0*_ga_8JE65Q40S6*czE3NTM1MjM4NTYkbzckZzEkdDE3NTM1MjM4NzAkajQ2JGwwJGgw",
    "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?_gl=1*xa51wx*_ga*MTk2MTc3OTYyMy4xNzQ2NDQwOTg0*_ga_8JE65Q40S6*czE3NTM1MjM4NTYkbzckZzEkdDE3NTM1MjM5NjIkajMxJGwwJGgw",
    "https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?_gl=1*1nyanbg*_ga*MTk2MTc3OTYyMy4xNzQ2NDQwOTg0*_ga_8JE65Q40S6*czE3NTM1MjM4NTYkbzckZzEkdDE3NTM1MjQwMDEkajUzJGwwJGgw",
    "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?_gl=1*1dy3tgo*_ga*MTk2MTc3OTYyMy4xNzQ2NDQwOTg0*_ga_8JE65Q40S6*czE3NTM1MjM4NTYkbzckZzEkdDE3NTM1MjQwNDgkajYkbDAkaDA.",
    "https://images.pexels.com/photos/7317589/pexels-photo-7317589.jpeg?_gl=1*1i7vp11*_ga*MTk2MTc3OTYyMy4xNzQ2NDQwOTg0*_ga_8JE65Q40S6*czE3NTM1MjM4NTYkbzckZzEkdDE3NTM1MjQwODQkajQ1JGwwJGgw",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Swiper
        // Swiper modules to use
        modules={[Pagination, Navigation, Autoplay]}
        // Space between slides
        spaceBetween={30}
        // Number of slides per view
        slidesPerView={1}
        // Enable pagination dots
        pagination={{ clickable: true }}
        // Enable navigation arrows
        // Enable autoplay with a delay and disable interaction on touch
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // Loop through slides
        loop={true}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        className="mySwiper w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x400/CCCCCC/000000?text=Image+Load+Error`;
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
