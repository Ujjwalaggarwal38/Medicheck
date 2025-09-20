// import { FaHeadset, FaUserMd, FaChartLine } from "react-icons/fa"; 
// import InputField from "../HelperComponent/InputField";

// export default function HomePage() {
//   return (
//     <div className="relative w-full h-[100vh]">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/trial.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       {/* Dark overlay on video */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

//       {/* Content on Video */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
//         {/* Search Bar */}
//         <div className="flex w-full max-w-2xl gap-1">
//           <InputField
//             name="hospitalSearch"
//             placeholder="Search hospitals..."
//             showOptions={true}
//             options={[
//               { label: "Medicheck Palwal", href: "/hospitalInfo/medicheck-nit" },
//               { label: "Medicheck NIT", href: "/hospitalInfo/medicheck-palwal" },
//               { label: "Medicheck Ortho Superspeciality Hospital", href: "/hospitalInfo/medicheck-sector-46" },
//             ]}
//             className="flex-1 rounded-l-2xl bg-white/20 backdrop-blur-md border border-white/30 
//                        text-white placeholder-gray-200 px-4 py-4 
//                        focus:outline-none focus:ring-2 focus:ring-[#01BAA2] transition"
//           />

//           {/* Search Button */}
//           <button
//   className="relative px-10 py-3.5 rounded-xl font-semibold text-white 
//              bg-gradient-to-r from-[#01BAA2] to-[#028f86] 
//              shadow-lg hover:shadow-2xl
//              transition-all duration-300 ease-out
//              hover:scale-105 overflow-hidden group"
// >
//   <span className="relative z-10">Search</span>
            
//             {/* Shine Effect */}
//             <span
//     className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
//                translate-x-[-100%] group-hover:translate-x-[100%]
//                transition-transform duration-700 ease-out"
//   />
// </button>
//         </div>

//         {/* Highlights ON the Video (anchored to bottom) */}
//       {/* Highlights ON the Video (anchored to bottom) */}
// <div className="absolute bottom-12 w-full max-w-5xl px-6">
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white text-center">
//     {/* Item 1 */}
//     <div
//       className="flex flex-col items-center transform transition duration-300 
//                  hover:scale-110 hover:text-[#01BAA2] hover:drop-shadow-[0_0_15px_#01BAA2]"
//     >
//       <FaHeadset className="text-6xl mb-3 text-[#01BAA2] transition-colors duration-300" />
//       <span className="text-2xl font-extrabold">24/7 Support</span>
//     </div>

//     {/* Item 2 */}
//     <div
//       className="flex flex-col items-center transform transition duration-300 
//                  hover:scale-110 hover:text-[#01BAA2] hover:drop-shadow-[0_0_15px_#01BAA2]"
//     >
//       <FaChartLine className="text-6xl mb-3 text-[#01BAA2] transition-colors duration-300" />
//       <span className="text-2xl font-extrabold">17+ Years of Scaling</span>
//     </div>

//     {/* Item 3 */}
//     <div
//       className="flex flex-col items-center transform transition duration-300 
//                  hover:scale-110 hover:text-[#01BAA2] hover:drop-shadow-[0_0_15px_#01BAA2]"
//     >
//       <FaUserMd className="text-6xl mb-3 text-[#01BAA2] transition-colors duration-300" />
//       <span className="text-2xl font-extrabold">13+ Doctors</span>
//     </div>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// }



import { FaHeadset, FaUserMd, FaChartLine } from "react-icons/fa"; 
import InputField from "../HelperComponent/InputField";
import { Button } from "../ReusabelComponent/Button";

export default function HomePage() {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/trial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay on video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content on Video */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        {/* Search Bar */}
        <div className="flex w-full max-w-2xl gap-1">
          <InputField
            name="hospitalSearch"
            placeholder="Search hospitals..."
            showOptions={true}
            options={[
              { label: "Medicheck Institute of Medical Sciences",href: "/hospitalInfo/medicheck-palwal" },
              { label: "Medicheck Hospital", href: "/hospitalInfo/medicheck-nit" },
              { label: "Medicheck Ortho Superspeciality Hospital", href: "/hospitalInfo/medicheck-sector-46" },
            ]}
            className="flex-1 rounded-l-2xl bg-white/20 backdrop-blur-md border border-white/30 
                       text-white placeholder-gray-200 px-4 py-4 
                       focus:outline-none focus:ring-2 focus:ring-[#1270CC] transition"
          />

          {/* Search Button */}
         <Button text="Search"/>
        </div>

        {/* Highlights ON the Video (anchored to bottom) */}
        <div className="absolute bottom-12 w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white text-center">
            {/* Item 1 */}
            <a href="tel:+91 8010800100" className="block">
            <div
              className="flex flex-col items-center transform transition duration-300 
                         hover:scale-110 hover:text-[#1270CC] hover:drop-shadow-[0_0_15px_#1270CC]"
            >
              <FaHeadset className="text-6xl mb-3 text-[#1270CC] transition-colors duration-300" />
              <span className="text-2xl font-extrabold">24/7 Support</span>
            </div>
            </a>

            {/* Item 2 */}
            <div
              className="flex flex-col items-center transform transition duration-300 
                         hover:scale-110 hover:text-[#1270CC] hover:drop-shadow-[0_0_15px_#1270CC]"
            >
              <FaChartLine className="text-6xl mb-3 text-[#1270CC] transition-colors duration-300" />
              <span className="text-2xl font-extrabold">17+ Years of Scaling</span>
            </div>

            {/* Item 3 */}
            <div
              className="flex flex-col items-center transform transition duration-300 
                         hover:scale-110 hover:text-[#1270CC] hover:drop-shadow-[0_0_15px_#1270CC]"
            >
              <FaUserMd className="text-6xl mb-3 text-[#1270CC] transition-colors duration-300" />
              <span className="text-2xl font-extrabold">13+ Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
