'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitQuery } from '@/app/utils/FormSubmit';

const MessengerForm = ({ onSubmit, onUserInteraction }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', topic: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (onUserInteraction) {
      onUserInteraction();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitQuery(formData);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send your message. Please try again later.');
    }
  };

  return submitted ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 font-[var(--font-poppins)]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#004282]">Thank you!</h2>
      <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg">
        Thanks for reaching out to Medicheck. Our team will contact you soon.
      </p>
    </motion.div>

  ) : (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 bg-white rounded-2xl shadow-2xl font-[var(--font-poppins)]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#004282] mb-2 sm:mb-3">
        Any Query
      </h2>
      <p className="text-sm sm:text-base text-center text-gray-600 mb-4">
        Drop your details, and our health specialists will guide you.
      </p>

      <div className="space-y-4">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Patient Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#004282]"
        />

        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Mobile number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#004282]"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Query"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#004282] resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-[#004282] hover:bg-[#00356b] text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Submit Your Query
      </button>

      <div className="text-center text-sm text-gray-600 mt-4">
        By clicking, you agree to our{' '}
        <a href="#" className="underline text-[#004282]">Privacy Policy</a>,<br />
        Terms of Use and Disclaimer
      </div>

      <div className="text-center mt-5 space-y-1 text-sm">
        <p><strong>or</strong></p>
        <p>
          📱 <strong className="text-[#004282]">WhatsApp:</strong>{' '}
          <a href="https://wa.me/+918010800100" className="text-[#004282] underline">
            +91-8010800100
          </a>
        </p>
        <p>
          📧 <strong className="text-[#004282]">Email:</strong>{' '}
          <a href="mailto:info@medicheckhospitals.in" className="text-[#004282] underline">
            info@medicheckhospitals.in
          </a>
        </p>
      </div>
    </motion.form>

  );
};

export default MessengerForm;
