// Services page with Hero section similar to About.tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Hero Section Component
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-24 z-0"
    >
      {/* Background Image with Motion - Full Coverage */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full z-[-1]"
      >
        <Image
          src="https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761327757/about1_kthaqe.jpg"
          alt="Revive Wellness Center - Serene wellness environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        {/* Soft gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-screen">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: headingY }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#F9FAFB] leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          Services
        </motion.h1>
        
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 italic font-serif mt-6 max-w-4xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          "Where Science Meets Wellness."
        </motion.p>
      </div>

      {/* Scroll Indicator - Enhanced Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Main Services Component
const Services = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Placeholder for future content sections */}
      <div className="relative z-10 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
              More content sections will be added here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
