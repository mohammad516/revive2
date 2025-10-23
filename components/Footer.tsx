"use client";
import { motion } from "framer-motion";
import { Mail, Heart, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        rotate: isVisible ? 0 : -180,
        y: [0, -8, 0]
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -2
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.3,
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

// Social Icon Component
const SocialIcon = ({ 
  href, 
  icon: Icon, 
  label, 
  delay = 0 
}: { 
  href: string; 
  icon: React.ComponentType<{ className?: string }>; 
  label: string; 
  delay?: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-white/10 dark:bg-neutral-800/20 backdrop-blur-sm border border-white/20 dark:border-neutral-700/30 hover:border-indigo-400/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ 
      scale: 1.1, 
      rotate: 5,
      y: -2
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-300 hover:text-indigo-400 transition-colors duration-300" />
    <span className="sr-only">{label}</span>
  </motion.a>
);

const Footer = () => (
  <>
    <footer className="relative mt-20 md:mt-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-neutral-900/80 dark:via-neutral-800/60 dark:to-neutral-900/80 backdrop-blur-sm" />
      
      {/* Animated Gradient Divider */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      <div className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 0 25px rgba(99, 102, 241, 0.4))"
            }}
          >
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-white/80 to-indigo-50/50 backdrop-blur-sm border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image 
                src="/log.png" 
                alt="Veyra Logo" 
                width={80}
                height={80}
                className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-20 lg:w-20 object-contain transition-all duration-300 group-hover:scale-110"
                priority
              />
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
          </motion.div>
          
          {/* Social Media Icons */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SocialIcon href="https://wa.me/96171709133?text=Hello%20I%20want%20to%20order" icon={FaWhatsapp} label="WhatsApp" delay={0} />
            <SocialIcon href="https://www.facebook.com/profile.php?id=61579729479913" icon={Facebook} label="Facebook" delay={0.1} />
            <SocialIcon href="https://www.instagram.com/veyra.web/" icon={Instagram} label="Instagram" delay={0.2} />
            <SocialIcon href="https://www.tiktok.com/@veyra2211?_t=ZS-8zj371LZP1O&_r=1" icon={FaTiktok} label="TikTok" delay={0.3} />
          </motion.div>
          
          {/* Copyright and Email */}
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 text-center lg:text-left">
            <motion.div 
              className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              © {new Date().getFullYear()} Veyra. Crafted with{" "}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
            </motion.div>
            
            {/* Divider for large screens */}
            <div className="hidden lg:block text-neutral-300 dark:text-neutral-600">|</div>
            
            <motion.a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:underline"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              info@veyra.website
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
    
    {/* Back to Top Button */}
    <BackToTopButton />
  </>
);

export default Footer;
