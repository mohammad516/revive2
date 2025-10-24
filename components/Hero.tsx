"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGES = [
  "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761327757/about1_kthaqe.jpg",
  "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330112/hero11_gxmuc0.jpg",
  "https://res.cloudinary.com/dp0wyn4dg/image/upload/f_auto,q_auto/v1761330133/hero3_gflwtr.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  } as const;
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const images = useMemo(() => HERO_IMAGES, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[90vh] sm:min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background slideshow with crossfade and subtle parallax scale */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        {images.map((src, idx) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0, scale: idx === current ? 1 : 1.02 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt="Clinic ambience"
              fill
              priority={idx < 2}
              loading={idx < 2 ? undefined : "lazy"}
              unoptimized
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center text-white">
        {/* Localized gradient backdrop only behind text area */}
        <div className="absolute left-1/2 top-1/2 z-[-1] h-[70%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-b from-black/30 via-black/25 to-black/30 blur-xl" />

        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.div variants={itemVariants} className="text-base md:text-xl uppercase tracking-wide text-white/80 [animation:fade-in_800ms_ease_both]" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}>
            Welcome To
          </motion.div>
          <motion.h1 variants={itemVariants} className="mt-2 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}>
            Revive Wellness Center
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-xl text-base md:text-lg text-white/90 leading-relaxed tracking-wide" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}>
            “We believe in total wellness, physical, emotional and cellular.”
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              aria-label="Book an appointment"
              className="inline-flex w-[80%] sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-[#6E76B4] to-[#868ED9] px-7 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(110,118,180,0.35)] transition-all hover:scale-[1.05] hover:shadow-[0_10px_40px_rgba(110,118,180,0.5)] hover:ring-2 hover:ring-white/10"
            >
              Book Now
            </a>
            <a
              href="#treatments"
              aria-label="View available treatments"
              className="inline-flex w-[80%] sm:w-auto items-center justify-center rounded-full border border-white/80 px-7 py-3 text-sm font-medium text-white transition-all hover:scale-[1.05] hover:bg-white hover:text-[#2E2E4D] hover:shadow-lg"
            >
              View Treatments
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 opacity-80">
        <div className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce rounded-full border border-white/70 text-center text-white/80">
          <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            <path fill="currentColor" d="M12 16.5c-.26 0-.51-.1-.71-.29l-5-5a1.003 1.003 0 0 1 1.42-1.42L12 13.59l4.29-4.3a1.003 1.003 0 0 1 1.42 1.42l-5 5c-.2.19-.45.29-.71.29Z"/>
          </svg>
        </div>
      </div>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === current ? "bg-white" : "bg-white/50"}`}
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0.6, scale: idx === current ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}
