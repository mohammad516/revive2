"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const values = [
  "Cutting-edge Medical Care",
  "Holistic Wellness Philosophy",
  "Total Wellness — Physical, Emotional & Cellular"
];

export default function AboutPreviewSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#E7E9F8] via-[#F9FAFB] to-[#A7AEDC]/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,118,180,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-white to-[#E7E9F8]/30 shadow-xl overflow-hidden border border-white/50"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Image */}
            <motion.div
              className="relative h-80 lg:h-auto p-6 lg:p-8"
              style={{ y }}
              {...fadeInLeft}
            >
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src="/about1.jpg"
                  alt="Revive Wellness Center - Modern wellness facility"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="flex flex-col justify-center p-6 lg:p-12"
              {...fadeInRight}
            >
              <motion.p
                className="text-sm font-bold uppercase tracking-wider text-[#6E76B4] mb-4"
                {...fadeInUp}
              >
                About Us
              </motion.p>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#2E2E4D] mb-6 font-serif tracking-wide leading-[1.1]"
                {...fadeInUp}
              >
                Revive your health, Renew your Life!
              </motion.h2>

              <motion.div
                className="w-16 h-[1px] bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] mb-8"
                {...fadeInUp}
              />

              <motion.div className="max-w-lg mb-8 space-y-5" {...fadeInUp}>
                <p className="text-[#2E2E4D]/90 text-lg md:text-xl leading-relaxed font-sans">
                  At <span className="font-semibold text-[#6E76B4]">Revive</span>, we combine cutting-edge medical care with a holistic wellness philosophy to help you look and feel your best from the inside out.
                </p>
                <p className="text-[#2E2E4D]/90 text-lg md:text-xl leading-relaxed font-sans">
                  Our goal is to support your journey toward optimal health, vitality, and confidence — with compassion and excellence.
                </p>
                <blockquote className="border-l-4 border-[#A7AEDC] pl-4 italic text-[#2E2E4D]/80 text-lg">
                  &ldquo;We believe in total wellness — physical, emotional, and cellular.&rdquo;
                </blockquote>
              </motion.div>

              <motion.ul className="space-y-4 mb-10" {...fadeInUp}>
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    className="flex items-center text-[#2E2E4D]/90 text-lg font-sans"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-[#6E76B4] to-[#A7AEDC] rounded-full mr-4 flex-shrink-0 shadow-sm">
                      <Check size={14} className="text-white" />
                    </div>
                    {value}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div {...fadeInUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6E76B4] to-[#A7AEDC] px-12 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(110,118,180,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgb(110,118,180,0.6)] hover:from-[#5A6299] hover:to-[#8B94C7] hover:ring-2 hover:ring-[#6E76B4]/30 hover:ring-offset-2"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}