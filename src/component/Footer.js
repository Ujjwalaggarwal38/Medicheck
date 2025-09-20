import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-[#0F2741] text-white font-sans-serif">
      {/* Newsletter Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Newsletter */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-700">
            Stay Updated with Health Tips
          </h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest health insights, medical news, and wellness tips.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-3 rounded-md 
                   bg-white text-gray-900 
                   border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-[#27B2A0]"
            />
            <button
              className="relative px-10 py-3.5 rounded-xl font-semibold text-white 
                   bg-gradient-to-r from-[#1270CC] to-[#004282] 
                   shadow-lg hover:shadow-2xl
                   transition-all duration-300 ease-out
                   hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Subscribe</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
                     translate-x-[-100%] group-hover:translate-x-[100%]
                     transition-transform duration-700 ease-out"
              />
            </button>
          </div>
        </div>

        {/* Right: Map */}
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112603.84272117293!2d77.17225604335935!3d28.119989300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd31aaf706827%3A0x20e54d489d11474b!2sMedicheck%20Institute%20of%20Medical%20Sciences%20(MIMS)!5e0!3m2!1sen!2sin!4v1758349794306!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>


      <hr className="border-gray-700" />

      {/* Footer Links Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                gap-y-12 gap-x-16">
        {/* About Medicheck */}
        <div>
          {/* Logo + Text side by side */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo/white.png"
              alt="Medicheck Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h3 className="text-xl font-bold">Medicheck</h3>
          </div>
          <p className="text-gray-300 text-sm leading-6">
            Your trusted healthcare partner providing world-class medical services
            with compassion and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/aboutMedicheck" className="hover:text-[#27B2A0]">About Medicheck</Link></li>
            <li><Link href="/services" className="hover:text-[#27B2A0]">Our Services</Link></li>
            <li><Link href="/doctors" className="hover:text-[#27B2A0]">Find a Doctor</Link></li>
            <li><Link href="/healthcheckup" className="hover:text-[#27B2A0]">Health Checkup</Link></li>
            <li><Link href="/emergency" className="hover:text-[#27B2A0]">Emergency Care</Link></li>
            <li><Link href="/patientportal" className="hover:text-[#27B2A0]">Patient Portal</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Radiology</li>
            <li>Laboratory</li>
          </ul>
        </div>

        {/* Our Hospitals */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Hospitals</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Medicheck NIT</li>
            <li>Medicheck Sec-46</li>
            <li>Medicheck Patwal</li>
            <li>Emergency Centers</li>
            <li>Specialized Clinics</li>
            <li>Telemedicine</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2024 Medicheck. All rights reserved. |
          <Link href="/privacy" className="hover:text-[#27B2A0] ml-1">Privacy Policy</Link> |
          <Link href="/terms" className="hover:text-[#27B2A0] ml-1">Terms of Service</Link>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Find us on</span>
          <Link href="https://www.instagram.com/medicheckhospitals/" className="hover:text-[#27B2A0]">
            <FaInstagram size={22} />
          </Link>
          <Link href="https://www.facebook.com/Medicheckhospitals" className="hover:text-[#27B2A0]">
            <FaFacebook size={22} />
          </Link>
          <Link href="https://www.threads.net/@medicheckhospitals" className="hover:text-[#27B2A0]">
            <FaTwitter size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
