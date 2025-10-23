"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Facebook, Instagram, PanelsTopLeft } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isContactPage
          ? 'bg-white dark:bg-neutral-900 shadow-sm'
          : scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 ${
          isContactPage ? "py-2" : scrolled ? "py-2" : "py-4"
        } md:px-6 transition-[padding] duration-300 ${
          isContactPage
            ? "text-neutral-900 dark:text-white"
            : scrolled
            ? "text-neutral-900 dark:text-white"
            : "text-white"
        }`}
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center">
          <div
            className={`flex items-center justify-center rounded-2xl p-1.5 transition-all ${
              isContactPage
                ? "bg-gradient-to-br from-[#6E76B4]/15 to-transparent shadow-sm ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
                : scrolled
                ? "bg-gradient-to-br from-[#6E76B4]/15 to-transparent shadow-sm ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
                : "bg-gradient-to-br from-white/20 to-white/5 shadow-md ring-1 ring-white/20"
            }`}
          >
            <Image
              src="/log.png"
              alt="Revive Wellness Center"
              width={100}
              height={100}
              priority
              sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
              className={`${
                isContactPage
                  ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  : scrolled
                  ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  : "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
              } rounded-lg object-cover transition-[width,height] duration-300`}
            />
          </div>
        </div>

        {/* Center: Links (desktop) */}
        <ul className="hidden md:flex md:gap-8 lg:gap-10">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Treatments", "/services"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                  isContactPage
                    ? "text-neutral-900 dark:text-white hover:text-[#6E76B4] dark:hover:text-[#6E76B4]"
                    : scrolled
                    ? "text-neutral-900 dark:text-white hover:text-[#6E76B4] dark:hover:text-[#6E76B4]"
                    : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6E76B4] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Phone pill + icons (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+96171709133"
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors shadow-sm ${
              isContactPage
                ? "bg-[#6E76B4] text-white hover:bg-[#5A6299]"
                : scrolled
                ? "bg-[#6E76B4] text-white hover:bg-[#5A6299]"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#6E76B4]">
              <Phone size={16} />
            </span>
            <span>961 71 709133</span>
          </a>
          <div className="ml-3 flex items-center gap-4 border-l border-white/20 pl-4 text-lg">
            <Link aria-label="Facebook" href="#" className="transition-transform hover:scale-105">
              <Facebook size={18} />
            </Link>
            <Link aria-label="Instagram" href="#" className="transition-transform hover:scale-105">
              <Instagram size={18} />
            </Link>
            <Link aria-label="TikTok" href="https://www.tiktok.com/@revive" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiTiktok className="h-[18px] w-[18px]" />
            </Link>
            <Link aria-label="WhatsApp" href="https://wa.me/96171709133" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiWhatsapp className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <PanelsTopLeft />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden transition-all duration-300 ${
            isContactPage
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg"
              : scrolled 
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg" 
              : "bg-white/95 backdrop-blur-md text-neutral-900 shadow-lg"
          }`}
        >
          <div className="space-y-6 px-6 pb-8 pt-4">
            <div className="flex items-center justify-center py-2">
              <Image src="/log.png" alt="Revive Wellness Center" width={64} height={64} className="h-14 w-14 rounded-full object-cover" />
            </div>
            <ul className={`divide-y ${isContactPage ? "divide-neutral-200 dark:divide-neutral-700" : scrolled ? "divide-neutral-200 dark:divide-neutral-700" : "divide-white/20"}`}>
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Treatments", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className={`block py-3 px-6 text-lg transition-colors ${
                      isContactPage
                        ? "text-neutral-700 dark:text-neutral-300 hover:text-[#6E76B4] dark:hover:text-[#6E76B4]"
                        : scrolled 
                        ? "text-neutral-700 dark:text-neutral-300 hover:text-[#6E76B4] dark:hover:text-[#6E76B4]" 
                        : "text-neutral-700 hover:text-[#6E76B4]"
                    }`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+96171709133"
              className="inline-flex items-center gap-2 rounded-full bg-[#6E76B4] px-6 py-3 text-base text-white shadow-sm mx-6"
            >
              <Phone size={16} /> <span>961 71 709133</span>
            </a>
            <div className={`flex items-center gap-5 border-t pt-4 text-lg mx-6 ${isContactPage ? "border-neutral-200 dark:border-neutral-700" : scrolled ? "border-neutral-200 dark:border-neutral-700" : "border-white/20"}`}>
              <Link aria-label="Facebook" href="#" className="transition-transform hover:scale-105"><Facebook size={20} /></Link>
              <Link aria-label="Instagram" href="#" className="transition-transform hover:scale-105"><Instagram size={20} /></Link>
              <Link aria-label="TikTok" href="https://www.tiktok.com/@revive" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiTiktok className="h-[20px] w-[20px]" /></Link>
              <Link aria-label="WhatsApp" href="https://wa.me/96171709133" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiWhatsapp className="h-[20px] w-[20px]" /></Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
