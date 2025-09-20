'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBotPopup({ onClose, onSubmit }) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const topics = [
    'Book an Appointment', 'Find a Doctor', 'Health Packages', 'Primary Health Checkup'
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ topic: selectedTopic, ...formData });
    setFormSubmitted(true);
    setTimeout(() => {
      onClose(); // Auto-close after 2 seconds
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-20 right-4 bg-white w-[340px] max-h-[90vh] rounded-lg shadow-xl z-[999] overflow-hidden"
    >
      <div className="bg-[#0078D4] text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">Medicheck Bot</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="p-4">
        <AnimatePresence mode="wait">
          {!selectedTopic && !formSubmitted && (
            <motion.div
              key="topics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <p className="font-medium">How may I assist you?</p>
              <div className="grid grid-cols-2 gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(t)}
                    className="border border-[#0078D4] text-[#0078D4] rounded-full px-2 py-1 text-sm hover:bg-[#0078D4] hover:text-white transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {selectedTopic && !formSubmitted && (
            <motion.form
              key="form"
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="font-medium">Contact Information</p>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 border rounded"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 border rounded"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full px-3 py-2 border rounded"
                // onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, ""); 
                  setFormData({ ...formData, phone: onlyNums });
                }}
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full px-3 py-2 border rounded"
                rows={3}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-[#0078D4] text-white py-2 rounded hover:bg-[#005fa3] transition"
              >
                Submit
              </button>
            </motion.form>
          )}

          {formSubmitted && (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-10"
            >
              <p className="text-lg font-medium text-[#0078D4]">Thank you! 🎉</p>
              <p className="text-sm text-gray-600">We&apos;ll get back to you soon.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
