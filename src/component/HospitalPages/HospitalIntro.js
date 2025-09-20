"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import PopupModal from '../PopupModal/PopupModal';
import MessengerForm from '../PopupModal/MessangerForm';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { toggleMessengerForm } from "@/Redux/modalSlice";



export default function HospitalIntro({ data }) {
  const containerRef = useRef(null);
  const dispatch= useDispatch();

  const formButton=[
              { label: "Book Appointment", color: "from-[#3db5ff] to-[#0077cc]", type:'appointment'},
              { label: "Second Opinion", color: "from-[#ffda77] to-[#ff9900]", type:'second_opinion' },
              { label: "Book Health Checkup", color: "from-[#90ee90] to-[#00cc66]", type:'health_checkup'},
              { label: "Emergency", color: "from-[#ff9a9e] to-[#ff6a88]", type:'emergency' },
            ]

 return (
    <section className="text-gray-800">

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={data.heroImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={data.heroImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#004282]/80 z-10" />

        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col items-center justify-end h-full pb-25 px-4 text-center">

          {/* Action Buttons */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl px-4">
            {formButton.map((btn, idx) => (
             <button
             key={idx}
             onClick={() => {
               if (btn.type === 'emergency') {
                 window.location.href = 'tel:8010800100';
               } else {
                 dispatch(toggleMessengerForm(true));
               }
             }}
             className={`relative flex items-center justify-center text-white font-semibold py-3 px-6 rounded-full
                         bg-gradient-to-br ${btn.color} 
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300 ease-out
                         hover:scale-105 overflow-hidden group`}
           >
             <span className="relative z-10 flex items-center">
               <span className="mr-2">{btn.label}</span>
               <span className="transform transition-transform group-hover:translate-x-1">→</span>
             </span>
           
             {/* Shine Effect */}
             <span
               className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-700 ease-out"
             />
           </button>
           
            ))}
          </div>



        </div>
      </div>

      {/* Hospital Overview with animation */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1280px] md:py-10 mx-auto px-4 md:px-20 mt-10 md:mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-6 md:p-10 rounded-xl ">
          <div className="md:col-span-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#004282]">{data.name}</h2>
            <button className="mt-2 text-[#e63946] font-semibold flex items-center hover:underline">
              Get Directions <span className="ml-1">➔</span>
            </button>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Spread across an area of <strong>2.58 acres</strong>, <strong>{data.name}</strong> is one of the largest
              multi-super-specialty hospitals in the region. Built with the aim to provide the highest standard of tertiary healthcare, it combines internationally acclaimed doctors, advanced technology, and integrated infrastructure to deliver world-class, affordable, and patient-centric care.
            </p>
          </div>
        </div>
      </motion.div> */}
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="max-w-[1280px] mx-auto px-6 md:px-20 mt-16"
>
  <div className="relative bg-gradient-to-r from-[#f0f4f8] to-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-12">
    {/* Gradient Accent Bar */}
    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1270CC] to-[#004282] rounded-l-2xl"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Side: Title & Button */}
      <div className="md:col-span-1 flex flex-col justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#004282] mb-4">
          {data.name}
        </h2>
        <button className="mt-4 px-6 py-3 rounded-xl font-semibold text-white 
                           bg-gradient-to-r from-[#1270CC] to-[#004282] 
                           shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out
                           relative overflow-hidden group">
          <span className="relative z-10 flex items-center gap-2">
            Get Directions <span>➔</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
                           translate-x-[-100%] group-hover:translate-x-[100%]
                           transition-transform duration-700 ease-out" />
        </button>
      </div>

      {/* Right Side: Description */}
      <div className="md:col-span-2 flex items-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Spread across an area of <strong>2.58 acres</strong>, <strong>{data.name}</strong> is one of the largest
          multi-super-specialty hospitals in the region. Built with the aim to provide the highest standard of tertiary healthcare, it combines internationally acclaimed doctors, advanced technology, and integrated infrastructure to deliver world-class, affordable, and patient-centric care.
        </p>
      </div>
    </div>

    {/* Optional: Subtle floating circles for premium feel */}
    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#1270CC]/10 animate-pulse-slow"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#004282]/5 animate-pulse-slow"></div>
  </div>
</motion.div>

      {/* Stats Section */}
      {/* <div className="mt-10 bg-sky-100 py-10 relative">
        <div
          ref={containerRef}
          className="flex sm:grid sm:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 sm:px-0 overflow-x-auto sm:overflow-visible scrollbar-hide scroll-smooth"
        >
          {data.stats.map((stat, index) => (
            <div
              key={index}
              className="min-w-[70%] flex items-center justify-center sm:min-w-0 sm:w-full flex items-center space-x- bg-sky-50 p-4 rounded-lg shadow-sm mx-auto"
            >
              <div className="w-14 h-14 mx-3 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#002B5B]">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className="mt-16 bg-gradient-to-b from-[#f0f8ff] to-white py-16 relative">
  <div
    ref={containerRef}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 sm:px-0"
  >
    {data.stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="bg-white/60 backdrop-blur-lg hover:scale-105 transition-transform duration-300 rounded-2xl shadow-xl p-6 flex items-center gap-4 cursor-pointer group"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <Image
            src={stat.icon}
            alt={stat.label}
            width={32}
            height={32}
            className="w-full"  
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#002B5B]">
            {stat.value}
          </h3>
          <p className="text-base md:text-lg text-gray-600">{stat.label}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Optional: Background accents */}
  <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1270CC]/10 rounded-full animate-pulse-slow"></div>
  <div className="absolute -bottom-16 -right-10 w-40 h-40 bg-[#004282]/5 rounded-full animate-pulse-slow">
  </div>
</div>

    </section>
  );
}
