import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';                     
import 'swiper/css/autoplay';            
import { Autoplay } from 'swiper/modules';
import '../CSS/Swiper.css';              

const enquiryTopics = [
  "Admissions Process", "Courses Offered", "Departments Info", "Fee Structure",
  "Important Dates", "Campus Facilities", "Hostel & Transport", "Placement Cell",
  "Internships & Collaboration", "Online Learning", "Application Guide",
  "Scholarships & Aid", "Foreign Students", "Meet Faculty", "Portal Help",
  "Helpdesk & Support", "Extra-Curricular", "Tech Clubs", "Engineering Fields",
  "Medical & Health", "Design & Arts", "Business & Management", "Career Guidance",
  "Workshops & Labs", "Research Support", "Transfer Rules", "Alumni Association",
  "Online Payment", "Disability Support", "Office Hours"
];

export default function EnquirySwiper() {
  return (
    <div className="enquiry-swiper-container">
      <h2 className="swiper-title">Quick Enquiry Topics</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="swiper"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {enquiryTopics.map((topic, index) => (
          <SwiperSlide key={index}>
            <div className="enquiry-card">
              <h3>{topic}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
