'use client';
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export default function Banner() {
  const sectionRef=useRef(null)
  const isInView=useInView(sectionRef, {once:true, margin:'-100px'})

  const textVariants={
    hidden:{opacity:0,y:40},
    visible:{opacity:1,y:0, transition:{duration:1}},
  }

  const imageVariants={
    hidden:{opacity:0,y:40},
    visible:{opacity:1, y:0, transition:{duration:1, delay:0.3}},
  };

  return (
    <section className="relative py-8 h-auto pt-24 md:pt-40">
      <div className="absolute inset-0">
        <Image
          src="/ICU_head_NIT.jpg"
          alt="ICU Head"
          fill
          objectFit="cover"
          className="w-full h-full object-cover [filter:blur(10px)]"
        />
      </div>

      {/* Main Content */}
      <div ref={sectionRef} className="relative max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-white text-center md:text-left mb-8 md:mb-0 z-10"
      >
        <p className="font-montserrat text-xl md:text-2xl mb-2">
          Our Medical Experts are here for you.
        </p>
        <h1 className="text-5xl md:text-6xl font-lato mb-2 leading-tight">
          MEDICHECK
        </h1>
        <p className="font-poppins text-lg md:text-3xl">
          Group of Hospitals
        </p>
      </motion.div>
        <motion.div         
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}

          className="relative w-full md:w-[40%]  max-w-[550px] flex justify-center md:justify-start md:mr-[50px] z-10 md:mb-[-10px] mb-[-20px]">
          <Image
            src="/doctors/teamFull.png"
            alt="Medicheck Doctors"
            width={500}
            height={600}
            priority
            className="rounded-3xl drop-shadow-[0_8px_12px_rgba(25,60,105,0.4)] object-cover w-full h-auto max-w-4xl mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
