import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  options = [],
  showOptions = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="w-full max-w-md relative">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 
                   bg-white/20 backdrop-blur-md text-white placeholder-gray-200
                   focus:outline-none focus:ring-2 focus:ring-[#5BA9F2] transition"
      />

      {showOptions && isFocused && options.length > 0 && (
        <ul
          className="absolute left-0 right-0 mt-2 
                     bg-white/70 backdrop-blur-xl 
                     border border-gray-200 rounded-2xl 
                     shadow-2xl overflow-hidden z-50 divide-y divide-gray-100"
        >
          {options.map((opt, index) => (
            <li key={index}>
              <Link
                href={opt.href}
                onClick={() => setIsFocused(false)}
                className="block px-5 py-3 text-gray-800 
                           hover:bg-gradient-to-r hover:from-[#E8F4FF] hover:to-[#F0F8FF] 
                           hover:text-[#2F75CC] hover:font-semibold
                           transition-all duration-300 ease-out"
              >
                {opt.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
