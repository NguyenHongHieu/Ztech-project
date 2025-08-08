"use client";
import { useState } from "react";
import Image from "next/image";

const menuItems = ["HOME", "ITEMS1", "ITEMS2", "ITEMS3", "ITEMS4"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState<"signup" | "login">("signup");

  const Button = ({ label, type }: { label: string; type: "signup" | "login" }) => (
    <a
      href="#"
      onClick={() => setActiveBtn(type)}
      className={`px-5 py-2 rounded-full font-bold border border-yellow-400 transition shadow
        ${activeBtn === type ? "bg-yellow-400 text-black hover:bg-yellow-500" : "bg-[#181818] text-white hover:bg-yellow-400 hover:text-black"}`}
    >
      {label}
    </a>
  );

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={`flex ${isMobile ? "flex-col items-center gap-6 mt-8" : "items-center gap-4"}`}>
      {menuItems.map((item, i) => (
        <a
          key={i}
          href="#"
          className={`px-4 py-2 font-medium rounded-full transition text-center
            ${item === "HOME" ? "bg-[#444] text-yellow-400 font-bold" : "text-white hover:text-yellow-400"}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="w-full py-2 flex items-center bg-[#181818] text-white px-4 sm:px-8 relative">
      {/* Mobile Menu Button */}
      <button className="md:hidden mr-2 flex items-center justify-center w-10 h-10 rounded-full bg-[#222]" onClick={() => setMenuOpen(!menuOpen)}>
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
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center" onClick={() => setMenuOpen(false)}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
              <Image src="/logo.png" alt="Logo" width={56} height={56} />
            </div>
            <div className="flex gap-2">
              <Button label="SIGN UP" type="signup" />
              <Button label="LOG IN" type="login" />
            </div>
          </div>
          <NavLinks isMobile />
        </div>
      )}

      {/* Logo */}
      <div className="flex-shrink-0 mr-4 cursor-pointer group">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="h-16 w-16 transition group-hover:scale-105" />
      </div>

      {/* Desktop Nav */}
      <div className="flex-1 hidden md:flex">
        <NavLinks />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <Button label="SIGN UP" type="signup" />
        <Button label="LOG IN" type="login" />
      </div>
    </header>
  );
}
