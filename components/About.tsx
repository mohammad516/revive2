// About page inspired by Contact.tsx style and AboutPreviewSection color palette
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Sparkles, Leaf, ChevronDown, HeartPulse, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


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
          src="/about1.jpg"
          alt="Revive Wellness Center - Serene wellness environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
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
          About Us
        </motion.h1>
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

// Meet Our Team Section
const MeetOurTeamSection = () => {
  const teamMembers = [
    {
      image: "/team1.webp",
      name: "Dr. Sarah Al-Mansouri",
      title: "Integrative Medicine Specialist",
      quote: "True healing begins when we address the whole person, not just the symptoms."
    },
    {
      image: "/team2.jpg", 
      name: "Dr. David Chen",
      title: "Aesthetic Consultant",
      quote: "Beauty is confidence, and confidence comes from feeling your absolute best."
    },
    {
      image: "/team3.jpg",
      name: "Dr. Lina Haddad", 
      title: "Wellness Coach",
      quote: "Every individual's wellness journey is unique, and that's what makes it beautiful."
    },
    {
      image: "/team4.jpg",
      name: "Dr. Omar Youssef",
      title: "Anti-Aging Specialist", 
      quote: "Age is just a number when you have the right tools for healthy aging."
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
            Meet Our Team of Experts
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E4D]/70 italic font-serif mb-6">
            A passionate team of medical and wellness professionals dedicated to your transformation
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Professional Portrait */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6E76B4]/20 to-[#A7AEDC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>

              {/* Team Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#2E2E4D] mb-2 font-serif tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[#6E76B4] font-medium text-sm mb-4">
                  {member.title}
                </p>
                
                {/* Quote - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6E76B4]/90 to-[#A7AEDC]/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                  <p className="text-white text-sm font-medium italic text-center leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    &ldquo;{member.quote}&rdquo;
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

          {/* Wellness Philosophy Section with Background */}
          <div className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/about2.jpg"
                alt="Wellness Philosophy Background"
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7E9F8]/80 via-white/70 to-[#A7AEDC]/60"></div>
            </div>

            {/* Wellness Philosophy Section */}
            <div className="relative z-10">
              <WellnessPhilosophySection />
            </div>
          </div>

          {/* Meet Our Team Section */}
          <MeetOurTeamSection />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default About;