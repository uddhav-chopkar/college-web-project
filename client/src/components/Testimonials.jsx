import React from 'react';
import '../css/testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Software Engineer, Accenture',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'MITAOE provided me with the right skills and guidance to crack my dream job. The placement team was always supportive!'
  },
  {
    name: 'Priya Desai',
    role: 'Data Analyst, Deloitte',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The training and mock interviews helped me gain confidence. I am grateful for the opportunities I received at MITAOE.'
  },
  {
    name: 'Rahul Verma',
    role: 'Cloud Engineer, IBM',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'Excellent faculty and placement support! The campus environment motivated me to achieve my goals.'
  },
  {
    name: 'Rahul Verma',
    role: 'Cloud Engineer, IBM',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'Excellent faculty and placement support! The campus environment motivated me to achieve my goals.'
  },
   {
    name: 'Priya Desai',
    role: 'Data Analyst, Deloitte',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The training and mock interviews helped me gain confidence. I am grateful for the opportunities I received at MITAOE.'
  },
   {
    name: 'Priya Desai',
    role: 'Data Analyst, Deloitte',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The training and mock interviews helped me gain confidence. I am grateful for the opportunities I received at MITAOE.'
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Student Testimonials</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="testimonials-swiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card">
              <div className="testimonial-photo">
                <img src={t.image} alt={t.name} />
              </div>
              <div className="testimonial-text">"{t.text}"</div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
