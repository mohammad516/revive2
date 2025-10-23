// About page inspired by Contact.tsx style and AboutPreviewSection color palette
"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Sparkles, Leaf, Shield, Users, Star, ChevronDown, HeartPulse, Brain, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeInOut" }
};

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Motion */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/about1.jpg"
          alt="Revive Wellness Center - Serene wellness environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7E9F8]/60 via-white/40 to-[#A7AEDC]/50"></div>
      </motion.div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,118,180,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#6E76B4]/20 to-[#A7AEDC]/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-[#A7AEDC]/15 to-[#6E76B4]/15 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-[#6E76B4]/20 to-[#A7AEDC]/20 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider text-[#6E76B4] mb-8 shadow-lg"
          >
            <Heart className="w-4 h-4 text-[#6E76B4]" />
            <span>Wellness Excellence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: headingY }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-6 leading-tight font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            About Revive Wellness Center
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#2E2E4D]/90 max-w-3xl mx-auto leading-relaxed mb-8 font-sans"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Where Innovation Meets Holistic Healing
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[#2E2E4D]/80 max-w-4xl mx-auto leading-relaxed mb-8 font-sans"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            At Revive, we merge advanced medical innovation with natural healing practices to create a transformative wellness experience that nurtures your body, mind, and spirit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="#vision">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-110 hover:from-[#5A6299] hover:to-[#8B94C7] hover:ring-2 hover:ring-[#6E76B4]/30 hover:ring-offset-2"
              >
                <span>Discover Our Vision</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#6E76B4]"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

// Content Section Component
const ContentSection = ({ title, subtitle, children, delay = 0, id }: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  delay?: number;
  id?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Vision & Mission Section
const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Our Vision & Mission
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
            Guiding principles that shape our approach to wellness
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6E76B4] to-[#A7AEDC] rounded-full mb-4 shadow-sm"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#2E2E4D] mb-4 font-serif tracking-wide">
                Our Vision
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
            </div>
            <p className="text-[#2E2E4D]/90 text-lg leading-relaxed font-sans text-center">
              To become the leading wellness destination in the region, where innovation, science, and holistic healing unite to empower individuals to live longer, healthier, and more fulfilling lives.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6E76B4] to-[#A7AEDC] rounded-full mb-4 shadow-sm"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#2E2E4D] mb-4 font-serif tracking-wide">
                Our Mission
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
            </div>
            <p className="text-[#2E2E4D]/90 text-lg leading-relaxed font-sans text-center">
              At Revive Wellness Center, our mission is to deliver advanced anti-aging, integrative, and aesthetic medical solutions in a serene and supportive environment. We strive to blend cutting-edge science with natural healing practices to restore balance, vitality, and confidence in every client.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Wellness Philosophy Section
const WellnessPhilosophySection = () => {
  const philosophyItems = [
    {
      icon: HeartPulse,
      title: "Prevention before intervention",
      description: "We focus on proactive wellness strategies that prevent health issues before they develop into serious conditions."
    },
    {
      icon: Brain,
      title: "Empowerment through education",
      description: "Knowledge is power. We educate our clients about their health and wellness journey, empowering them to make informed decisions."
    },
    {
      icon: Sparkles,
      title: "Personalized programs for every stage of life",
      description: "Every individual is unique. We create customized wellness programs tailored to your specific needs and life stage."
    },
    {
      icon: Leaf,
      title: "Healing from the inside out",
      description: "True wellness comes from addressing the root causes, not just symptoms. We focus on holistic healing that nurtures your entire being."
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Our Wellness Philosophy
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
            We believe in treating the whole person — not just the symptoms
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#6E76B4] to-[#A7AEDC] rounded-2xl flex items-center justify-center shadow-sm group-hover:from-[#5A6299] group-hover:to-[#8B94C7] transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2E2E4D] mb-3 font-serif tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#2E2E4D]/90 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Visual Section
const VisualSection = () => {
  const images = [
    {
      src: "/hero2.jpg",
      alt: "Doctors collaborating",
      title: "Expert Collaboration"
    },
    {
      src: "/hero3.jpg",
      alt: "Serene treatment scene",
      title: "Peaceful Healing"
    },
    {
      src: "/about1.jpg",
      alt: "Modern lab aesthetics",
      title: "Innovation in Action"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-4 font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Our Wellness Journey
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
            Where science meets serenity in every moment
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg font-serif">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Call to Action Section
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-wide"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Begin Your Wellness Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of innovation and holistic healing at Revive Wellness Center
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#6E76B4] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Your Consultation
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Main About Component
const About = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-[#E7E9F8]/40 via-white to-[#A7AEDC]/20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,118,180,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>
        
        <div className="relative z-10">
          {/* Vision & Mission Section */}
          <VisionMissionSection />

          {/* Soft Divider */}
          <div className="border-t border-[#6E76B4]/20 my-16"></div>

          {/* Wellness Philosophy Section */}
          <WellnessPhilosophySection />

          {/* Soft Divider */}
          <div className="border-t border-[#6E76B4]/20 my-16"></div>

          {/* Visual Section */}
          <VisualSection />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default About;