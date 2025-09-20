'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import HospitalIntro from './HospitalIntro';
import 'swiper/css';
import SpecialitiesSection from '../homepage/SpecialitiesBanner';
import OurHospitalsSection from '../homepage/OurHospitalsBanner';
import AdvancedTechSection from '../homepage/AdvancedTechBanner';
import AchievementsSection from './Achivement';
import FadeInWhenVisible from "../FadeInWhenVisible";
import DoctorTeamBanner from "@/component/homepage/DoctorTeamBanner";
import ContactForm from '../ContactInfo/ContactInfo';
import { FaStethoscope } from "react-icons/fa6";

const hospitalData = {
  'medicheck-nit': {
    name: 'Medicheck Hospital',
    heroImage: '/trial.mp4',
    specializations: 'Cardiology, Neurology, Orthopedics, Emergency',
    gallery: ['/trial2.jpg', '/technology/tech4.jpg'],
    stats: [
      { label: "Total Beds", value: "105+", icon: "/NavbarIcon/hsBed.svg" },
      { label: "ICU Beds", value: "38+", icon: "/NavbarIcon/heart.svg" },
      { label: "Doctors", value: "22+", icon: "/NavbarIcon/doctor.svg" },
      { label: "Support Staff", value: "300+", icon: "/NavbarIcon/nurseStaff.svg" },
    ],
    achievements: {
      technology: [
        { title: 'Robotic Surgery Enabled', image: '/technology/robotics.jpg' },
        { title: 'AI Diagnostics', image: '/technology/ai-diagnosis.jpg' },
      ],
      ventures: [
        { title: 'Operation Theater', image: '/venture/ot.jpeg' },
        { title: 'Diagnostics Lab', image: '/venture/tr4.jpg' },
        { title: 'Emergency', image: '/venture/trial3.jpg' },
        { title: 'Medical', image: '/venture/medical.jpg' },
        { title: 'Reception', image: '/venture/reception.jpg' },

      ],
      accreditations: [
        { title: 'JCI Certified Hospital', image: '/accreditations/achive.jpg' },
        { title: 'NABH Certified Nursing', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Blood Bank', image: '/accreditations/achive.jpg' },
        { title: 'JCI Certified Hospital', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Nursing', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Blood Bank', image: '/accreditations/ab.jpg' },
      ],
    },
    testimonials: [
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
    ],
  },

  'medicheck-sector-46': {
    name: 'Medicheck Ortho Superspeciality Hospital',
    heroImage: '/hospital-46.jpg',
    specializations: 'Pediatrics, Gynaecology, ENT',
    gallery: ['/s46-1.jpg'],
    stats: [
      { label: "Total Beds", value: "105+", icon: "/NavbarIcon/hsBed.svg" },
      { label: "ICU Beds", value: "38+", icon: "/NavbarIcon/heart.svg" },
      { label: "Doctors", value: "22+", icon: "/NavbarIcon/doctor.svg" },
      { label: "Support Staff", value: "300+", icon: "/NavbarIcon/nurseStaff.svg" },
    ],
    achievements: {
      technology: [
        { title: 'Modern NICU Facility', image: '/technology/nicu.jpg' },
        { title: 'Smart Pediatric Monitoring', image: '/technology/pediatric-monitor.jpg' },
      ],
      ventures: [
        { title: 'Medicheck ENT Center', image: '/ventures/ent.jpg' },
      ],
      accreditations: [
        { title: 'NABH Certified Hospital', image: '/accreditations/nabh-hospital.jpg' },
        { title: 'NABH Accredited Gynaecology Dept.', image: '/accreditations/nabh-gyne.jpg' },
      ],
    },
    testimonials: [
      { name: 'Seema Sharma', text: 'Very professional.', photo: '/patient2.jpg' },
    ],
  },
  'medicheck-palwal': {
    name: 'Medicheck Institute of Medical Sciences',
    heroImage: '/trial.mp4',
    specializations: 'Cardiology, Neurology, Orthopedics, Emergency',
    gallery: ['/trial2.jpg', '/technology/tech4.jpg'],
    stats: [
      { label: "Total Beds", value: "105+", icon: "/NavbarIcon/hsBed.svg" },
      { label: "ICU Beds", value: "38+", icon: "/NavbarIcon/heart.svg" },
      { label: "Doctors", value: "22+", icon: "/NavbarIcon/doctor.svg" },
      { label: "Support Staff", value: "300+", icon: "/NavbarIcon/nurseStaff.svg" },
    ],
    achievements: {
      technology: [
        { title: 'Robotic Surgery Enabled', image: '/technology/robotics.jpg' },
        { title: 'AI Diagnostics', image: '/technology/ai-diagnosis.jpg' },
      ],
      ventures: [
        { title: 'Operation Theater', image: '/venture/ot.jpeg' },
        { title: 'Diagnostics Lab', image: '/venture/tr4.jpg' },
        { title: 'Emergency', image: '/venture/trial3.jpg' },
        { title: 'Medical', image: '/venture/medical.jpg' },
        { title: 'Reception', image: '/venture/reception.jpg' },

      ],
      accreditations: [
        { title: 'JCI Certified Hospital', image: '/accreditations/achive.jpg' },
        { title: 'NABH Certified Nursing', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Blood Bank', image: '/accreditations/achive.jpg' },
        { title: 'JCI Certified Hospital', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Nursing', image: '/accreditations/ab.jpg' },
        { title: 'NABH Certified Blood Bank', image: '/accreditations/ab.jpg' },
      ],
    },
    testimonials: [
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
      { name: 'Ravi Kumar', text: 'Excellent care Download and use 100+ Testimonial stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ', photo: '/testimonial/tst.jpg' },
    ],
  },

};

export default function HospitalBlogPage({ branch }) {
  const [showText, setShowText] = useState(false);
  const data = hospitalData[branch] || hospitalData['medicheck-nit']; 
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}

      <div >
        <HospitalIntro data={data} />
      </div>

      {/* SPECIALIZATION */}
      <FadeInWhenVisible className="md:py-12">
        <h1 className="text-center text-2xl font-semibold  text-[#0156a3] m-1">Centre of Excellence</h1>
        <SpecialitiesSection />
      </FadeInWhenVisible>


      <FadeInWhenVisible className="bg-sky-100" >
        <AdvancedTechSection />
      </FadeInWhenVisible>

      {/* Our Doctor */}
      <FadeInWhenVisible className="bg-white">
        <DoctorTeamBanner />
      </FadeInWhenVisible>


      {/* ACHIEVEMENTS */}
      <FadeInWhenVisible className="bg-sky-100 ">
        <AchievementsSection data={hospitalData[branch].achievements} />
      </FadeInWhenVisible>




      {/* TESTIMONIALS */}
      <FadeInWhenVisible className="py-10  max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#0156a3] mb-6">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                {/* <Image src={t.photo} alt={t.name} width={100} height={10} className="rounded-md" /> */}
                <div className="relative w-[400px] group overflow-hidden rounded-md">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={100}
                    height={10}
                    className="rounded-md transition-all duration-300 group-hover:scale-110 group-hover:z-10 relative" // Added relative here
                  />

                  {/* Shine/Sprinkle Effect */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-white opacity-20 animate-shine"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{t.text}</p>

              </div>
              <h3 className="text-lg font-semibold text-[#004282]">{t.name}</h3>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>




      <FadeInWhenVisible>
        {/* <OurHospitalsSection /> */}
      </FadeInWhenVisible>

      {/* GALLERY */}
      <FadeInWhenVisible className="pt-5 ">
        <h2 className="text-2xl font-semibold text-center text-[#0156a3] mb-6">Gallery</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="w-full "
        >
          {data.gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative  h-64 md:h-126">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeInWhenVisible>

      {/* Contact info */}
      <FadeInWhenVisible>
        <ContactForm />
      </FadeInWhenVisible>
    </div>
  );
}
