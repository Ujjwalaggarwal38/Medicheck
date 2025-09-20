// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const hospitals = [

//   {
//     name: "Medicheck Palwal",
//     description:
//       "At Medicheck Institute of Medical Sciences (MIMS), Palwal, we blend advanced technology with expert care to offer comprehensive healthcare services. Our facility features state-of-the-art ICUs, diagnostic labs, and specialized clinics to serve patients with excellence and empathy. Trust MIMS for your family’s health and wellness needs.",
//     imageUrl: "/hospitals/palwalhospital.jpg",
//     link: "https://maps.app.goo.gl/LG2cTDcM6wEhxrfu7",
//   },
//   {
//     name: "Medicheck NIT",
//     description:
//       "Medicheck Hospital is a leading multispecialty healthcare center in Faridabad, offering advanced treatments in orthopaedics, gynaecology, pediatrics, and more. Committed to excellence, we provide compassionate care with cutting-edge medical technology",
//     imageUrl: "/hospitals/medicheckNit.jpeg",
//     link: "https://maps.app.goo.gl/3dRHv8wGeiv4NwN76",
//   },
//   {
//     name: "Medicheck Ortho Superspeciality Hospital",
//     description:
//       "Medicheck Ortho is a concept of a hospital which talks about an Advanced Super Speciality approach in the field of Orthopaedics. The hospital specializes in the modified approach of joint replacement and arthroscopic surgeries. Under the leadership of Dr Sunil Raina, an eminent renowned joint replacement surgeon, the team of surgeons is committed to provide the best of healthcare as far as treatment related to joint and other bone disorders is concerned. The hospital also specializes in the treatment of reconstructive, corrective, deformity & plastic surgeries.",
//     imageUrl: "/hospitals/medicheckOrtho.jpeg",
//     link: "https://maps.app.goo.gl/Byfz6MGHMkfvX3wRA",
//   },
// ];

// export default function HospitalCards() {
//   return (
//     <section className="relative py-20 bg-gradient-to-br from-white via-[#E6FFFA] to-[#C6FFF6] overflow-hidden">
//       {/* Decorative abstract circles */}
//       <div className="absolute top-10 left-0 w-72 h-72 bg-[#01BAA2]/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#01BAA2]/30 rounded-full blur-3xl" />

//       <div className="relative max-w-6xl mx-auto px-6 space-y-20">
//         {hospitals.map((hospital, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: false, amount: 0.3 }} // animate every scroll
//             className={`flex flex-col md:flex-row items-center gap-10 ${
//               i % 2 === 1 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             {/* Image with hover shine */}
//             <div className="relative w-full md:w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-xl group">
//               <Image
//                 src={hospital.imageUrl}
//                 alt={hospital.name}
//                 fill
//                 className="object-cover transform transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//             </div>

//             {/* Text */}
//             <div className="w-full md:w-1/2">
//               <h3 className="text-3xl font-extrabold text-[#01BAA2] mb-4">
//                 {hospital.name}
//               </h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 {hospital.description}
//               </p>
//               <a
//                 href={hospital.link}
//                 target="_blank"
//                 className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#01BAA2] via-[#04c5ad] to-[#00e0c2] shadow-lg hover:shadow-[#01BAA2]/50 hover:scale-105 transition-all duration-300"
//               >
//                 Know More
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }









"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hospitals = [
  {
    name: "Medicheck Institute of Medical Sciences",
    description:
      "At Medicheck Institute of Medical Sciences (MIMS), Palwal, we blend advanced technology with expert care to offer comprehensive healthcare services. Our facility features state-of-the-art ICUs, diagnostic labs, and specialized clinics to serve patients with excellence and empathy. Trust MIMS for your family’s health and wellness needs.",
    imageUrl: "/hospitals/palwalhospital.jpg",
    link: "https://maps.app.goo.gl/LG2cTDcM6wEhxrfu7",
  },
  {
    name: "Medicheck Hospital",
    description:
      "Medicheck Hospital is a leading multispecialty healthcare center in Faridabad, offering advanced treatments in orthopaedics, gynaecology, pediatrics, and more. Committed to excellence, we provide compassionate care with cutting-edge medical technology",
    imageUrl: "/hospitals/medicheckNit.jpeg",
    link: "https://maps.app.goo.gl/3dRHv8wGeiv4NwN76",
  },
  {
    name: "Medicheck Ortho Superspeciality Hospital",
    description:
      "Medicheck Ortho is a concept of a hospital which talks about an Advanced Super Speciality approach in the field of Orthopaedics. The hospital specializes in the modified approach of joint replacement and arthroscopic surgeries. Under the leadership of Dr Sunil Raina, an eminent renowned joint replacement surgeon, the team of surgeons is committed to provide the best of healthcare as far as treatment related to joint and other bone disorders is concerned. The hospital also specializes in the treatment of reconstructive, corrective, deformity & plastic surgeries.",
    imageUrl: "/hospitals/medicheckOrtho.jpeg",
    link: "https://maps.app.goo.gl/Byfz6MGHMkfvX3wRA",
  },
];

export default function HospitalCards() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-[#F5F9FF] to-[#EBF3FF] overflow-hidden">
      {/* Decorative abstract circles */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#5BA9F2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#2F75CC]/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 space-y-20">
        {hospitals.map((hospital, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image with hover shine */}
            <div className="relative w-full md:w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src={hospital.imageUrl}
                alt={hospital.name}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-extrabold text-[#2F75CC] mb-4">
                {hospital.name}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {hospital.description}
              </p>
              <a
                href={hospital.link}
                target="_blank"
                className="relative inline-block px-8 py-3 rounded-full font-semibold text-white 
             bg-gradient-to-r from-[#5BA9F2] to-[#2F75CC] 
             shadow-md hover:shadow-[#5BA9F2]/50 hover:scale-105 
             transition-all duration-300 ease-out overflow-hidden group"
              >
                <span className="relative z-10">Know More</span>

                {/* Shine Effect */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
               translate-x-[-100%] group-hover:translate-x-[100%]
               transition-transform duration-700 ease-out"
                />
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
