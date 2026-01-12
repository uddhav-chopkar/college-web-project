import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../Css/aboutslider.css';

import founder1 from '../assets/founder1.jpeg';
import founder2 from '../assets/founder2.jpeg';
import founder3 from '../assets/founder3.jpeg';
import founder4 from '../assets/founder4.jpeg';
import founder5 from '../assets/founder5.jpeg';

const Aboutslider = () => {
  const founders = [
    { id: 1, name: 'Dr. Dayananda Sagar', image: founder1 },
    { id: 2, name: 'Prof. Ramesh Joshi', image: founder2 },
    { id: 3, name: 'Mrs. Nisha Patel', image: founder3 },
    { id: 4, name: 'Mr. Amit Sharma', image: founder4 },
    { id: 5, name: 'Ms. Priya Deshmukh', image: founder5 },
  ];

  return (
    <div className='about-container'>
      <div className="slider-wrapper" style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Our Founders</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {founders.map((founder) => (
            <SwiperSlide key={founder.id}>
              <div className="founder-card">
                <img src={founder.image} alt={founder.name} className="founder-img" />
                <h3 className="founder-name">{founder.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Aboutslider;
