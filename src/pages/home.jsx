import { useState, useEffect } from "react";
import trophy from "../assets/trophyy.png";
import About from "./About";
import Teams from "./team";
import Mentors from "./mentor";
import Contact from "./contact";

export default function Home() {

  const [teams, setTeams] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTeams((prev) => (prev >= 100 ? 50 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToTeams = () => {
    document.getElementById("teams").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white flex flex-col items-center justify-center relative overflow-hidden">

        <div className="text-center z-10">

          <img
            src={trophy}
            alt="Hackathon Trophy"
            className="w-40 mx-auto mb-6 transition duration-500 hover:-translate-y-4 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />

          <h1 className="text-4xl md:text-7xl font-bold tracking-widest 
          bg-gradient-to-r from-white via-blue-400 to-white 
          text-transparent bg-clip-text">
            LDC HACKFEST
          </h1>

          <h2 className="text-3xl md:text-6xl font-bold text-gray-400 mt-2">
            2026
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto px-4">
            Building real-world solutions through innovation,
            teamwork, and leadership.
          </p>

          <button
            onClick={goToTeams}
            className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold 
            hover:bg-blue-400 transition duration-300 shadow-lg"
          >
            Explore Results
          </button>
        </div>

        {/* LEFT TOP CARD */}
        <div className="hidden lg:block absolute left-10 top-1/4 bg-[#0c0c0c] p-6 rounded-2xl w-56 text-center border border-gray-800">
          <h3 className="text-4xl font-bold">1,819</h3>
          <p className="text-gray-400 mt-2">Total Submissions</p>
        </div>

        {/* LEFT BOTTOM CARD */}
        <div className="hidden lg:block absolute left-10 bottom-1/4 bg-[#0c0c0c] p-6 rounded-2xl w-56 text-center border border-gray-800">
          <h3 className="text-4xl font-bold">10</h3>
          <p className="text-gray-400 mt-2">Days Hackathon</p>
        </div>

        {/* RIGHT TOP CARD */}
        <div className="hidden lg:block absolute right-10 top-1/4 bg-[#0c0c0c] p-6 rounded-2xl w-56 text-center border border-gray-800">
          <h3 className="text-4xl font-bold">{teams}</h3>
          <p className="text-gray-400 mt-2">Teams</p>
        </div>

        {/* RIGHT BOTTOM CARD */}
        <div className="hidden lg:block absolute right-10 bottom-1/4 bg-[#0c0c0c] p-6 rounded-2xl w-56 text-center border border-gray-800">
          <h3 className="text-4xl font-bold">3</h3>
          <p className="text-gray-400 mt-2">Winners</p>
        </div>

      </section>

      {/* OTHER SECTIONS */}
      <About />
      <Teams />
      <Mentors />
      <Contact />
    </>
  );
}