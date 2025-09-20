"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Make sure this is imported at the top

const AppointmentBannerForm = () => {

  return (
    <section className="">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-full pb-6">
          <div
            className="bg-white rounded-4xl z-50 relative shadow-md 
        flex flex-col md:flex-wrap md:flex-row   items-center 
        justify-center md:justify-around md:gap-5 gap-3 p-4 my-[-2rem]"
          >
            {/* Hospitals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <Link
                href="/hospitalInfo/medicheck-palwal"
                className="flex items-center md:justify-center gap-2 px-4 py-2 
                  text-sm text-gray-800 border border-gray-300 rounded-full 
                  hover:bg-gray-100 transition w-full"
              >
                <Image
                  src="/icons/hospital.svg"
                  width={30}
                  height={30}
                  alt="Hospital Icon"
                  className="object-contain"
                />
                <span className="leading-none">Medicheck Palwal</span>
              </Link>

              <Link
                href="/hospitalInfo/medicheck-sector-46"
                className="flex items-center md:justify-center gap-2 px-4 py-2 
    text-sm text-gray-800 border border-gray-300 rounded-full 
    hover:bg-gray-100 transition w-full"
              >
                <Image
                  src="/icons/hospital.svg"
                  width={30}
                  height={30}
                  alt="Hospital Icon"
                  className="object-contain"
                />
                <span className="leading-none">Medicheck Sector 46</span>
              </Link>

              <Link
                href="/hospitalInfo/medicheck-nit"
                className="flex items-center md:justify-center gap-2 px-4 py-2 
    text-sm text-gray-800 border border-gray-300 rounded-full 
    hover:bg-gray-100 transition w-full"
              >
                <Image
                  src="/icons/hospital.svg"
                  width={30}
                  height={30}
                  alt="Hospital Icon"
                  className="object-contain"
                />
                <span className="leading-none">Medicheck NIT</span>
              </Link>

              <Link
                href="/hospitalInfo/medicheck-clinic"
                className="flex items-center md:justify-center gap-2 px-4 py-2 
    text-sm text-gray-800 border border-gray-300 rounded-full 
    hover:bg-gray-100 transition w-full"
              >
                <Image
                  src="/icons/clinic.svg"
                  width={30}
                  height={30}
                  alt="Clinic Icon"
                  className="object-contain"
                />
                <span className="leading-none">Medicheck Clinic</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AppointmentBannerForm;
