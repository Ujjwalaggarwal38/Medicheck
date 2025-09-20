"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar"; // optional
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';

const tabs = ["Ventures", "Accreditations"];

export default function AchievementsSection({ data }) {
  const [activeTab, setActiveTab] = useState("Accreditations");
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.7;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto rounded-xl">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">
        Know <span className="font-bold">More</span> About Medicheck
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === tab
                ? "bg-white text-[#6b4f13]"
                : "text-white hover:underline"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="px-6"
        >
          {data[activeTab.toLowerCase()]?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full h-[300px] object-cover mb-4 rounded-md"
                />
                <p className="text-sm text-gray-700">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
