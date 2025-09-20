'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChatBotPopup from './ChatBot'; // adjust path if needed
export default function FloatingMessengerButton() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000); 

    const hideAndOpenTimer = setTimeout(() => {
      setShowTooltip(false);
      setShowChatBot(true);
    }, 5000); 

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideAndOpenTimer);
    };
  }, []);

  const handleSubmit = async (payload) => {
    const { submitQuery } = await import('@/app/utils/FormSubmit');
    await submitQuery(payload);
    setShowChatBot(false);
  };

  return (
    <>
      <div className="fixed right-4 bottom-4 z-[999]">
        <div className="relative group">
          {showTooltip && (
            <div className="absolute bottom-full w-[220px] right-0 mb-2 bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm transition-opacity duration-500">
              Hello There 👋, chat with us!
            </div>
          )}

          <div
            className="bg-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setShowChatBot(true)}
          >
            <Image
              src="/logo/blueCyan.png"
              alt="Messenger Icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {showChatBot && (
        <ChatBotPopup
          onClose={() => setShowChatBot(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
