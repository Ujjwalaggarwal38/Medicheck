'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const achievements = [
  { title: "1000+ Successful Surgeries", image: "/achieve1.jpg" },
  { title: "NABH Accreditation", image: "/achieve2.jpg" },
];

const testimonials = [
  { name: "Ravi Kumar", text: "Excellent care and facilities!", photo: "/patient1.jpg" },
  { name: "Seema Sharma", text: "Doctors are very professional and kind.", photo: "/patient2.jpg" },
];

export default function HospitalBlogPage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/hospital-hero.jpg"
          alt="Hospital"
          fill
          loading="eager"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-4">
          <h1 className={`text-white text-3xl md:text-5xl font-bold`}>
            Welcome to Medicheck Hospital
          </h1>
        </div>
      </div>

      {/* SPECIALIZATION PARAGRAPH */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <p className={`text-lg md:text-xl transition-opacity duration-1000 ease-in ${showText ? 'opacity-100' : 'opacity-0'}`}>
          At Medicheck Hospital, we specialize in cardiology, neurology, orthopedics, and emergency care. Our mission is to deliver top-notch medical services with compassion and care.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="bg-[#e4f3fd] py-10">
        <h2 className="text-2xl font-semibold text-center text-[#0156a3] mb-6">Gallery</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="w-full max-w-5xl mx-auto"
        >
          {['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg'].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ACHIEVEMENTS */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#0156a3] mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
              <Image src={a.image} alt={a.title} width={600} height={400} className="rounded-lg mb-4" loading="lazy" />
              <h3 className="text-lg font-bold text-[#004282]">{a.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 px-4 bg-[#f0f8ff] max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#0156a3] mb-6">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image src={t.photo} alt={t.name} width={60} height={60} className="rounded-full" loading="lazy" />
                <h3 className="text-lg font-semibold text-[#004282]">{t.name}</h3>
              </div>
              <p className="text-sm text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
