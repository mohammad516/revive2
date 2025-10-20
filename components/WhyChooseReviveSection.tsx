"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Hospital,
  Users2,
  ArrowRight,
} from "lucide-react";

type WhyChooseReviveSectionProps = {
  imageSrc?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
} as const;

const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  },
} as const;

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  show: { 
    scaleX: 1, 
    originX: 0,
    transition: { duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
} as const;

const features = [
  {
    Icon: Hospital,
    title: "Inside a Full-Service Hospital",
    description:
      "Revive Wellness Center is the only center in the region located within a leading hospital, providing unmatched medical credibility and access to a trusted patient base.",
    iconBg: "from-indigo-500/80 to-cyan-400/80",
    hasStructuredList: false,
  },
  {
    Icon: Users2,
    title: "Multispecialty Collaboration",
    description: "Comprehensive care across multiple specialties:",
    iconBg: "from-purple-500/80 to-pink-400/80",
    hasStructuredList: true,
    services: [
      {
        category: "Dermatology",
        services: ["rejuvenation", "pigmentation", "acne care"],
        icon: "💆‍♀️"
      },
      {
        category: "Dental", 
        services: ["facial esthetics", "smile design"],
        icon: "🦷"
      },
      {
        category: "Cosmetic Surgery",
        services: ["pre/post-operation recovery"],
        icon: "⚕️"
      },
      {
        category: "IVF & Gynecology",
        services: ["intimate health", "laser rejuvenation"],
        icon: "🧬"
      },
      {
        category: "Andrology & Urology",
        services: ["results from the first visit"],
        icon: "🔬"
      },
      {
        category: "Alternative Medicine",
        services: ["balancing body and mind naturally"],
        icon: "🌿"
      }
    ]
  },
];

export default function WhyChooseReviveSection({ imageSrc = "/hero2.jpg" }: WhyChooseReviveSectionProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0f7ff,_#ffffff_70%)]" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-4">
            Why Choose Revive?
          </h2>
          <p className="text-lg text-slate-500 mt-2 font-medium tracking-wide mb-8 max-w-2xl mx-auto">
            A center of trust, innovation, and holistic care
          </p>
          <motion.div
            className="mx-auto h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Enhanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Enhanced Feature Cards */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.03),_0_10px_25px_rgba(0,0,0,0.05)] rounded-3xl p-4 sm:p-6 lg:p-8 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 ease-out"
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  {/* Enhanced Gradient Icon */}
                  <div className="relative">
                    <div className={`flex h-14 w-14 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${feature.iconBg} text-white shadow-lg hover:ring-4 hover:ring-indigo-100 transition-all duration-300`}>
                      <feature.Icon size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.iconBg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900 mb-2 sm:mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    
                    {feature.hasStructuredList ? (
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                          {feature.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3 md:gap-3">
                          {feature.services?.map((service, serviceIdx) => (
                            <motion.div
                              key={service.category}
                              className="rounded-xl sm:rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 ease-out p-4 sm:p-4 hover:rotate-[0.5deg] hover:scale-105 active:scale-[0.98] sm:active:scale-105"
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: serviceIdx * 0.08 }}
                              aria-label={`${service.category} services: ${service.services.join(', ')}`}
                            >
                              <div className="flex items-center gap-2 sm:gap-2 mb-2">
                                <span className="text-lg sm:text-lg">{service.icon}</span>
                                <h4 className="font-medium text-slate-800 text-sm sm:text-sm">
                                  {service.category}
                                </h4>
                              </div>
                              <p className="text-slate-600 text-xs sm:text-xs leading-relaxed">
                                {service.services.join(", ")}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Enhanced Floating Image */}
          <motion.div
            ref={imageRef}
            className="relative order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y: parallaxY }}
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Enhanced floating accent blob */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-2xl" />
            
            {/* Enhanced glassmorphism container with gradient ring */}
            <div className="relative bg-gradient-to-tr from-indigo-200 via-white to-purple-100 p-[3px] rounded-[2rem] shadow-lg">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={imageSrc}
                    alt="Revive Wellness Center facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority={false}
                  />
                </div>
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional CTA Layer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:translate-x-1 transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover personalized care
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


