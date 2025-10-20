"use client";

import Image from "next/image";

const features = [
  {
    icon: "/expertise.svg",
    title: "Expertise",
  },
  {
    icon: "/patient-focused.svg",
    title: "Patient-Focused",
  },
  {
    icon: "/solutions.svg",
    title: "Unique Solutions",
  },
  {
    icon: "/treatments.svg",
    title: "Customized Treatments",
  },
  {
    icon: "/ethics.svg",
    title: "Ethics",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A7AEDC] to-[#E7E9F8] p-4 shadow-lg shadow-gray-100 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#2E2E4D] tracking-wide">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
