'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMessengerForm } from "@/Redux/modalSlice";

const PopupModal = ({ children }) => {
  const isOpen= useSelector((state)=> state.modal.messengerFormVisible);
  const dispatch= useDispatch();
  
  return (
    <AnimatePresence>
      {isOpen && (
        // <div className="relative   z-[1] flex items-center justify-center bg-none backdrop-blur-none p-3">
        <div className="fixed pt-26 p-5 inset-0 z-350 flex items-center justify-center  bg-opacity-50">


          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md   bg-white rounded-xl shadow-xl "
          >
            <button
              onClick={()=> dispatch(toggleMessengerForm(false))}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
