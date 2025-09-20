"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sunil Raina",
    imageUrl: "/directors/SunilRaina.png",
    description: `Dr. Sunil Raina is a distinguished orthopedic and spine surgeon with 29 years of experience based in Faridabad. As Director of Medicheck Group of Hospitals, he specializes in joint replacements and complex fractures. Dr. Raina completed his MBBS from King Georges Medical College and holds MS and M.Ch degrees in Orthopedics. He pioneered joint replacement surgery in Faridabad, previously heading departments at QRG Central and Sarvodya Hospitals. Recipient of the Global Healthcare Excellence Award 2014, he also completed fellowships in UK and Germany. Dr. Raina maintains consulting roles at Apollo and Fortis Hospitals while focusing on delivering affordable, quality orthopedic care across multiple Medicheck locations.`
  },
  {
    name: "Dr. Sumit Verma",
    imageUrl: "/directors/sumit.jpg",
    description: `Dr. Sumit Verma is a highly experienced general physician and clinical embryologist based in Faridabad, India, with around 15 years of practice. He is affiliated with Medicheck Hospital, Medicheck Ortho Superspeciality Hospital, and Medicheck Multispeciality Hospital. He completed his MBBS from The Tamil Nadu Dr. M.G.R. Medical University and specialized in Echo Cardiology from Jefferson University Hospital, USA. His expertise includes ECG, cardio-related care, and treatments for fever, typhoid, dengue, acne, and hair fall. Dr. Verma practices across multiple Medicheck locations in Faridabad, such as Sector 46 and NIT. He is known for delivering reliable medical care and is a member of the Indian Medical Association (IMA), Medical Council of India (MCI), and Indian Menopause Society (IMS). His clinics offer easy access and a patient-friendly environment.`
  },
  {
    name: "Dr. Ranjeeta Gupta",
    imageUrl: "/directors/Ranjeeta.png",
    description: `Dr. Ranjeeta Gupta is a senior consultant in Obstetrics, Gynecology, and Reproductive Medicine with 18 years of experience at Medicheck Group of Hospitals. She completed her MBBS from Dr. MGR University and holds DGO certification with specialized training in IVF from Homerton University Hospital in London. A fertility expert with over 1500 successful deliveries, she has pioneered work in treating recurrent IVF failure, miscarriages, PCOS, endometriosis, and uterine fibroids. Dr. Gupta co-established multiple Medicheck facilities and is dedicated to making fertility care accessible throughout India. She maintains memberships in prestigious medical associations including IMA, FOGSI, IMS, and ISAR while actively advocating against female infanticide through community initiatives.`
  }
];

export default function DoctorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const doctor = useMemo(() => doctors[currentIndex], [currentIndex]);

  const handleNext = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const handlePrev = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const shortDescription = useMemo(
    () => doctor.description.slice(0, 250) + "...",
    [doctor.description]
  );

  return (
      <section className="bg-white py-12 px-4 sm:px-6">
  <div className="max-w-[1200px] mx-auto">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center md:text-left">
      Our Directors
    </h2>

    {/* Card */}
    <div
      key={currentIndex}
      className="flex flex-col md:flex-row gap-8 items-center animate-fade-slide"
    >
      {/* Image */}
      <div className="w-full sm:w-[280px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
        <div className="relative w-full h-[300px] sm:h-[400px]">
          <Image
            src={doctor.imageUrl}
            alt={doctor.name}
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 40vw, 280px"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
          {doctor.name}
        </h3>

        <div className="text-gray-600 text-justify leading-relaxed">
          <p
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "line-clamp-4"
            }`}
          >
            {doctor.description}
          </p>

          {doctor.description.length > 120 && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sky-600 font-semibold cursor-pointer block mt-3 text-center md:text-left hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </span>
          )}
        </div>
      </div>
    </div>

    {/* Arrows */}
    <div className="flex justify-center items-center space-x-6 mt-10">
      <button
        onClick={handlePrev}
        className="bg-sky-600 hover:bg-sky-700 text-white rounded-full p-3 sm:p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Previous doctor"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="bg-sky-600 hover:bg-sky-700 text-white rounded-full p-3 sm:p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Next doctor"
      >
        →
      </button>
    </div>
  </div>

  {/* Animation CSS */}
  <style jsx>{`
    .animate-fade-slide {
      animation: fadeSlide 0.5s ease-in-out;
    }

    @keyframes fadeSlide {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

  );
}
