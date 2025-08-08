"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState<"signup" | "login">("signup");

  return (
    <header className="w-full py-2 flex items-center bg-[#181818] text-white px-4 sm:px-8 relative">
      {/* Mobile Menu Button - moved to the left, before logo */}
      <button
        className="md:hidden mr-2 flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        )}
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#181818] flex flex-col px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            <button
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={56} height={56} className="h-12 w-12" />
            </div>
            <div className="flex gap-2">
              <a href="#" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold border border-yellow-400 hover:bg-yellow-500 transition text-sm">
                SIGN UP
              </a>
              <a href="#" className="bg-[#181818] text-white px-4 py-2 rounded-full font-bold border border-yellow-400 hover:bg-yellow-500 transition text-sm">
                LOG IN
              </a>
            </div>
          </div>
          <nav className="flex flex-col items-center gap-6 mt-8">
            <a href="#" className="bg-[#444] text-yellow-400 px-4 py-2 rounded-full font-bold w-full text-center">
              HOME
            </a>
            <a href="#" className="text-white px-2 py-2 font-medium hover:text-yellow-400 w-full text-center">
              ITEMS 1
            </a>
            <a href="#" className="text-white px-2 py-2 font-medium hover:text-yellow-400 w-full text-center">
              ITEMS 2
            </a>
            <a href="#" className="text-white px-2 py-2 font-medium hover:text-yellow-400 w-full text-center">
              ITEMS 3
            </a>
            <a href="#" className="text-white px-2 py-2 font-medium hover:text-yellow-400 w-full text-center">
              ITEMS 4
            </a>
          </nav>
        </div>
      )}
      {/* Logo */}
      <div className="flex-shrink-0 mr-4 group cursor-pointer transition">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="h-16 w-16 transition group-hover:scale-105" />
      </div>
      {/* Desktop Menu */}
      <nav className="flex-1 hidden md:flex items-center gap-2 sm:gap-6">
        <a href="#" className="bg-[#444] text-yellow-400 px-4 py-1 rounded-full font-bold shadow mr-2">
          HOME
        </a>
        <a href="#" className="text-white px-2 py-1 font-medium hover:text-yellow-400">
          ITEMS1
        </a>
        <a href="#" className="text-white px-2 py-1 font-medium hover:text-yellow-400">
          ITEMS2
        </a>
        <a href="#" className="text-white px-2 py-1 font-medium hover:text-yellow-400">
          ITEMS3
        </a>
        <a href="#" className="text-white px-2 py-1 font-medium hover:text-yellow-400">
          ITEMS4
        </a>
      </nav>
      <div className="flex gap-2 sm:gap-4">
        {/* Primary: SIGN UP */}
        <a
          href="#"
          className={`px-5 py-2 rounded-full font-bold border border-yellow-400 shadow transition
      ${
        activeBtn === "signup"
          ? "bg-yellow-400 text-black hover:bg-yellow-500 focus:bg-yellow-500"
          : "bg-[#181818] text-white hover:bg-yellow-400 hover:text-black focus:bg-yellow-400 focus:text-black"
      }`}
          onClick={() => setActiveBtn("signup")}
          tabIndex={0}
        >
          SIGN UP
        </a>
        {/* Secondary: LOG IN */}
        <a
          href="#"
          className={`px-5 py-2 rounded-full font-bold border border-yellow-400 transition
      ${
        activeBtn === "login"
          ? "bg-yellow-400 text-black hover:bg-yellow-500 focus:bg-yellow-500"
          : "bg-[#181818] text-white hover:bg-yellow-400 hover:text-black focus:bg-yellow-400 focus:text-black"
      }`}
          onClick={() => setActiveBtn("login")}
          tabIndex={0}
        >
          LOG IN
        </a>
      </div>
    </header>
  );
}
