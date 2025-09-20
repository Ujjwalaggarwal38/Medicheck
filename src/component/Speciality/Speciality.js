'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules';

const services = [
    'Hearing Loss Treatment',
    'Sinus Surgery',
    'Tonsil and Adenoid Removal',
    'Voice and Throat Disorders',
    'Allergy Diagnosis & Management',
    'Sleep Apnea Solutions'
];

const doctors = [
    {
        name: 'Dr. Riya Sharma',
        specialty: 'Pediatric ENT',
        experience: '12 years',
    },
    {
        name: 'Dr. Arjun Patel',
        specialty: 'Rhinology & Sinus Surgery',
        experience: '10 years',
    },
    {
        name: 'Dr. Meera Desai',
        specialty: 'Head & Neck Surgery',
        experience: '15 years',
    },
     {
        name: 'Dr. Meera Desai',
        specialty: 'Head & Neck Surgery',
        experience: '15 years',
    },
];

export default function SpecialityPage({ branch }) {
    // const data= specialtyData[branch] 
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full  mt-15 h-[400px]">
                <Image
                    src="/speciality/nephrology.jpg"
                    alt="Neurosurgery"
                    fill
                    priority={false}
                    loading="lazy"
                    sizes="(max-width: 1268px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                />
            </section>

            {/* Overlay Content */}
            <div className="bg-white py-5 px-6">
                <div className="p-2  max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-black mb-4">
                        Otolaryngology (ENT) Microscopy Solutions
                    </h2>
                    <p className="text-gray-800 w-full  mb-6 text-sm">
                        Otolaryngology (ENT) microsurgery requires top-class imaging quality and visualization. Microscopes for otolaryngology allow specialists to carry out complex and minimally invasive ENT surgical procedures with a high level of precision to enable the best possible clinical outcomes.
                    </p>
                    <Link href="/contact" className="inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
                        <span className="mr-2">→</span> Book an Appointment
                    </Link>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-16 bg-sky-50 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-wide">
                        Our Services
                    </h2>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white  p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-blue-300">
                                    <div className="mb-4">
                                        <img
                                            src={`/images/services/${index + 1}.png`}
                                            alt={`${service} icon`}
                                            className="w-16 h-16 object-contain mx-auto rounded-full shadow-md"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">
                                        {service}
                                    </h3>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-14  px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Meet Our Doctors
    </h2>

    <div className="grid gap-8 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {doctors.map((doc, index) => (
        <div
          key={index}
          className="bg-white p-6 pt-10 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all flex flex-col items-center text-center"
        >
          <img
            src={`/images/doctors/${index + 1}.jpg`}
            alt={doc.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg -mt-16 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
          <p className="text-blue-700 text-sm">{doc.specialty}</p>
          <p className="text-sm text-gray-500 mt-1">{doc.experience} experience</p>
          <div className="flex items-center justify-center text-blue-600 text-sm mt-1">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 12.414m0 0L9.172 8.172m4.242 4.242a4 4 0 105.656-5.656 4 4 0 00-5.656 5.656z"
              /> 
            </svg>
            {doc.location}
          </div>

          <button className="mt-6 w-full bg-white border-2 border-blue-700 text-blue-700 font-medium py-2 rounded-full hover:bg-blue-700 hover:text-white transition-all flex items-center justify-center gap-2">
            BOOK APPOINTMENT
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </div>
</section>



            {/* Contact Section */}
            <section className="py-12 text-center bg-sky-50 px-4">
                <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-6">Reach out to us to schedule a consultation with our ENT experts.</p>
                <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
                    Contact Us
                </button>
            </section>
        </div>
    );
}
