'use client';

import { useState } from 'react';
// import { submitQuery } from '@/app/utils/FormSubmit';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const queryPayload = {
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          message: formData.message,
          email: `${formData.email || ""}`,
          topic:'',
        };
        const { submitQuery } = await import('@/app/utils/FormSubmit');

        
        await submitQuery(queryPayload);
        setSubmitted(true);
      } catch (err) {
        setError('Submission failed. Please try again later.');
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold text-[#004282]">Thank You!</h2>
        <p className="mt-2 text-gray-700">Thanks for contacting Medicheck Hospital. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="bg-white shadow-lg rounded-xl py-8">
  <div className="max-w-[1200px] mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-[#004282] mb-8 text-center md:text-left">
      Contact Medicheck Hospital
    </h2>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-800 font-semibold mb-2">First Name *</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004282] focus:border-[#004282] placeholder-gray-400 transition duration-200"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-gray-800 font-semibold mb-2">Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004282] focus:border-[#004282] placeholder-gray-400 transition duration-200"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>

      <div>
        <label className="block text-gray-800 font-semibold mb-2">Email (optional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@medicheck.com"
          className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004282] focus:border-[#004282] placeholder-gray-400 transition duration-200"
        />
      </div>

      <div>
        <label className="block text-gray-800 font-semibold mb-2">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="123-456-7890"
          className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004282] focus:border-[#004282] placeholder-gray-400 transition duration-200"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-800 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Type your message..."
          className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004282] focus:border-[#004282] placeholder-gray-400 transition duration-200 resize-none"
        />
      </div>

      {error && (
        <div className="md:col-span-2 text-red-600 text-sm text-center md:text-left">
          {error}
        </div>
      )}

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-[#004282] hover:bg-[#002f5f] text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>
  );
};

export default ContactForm;
