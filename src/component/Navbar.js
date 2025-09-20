"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ResponsiveMenuDropdown, MenuDropdown, Navbar1 } from "./ResponsiveDropDown/page";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { toggleMessengerForm } from "@/Redux/modalSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // ✅ UPDATED: Menu data now supports dropdowns
  const menuData = [
    {
      label: "Home",
      items: [
      ],
      href: "/"
    },
    {
      label: "Hospital & Clinic",
      items: [
        { label: "Medicheck NIT", icon: "/NavbarIcon/hsIcon.svg", href: "/hospitalInfo/medicheck-nit" },
        { label: "Medicheck Sector 46", icon: "/NavbarIcon/hs2.svg", href: "/hospitalInfo/medicheck-sector-46" },
        { label: "Medicheck Palwal", icon: "/icons/hospital.svg", href: "#" },
        { label: "Medicheck Clinic", icon: "/NavbarIcon/clinic.svg", href: "#" },
      ],
    },
    {
      label: "Specialities",
      items: [
        { label: "Otolaryngologists", icon: "/NavbarIcon/sethoScope.svg", href: "/specialities/otolaryngologists" },
        { label: "General Surgery", icon: "/NavbarIcon/nurse.svg", href: "/specialities/generalsurgery" },
        { label: "Obstetrics", icon: "/NavbarIcon/child.svg", href: "/specialities/obstetrics" },
        { label: "Orthopedics", icon: "/NavbarIcon/knee.svg", href: "/specialities/orthopedics" },
        { label: "Nephrology", icon: "/NavbarIcon/kidney.svg", href: "/specialities/nephrology" },
        { label: "Neurosurgery", icon: "/NavbarIcon/brain.svg", href: "/specialities/neurosurgery" },
        // { label: "View All", href: "/", icon: "/NavbarIcon/viewAll.svg" },
      ],
    },
    {
      label: "Services",
      items: [
        { label: "Second Opinion", icon: "/NavbarIcon/doctor.svg", href: "#" },
        { label: "Lab Test & Diagnostic", icon: "/NavbarIcon/microscope.svg", href: "#" },
        { label: "Homecare", icon: "/NavbarIcon/care.svg" },
        { label: "Buy Medicine", icon: "/NavbarIcon/medicine.svg", href: "#" },
        { label: "Medicheck e-ICU", icon: "/NavbarIcon/bed.svg", href: "#" },
        { label: "Elder Care", icon: "/NavbarIcon/careDay.svg", href: "#" },
      ],
    },
    {
      label: "Patient Care",
      items: [
        { label: "Admission Process", href: "#" },
        { label: "Discharge Process", href: "#" },
        { label: "Guidelines for Visitors", href: "#" },
        { label: "Patients Rights & Responsibilities", href: "#" },
      ],
    },
  ];

  return (

    <div className="fixed top-0 left-0 right-0 z-150 bg-white/90 backdrop-blur-lg shadow-lg">
      {/* Desktop Top Navbar */}
      <div className="hidden md:block">
        <Navbar1 />
      </div>

      {/* Main Navbar Section */}
      <div className="bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 px-6">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/img.jpg"
              alt="Medicheck Logo"
              width={200}
              height={120}
              loading="lazy"
              className="w-[150px] h-auto md:mt-[-46px] md:w-[200px] md:min-w-[200px] md:max-w-[110px] lg:mt-[-20px] lg:w-[150px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="md:flex hidden justify-between gap-10 list-none m-0 p-0 items-center">
            {menuData.map((menu) => (
              <MenuDropdown key={menu.label} title={menu.label} items={menu.items} href={menu.href} />
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex justify-end items-center gap-4">
            <ul className="flex gap-3 list-none items-center">
              <li className="text-[#018ded] font-medium cursor-pointer hover:text-black hover:font-bold hover:underline hover:decoration-[#66D5C7] transition duration-200">
                Login |
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => dispatch(toggleMessengerForm(true))}
                  className="border px-4 py-2 rounded-full text-white bg-[#004282] hover:bg-[#00356b] shadow-md transition duration-300"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden justify-center items-center gap-5">
            <a href="tel:+918010800100" className="transition-transform hover:scale-110">
              <Image
                src="/icons/ambulance.svg"
                width={35}
                height={35}
                alt="Emergency Logo"
              />
            </a>
            <Image
              src="/icons/messanger.svg"
              width={30}
              height={30}
              alt="Messenger Logo"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => dispatch(toggleMessengerForm(true))}
            />

            {/* Hamburger Icon */}
            <div className="pt-2 pr-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#004282] focus:outline-none transition-transform duration-200 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`md:hidden fixed top-16 right-0 z-50 w-[70vw] max-w-[280px] h-auto bg-white/95 backdrop-blur-md shadow-2xl rounded-l-3xl p-6 space-y-5 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ResponsiveMenuDropdown menuData={menuData} />

          <Link
            href="/#contact"
            className="w-full mt-2 py-3 text-center block rounded-2xl bg-[#004282] text-white font-semibold hover:bg-[#00356b] transition duration-300 shadow-md"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>

  );
};


export default Navbar;
