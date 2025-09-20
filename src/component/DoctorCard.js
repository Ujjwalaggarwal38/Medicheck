'use client';
import Image from 'next/image';

export default function DoctorCard({ doctor, reverse = false }) {
  const fallbackImage = "/default-doctor.jpg"; 

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center bg-[#e4f3fd] rounded-xl shadow-md overflow-hidden p-6 md:p-8 gap-6`}
    >
      {/* Doctor Image using Next.js Image */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
        <Image
          src={doctor.image || fallbackImage}
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100px, 192px"
          loading="lazy"
          
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-[var(--font-lato)] text-[#004282]">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-700 font-semibold">
          {doctor.specialty}
        </p>
        <p className="mt-2 text-sm text-gray-600 font-[var(--font-poppins)] line-clamp-4">
          {doctor.description}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center md:justify-start gap-4">
          <button className="px-4 py-2 bg-[#0156a3] text-white text-sm rounded-full hover:bg-[#003f7d] transition">
            Full Profile
          </button>
          <button className="px-4 py-2 border border-[#0156a3] text-[#0156a3] text-sm rounded-full hover:bg-[#d3eaff] transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
