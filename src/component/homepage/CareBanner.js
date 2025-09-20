import React from "react";
import { FaStethoscope, FaFlask } from 'react-icons/fa'; // Import icons

const CareSector = () => {
      return (
        // <section className="bg-white py-16"> {/* Light blue background */}
        //     <div className="max-w-[1200px] mx-auto px-6">
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        //             {/* Get Health Checkup Card */}
        //             <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        //                 <div className="flex items-center mb-4">
        //                     <FaStethoscope className="text-sky-500 text-3xl mr-3" /> {/* Stethoscope Icon */}
        //                     <h2 className="text-xl font-semibold text-gray-800">Get Health Checkup</h2>
        //                 </div>
        //                 <p className="text-gray-600 mb-4">
        //                 Your health matters. Discover peace of mind with our simple, thorough checkups. Because catching small issues today means stronger tomorrows for you and your loved ones.
        //                 </p>
        //                 <a href="#contact" className="flex items-center text-sky-500 cursor-pointer font-semibold">
        //                     Get now <span className="ml-2">&#8594;</span>
        //                 </a>
        //             </div>

        //             {/* Book a Test Card */}
        //             <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        //                 <div className="flex items-center mb-4">
        //                     <FaFlask className="text-sky-500 text-3xl mr-3" /> {/* Flask Icon */}
        //                     <h2 className="text-xl font-semibold text-gray-800">Book a Test</h2>
        //                 </div>
        //                 <p className="text-gray-600 mb-4">
        //                 Skip the waiting and worry. Schedule your important diagnostic tests in just a few clicks. Your health answers are waiting - we make getting them simple, quick, and stress-free.
        //                 </p>
        //                 <a href="#contact" className="flex items-center text-sky-500 cursor-pointer font-semibold">
        //                     Book now <span className="ml-2">&#8594;</span>
        //                 </a>
        //             </div>

        //             {/* Duplicate Cards for the 4-Card Layout */}
        //             {/* <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        //                 <div className="flex items-center mb-4">
        //                     <FaStethoscope className="text-sky-500 text-3xl mr-3" />
        //                     <h2 className="text-xl font-semibold text-gray-800">Get Health Checkup</h2>
        //                 </div>
        //                 <p className="text-gray-600 mb-4">
        //                     Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
        //                     been the {`industry's`} standard dummy text ever.
        //                 </p>
        //                 <button className="flex items-center text-sky-500 font-semibold">
        //                     Get now <span className="ml-2">&#8594;</span>
        //                 </button>
        //             </div>

        //             <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        //                 <div className="flex items-center mb-4">
        //                     <FaFlask className="text-sky-500 text-3xl mr-3" />
        //                     <h2 className="text-xl font-semibold text-gray-800">Book a Test</h2>
        //                 </div>
        //                 <p className="text-gray-600 mb-4">
        //                     Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
        //                     been the {`industry's`} standard dummy text ever.
        //                 </p>
        //                 <button className="flex items-center text-sky-500 font-semibold">
        //                     Book now <span className="ml-2">&#8594;</span>
        //                 </button>
        //             </div> */}
        //         </div>
        //     </div>
        // </section>
        <section className="bg-gradient-to-b from-sky-50 to-white py-16">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Get Health Checkup Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
        {/* Decorative background accent */}
        <div className="absolute -top-6 -right-6 bg-sky-100 w-24 h-24 rounded-full opacity-40"></div>
        
        <div className="flex items-center mb-4 relative z-10">
          <FaStethoscope className="text-sky-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Get Health Checkup</h2>
        </div>
        <p className="text-gray-600 mb-6 relative z-10">
          Your health matters. Discover peace of mind with our simple, thorough checkups. 
          Catching small issues today means stronger tomorrows for you and your loved ones.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-all duration-300 shadow-md"
        >
          Get Now <span className="ml-2 text-lg">&#8594;</span>
        </a>
      </div>

      {/* Book a Test Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
        {/* Decorative background accent */}
        <div className="absolute -bottom-6 -left-6 bg-sky-100 w-24 h-24 rounded-full opacity-40"></div>
        
        <div className="flex items-center mb-4 relative z-10">
          <FaFlask className="text-sky-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Book a Test</h2>
        </div>
        <p className="text-gray-600 mb-6 relative z-10">
          Skip the waiting and worry. Schedule your important diagnostic tests in just a few clicks. 
          Quick, simple, and stress-free healthcare at your fingertips.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-all duration-300 shadow-md"
        >
          Book Now <span className="ml-2 text-lg">&#8594;</span>
        </a>
      </div>

    </div>
  </div>
</section>

    );
};

export default CareSector;