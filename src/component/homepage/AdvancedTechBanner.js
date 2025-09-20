import React from "react";
import Image from "next/image";

const AdvancedTechSection = () => {
  const cards = [
    { title: "CT-Scan Machine", imageUrl: "/technology/mri-8703772.png" },
    { title: "MISSO Robotic System", imageUrl: "/technology/Misso.png" },
    { title: "NABL certifying Lab", imageUrl: "/technology/lab.jpg" },
    { title: "C-arm Machine", imageUrl: "/technology/c-armx.jpg" },
    
  ];

  return (
    <section className="bg-sky-100 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Advanced Healthcare Technology
          </h2>
          <p className="text-gray-600">
            {
              "Our hospital uses modern medical tools that help doctors take better care of you. These special machines let us see inside your body clearly, find health problems early, and treat you with less pain. When you're not feeling well, our technology helps our doctors give you the best care possible, so you can get back to the people who love you."
            }
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-4 md:mb-0"
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={700}
                height={152}
                className="w-full object-cover"
                layout="responsive"
              />
              <div className="p-4 flex justify-center">
                <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechSection;
