"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopupModal from "@/component/PopupModal/PopupModal";
import MessengerForm from "@/component/PopupModal/MessangerForm";

const AboutMedicheck= () => {
  const [showMessengerForm, setShowMessengerForm] = useState(false);

  return (
    <div className="bg-white relative top-20 text-gray-800 font-[var(--font-poppins)]">

      {/* Hero Section */}
      <section className="bg-[#0156a3] text-white px-6 py-29 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-lato)]">Know More About Medicheck</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Pioneering healthcare with compassion, technology, and trust.
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-[#0156a3] font-[var(--font-lato)]">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Medicheck is a leading healthcare provider committed to excellence in patient care and cutting-edge medical solutions.
          With a network of specialized professionals and state-of-the-art infrastructure, we have successfully treated over <strong>1,00,000+</strong> patients and performed more than <strong>10,000+ surgeries</strong> since our inception. Our mission is to provide affordable, accessible, and world-class healthcare to everyone.
        </p>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-10 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            { title: "Successful Surgeries", stat: "10,000+" },
            { title: "Medical Expert", stat: "50+" },
            { title: "Happy Patients", stat: "1,00,000+" },
            { title: "Awards & Recognitions", stat: "20+" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-lg shadow bg-white">
              <p className="text-3xl font-bold text-[#0156a3]">{item.stat}</p>
              <p className="text-sm text-gray-600 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Messenger Form Popup */}
      {showMessengerForm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-opacity-50 ">
          <PopupModal
            isOpen={showMessengerForm}
            onClose={() => setShowMessengerForm(false)}
          >
            <MessengerForm />
          </PopupModal>
        </div>
      )}

      {/* Achievements */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-[#0156a3] font-[var(--font-lato)]">Our Achievements</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
          <li>Global Healthcare Excellence Award 2014 for orthopedic and joint replacement services</li>
          <li>Introduction of robotic knee replacement surgery to the region</li>
          <li>Establishment of affordable healthcare model while maintaining quality standards</li>
          <li>24/7 Emergency Services with 15-minute average response time</li>
        </ul>
      </section>

      {/* Doctors Preview */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-[#0156a3] text-center font-[var(--font-lato)]">
            Meet Our Specialists
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Sunil Raina", specialty: "Orthopedic Surgeon", imageUrl: "/directors/SunilRaina.png" },
              { name: "Dr. Sumit Verma", specialty: "Physician", imageUrl: "/directors/sumit.jpg" },
              { name: "Dr. Ranjeeta Gupta", specialty: "Gynecology", imageUrl: "/directors/Ranjeeta.png" },
              { name: "Dr. BC Gupta", specialty: "Pathologist", imageUrl: "/doctors/BCGupta.jpg" },
            ].map((doc, i) => (
              <div key={i} className="bg-white shadow rounded p-4 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3">
                  <Image
                    alt="Doctor Image"
                    src={doc.imageUrl}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold text-lg">{doc.name}</h4>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-6 py-16 bg-[#0156a3] text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-lato)]">Need Expert Consultation?</h3>
        <p className="mb-6">Get in touch with Medicheck specialists today for world-class care and diagnostics.</p>
        <button
          onClick={() => setShowMessengerForm(true)}
          className="inline-block bg-white text-[#0156a3] font-semibold px-6 py-2 cursor-pointer rounded hover:bg-gray-100"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}



export default AboutMedicheck;