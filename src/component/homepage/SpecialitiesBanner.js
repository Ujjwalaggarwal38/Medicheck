'use client';
import React, { useEffect, useRef } from 'react';
import {
  FaBrain,
  FaCapsules,
  FaBone,
  FaHeart,
  FaEye,
  FaTeeth,
  FaStethoscope,
  FaFlask,
} from 'react-icons/fa';

const specialities = [
  { name: 'Neurology', icon: <FaBrain />, link: '/neurology' },
  { name: 'Medicine', icon: <FaCapsules />, link: '/medicine' },
  { name: 'Orthopedics', icon: <FaBone />, link: '/orthopedics' },
  { name: 'Cardiology', icon: <FaHeart />, link: '/cardiology' },
  { name: 'Ophthalmology', icon: <FaEye />, link: '/ophthalmology' },
  { name: 'Dentistry', icon: <FaTeeth />, link: '/dentistry' },
  { name: 'General Checkup', icon: <FaStethoscope />, link: '/checkup' },
  { name: 'Lab Tests', icon: <FaFlask />, link: '/lab' },
];

const SpecialitiesSection = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 0.35;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationFrame;

    const scrollLoop = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(scrollLoop);
    };

    animationFrame = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const infiniteList = [...specialities, ...specialities];

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-10 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden">
          {/* Blur effect left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-sky-50 to-transparent z-10" />

          {/* Blur effect right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-sky-50 to-transparent z-10" />

          <div className="w-full overflow-hidden">
            <div
              ref={containerRef}
              className="flex whitespace-nowrap will-change-transform shadow-md"
              style={{ transition: "none" }}
            >
              {infiniteList.map((speciality, index) => (
                <a
                  key={index}
                  href={speciality.link}
                  className="group flex-shrink-0 flex items-center space-x-3 bg-white rounded-full px-6 py-3 border border-sky-200 hover:border-sky-400 hover:shadow-lg mx-2 transition-all duration-300"
                  style={{ minWidth: "220px" }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 group-hover:bg-sky-600 transition-colors duration-300">
                    <span className="text-sky-600 group-hover:text-white text-xl">
                      {speciality.icon}
                    </span>
                  </div>
                  <span className="text-sky-800 font-semibold group-hover:text-sky-600 transition-colors duration-300">
                    {speciality.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Button - optional */}
        {/* <div className="flex justify-center mt-10">
      <a
        href="/specialities"
        className="bg-sky-600 text-white rounded-full px-8 py-3 flex items-center space-x-2 hover:bg-sky-700 transition-colors duration-300 shadow-md"
      >
        <span>View All Specialities</span>
        <span className="text-lg">&rarr;</span>
      </a>
    </div> */}
      </div>
    </section>

  );
};

export default SpecialitiesSection;
