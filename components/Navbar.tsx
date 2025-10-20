"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Facebook, Instagram, PanelsTopLeft } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,height] duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm text-neutral-900" : "bg-transparent text-white"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 ${
          scrolled ? "py-2" : "py-4"
        } md:px-6 transition-[padding] duration-300`}
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center">
          <div
            className={`flex items-center justify-center rounded-2xl p-1.5 transition-all ${
              scrolled
                ? "bg-gradient-to-br from-[#6E76B4]/15 to-transparent shadow-sm"
                : "bg-gradient-to-br from-white/20 to-white/5 shadow-md"
            } ring-1 ring-white/20`}
          >
            <Image
              src="/log.png"
              alt="Revive Wellness Center"
              width={100}
              height={100}
              priority
              sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
              className={`${
                scrolled ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" : "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
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
                  scrolled
                    ? "text-[#2E2E4D] hover:text-[#6E76B4]"
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
              scrolled
                ? "bg-[#6E76B4] text-white hover:bg-[#5A6299]"
                : "bg-white/15 text-white hover:bg-white/25"
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
        <div
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "bg-white/75 backdrop-blur-xl text-neutral-900" : "bg-white/10 backdrop-blur-xl text-white"
          }`}
        >
          <div className="space-y-6 px-6 pb-8 pt-4">
            <div className="flex items-center justify-center py-2">
              <Image src="/log.png" alt="Revive Wellness Center" width={64} height={64} className="h-14 w-14 rounded-full object-cover" />
            </div>
            <ul className="divide-y divide-white/10">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Treatments", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="block py-3 text-lg opacity-90" onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+96171709133"
              className="inline-flex items-center gap-2 rounded-full bg-[#6E76B4] px-5 py-2.5 text-base text-white shadow-sm"
            >
              <Phone size={16} /> <span>961 71 709133</span>
            </a>
            <div className="flex items-center gap-5 border-t border-white/15 pt-4 text-lg">
              <Link aria-label="Facebook" href="#" className="transition-transform hover:scale-105"><Facebook size={20} /></Link>
              <Link aria-label="Instagram" href="#" className="transition-transform hover:scale-105"><Instagram size={20} /></Link>
              <Link aria-label="TikTok" href="https://www.tiktok.com/@revive" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiTiktok className="h-[20px] w-[20px]" /></Link>
              <Link aria-label="WhatsApp" href="https://wa.me/96171709133" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiWhatsapp className="h-[20px] w-[20px]" /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
