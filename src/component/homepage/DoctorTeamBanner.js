"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Ajay Kumar",
    speciality: "Pediatrician",
    image: "/doctors/AjayKumar.jpg",
    link: "/errorfallback"
  },
  {
    name: "Dr. B.C. Gupta",
    speciality: "Pathologist",
    image: "/doctors/BCGupta.jpg",
    link: "/errorfallback"
  },
  {
    name: "Dr. Ranjeeta Gupta",
    speciality: "Gynaecologist",
    image: "/doctors/RanjeetaGupta.jpg",
    link: "/errorfallback"
  },
  {
    name: "Dr. Rakhi Mehta",
    speciality: "Gynaecologist",
    image: "/doctors/Rakhi_Nit.jpg",
    link: "/errorfallback"
  },
  {
    name: "Dr. Gourav Mahendra",
    speciality: "Dentist",
    image: "/doctors/Gourav.jpg",
    link: "/errorfallback"
  }
];

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredDoctors.length);
  }, [filteredDoctors.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredDoctors.length) % filteredDoctors.length
    );
  }, [filteredDoctors.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (filteredDoctors.length > 1) handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredDoctors.length, handleNext]);

  const getPositionClass = (index) => {
    const total = filteredDoctors.length;
    const position = (index - currentIndex + total) % total;

    if (total === 1) return "z-10 scale-100 opacity-100";
    if (position === 0) return "-translate-x-[120%] scale-90 opacity-50 z-0";
    if (position === 1) return "translate-x-0 scale-100 opacity-100 z-10";
    if (position === 2) return "translate-x-[120%] scale-90 opacity-50 z-0";
    return "hidden md:block opacity-0";
  };

  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => {
      router.push("/doctors");
    }, 100);
  };

  return (
    <section
      id="doctorInfo"
      className=" py-8"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 mb-6">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Our Doctors
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              At MediCheck Hospital, Faridabad, our doctors are more than
              medical professionals—they are compassionate healers...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search by name or speciality"
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setSearchTerm("")}
              className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition-shadow shadow-md"
            >
              Show All
            </button>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="flex items-center justify-center relative min-h-[500px] md:min-h-[650px] w-full overflow-hidden mb-6">
          {filteredDoctors.length === 0 ? (
            <p className="text-gray-500 text-xl">No doctors found.</p>
          ) : (
            filteredDoctors.map((doctor, index) => (
              <Link
                href={doctor.link}
                key={index}
                className={`absolute transition-all duration-700 ease-in-out transform w-[365px] md:w-[500px] aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-2xl ${getPositionClass(
                  index
                )}`}
              >
                {/* Image Section */}
                <div className="relative w-full h-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-center"
                  />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 w-full bg-white bg-opacity-80 px-4 py-6 backdrop-blur-md shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-700 text-sm">{doctor.speciality}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="flex items-center justify-center mt-4">
            <button  onClick={handleClick} className="bg-sky-600 text-white cursor-pointer px-6 py-3 rounded-full hover:bg-sky-700 transition-all duration-300 shadow">
              View All Doctors →
            </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
