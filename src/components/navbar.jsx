import { useState } from "react";
import collegeName from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-lg text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <img src={collegeName} alt="Lady Doak College" className="h-8 md:h-10" />

          <h1
            className="text-sm md:text-xl font-bold text-blue-400 tracking-wider"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            LADY DOAK COLLEGE
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#team" className="hover:text-blue-400">Teams</a>
          <a href="#mentor" className="hover:text-blue-400">Mentor</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* RIGHT LOGO */}
        <img src={tarcinlogo} alt="tarcin" className="hidden md:block h-8 md:h-10" />

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#teams">Teams</a>
          <a href="#mentor">Mentor</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}