export default function Mentors() {
  const mentors = [
    {
      name: "Dr. R. Mary Stella",
      points: 14250,
      teams: 12,
    },
    {
      name: "Dr. J. Nirmala",
      points: 12840,
      teams: 10,
    },
    {
      name: "Ms. P. Kavitha",
      points: 11975,
      teams: 8,
    },
  ];

  return (
    <section id="mentor" className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-blue-400 
        drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          Strategic Advisors
        </h1>

        <p className="text-center text-gray-400 mt-4">
          Top Mentors – Department of Computer Science
        </p>

        {/* Timeline Container */}
        <div className="relative mt-20">

          {/* Vertical Glow Line */}
          <div className="absolute left-4 top-0 h-full w-1 
          bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

          <div className="space-y-16">
            {mentors.map((mentor, index) => (
              <div key={index} className="relative pl-16">

                {/* Blue Dot */}
                <div className="absolute left-1.5 top-3 w-6 h-6 rounded-full 
                bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

                {/* Content Strip */}
                <div className="bg-white/5 backdrop-blur-md 
                p-8 rounded-xl 
                border border-blue-900
                hover:border-blue-400
                hover:bg-blue-500/10
                transition duration-300">

                  <h2 className="text-2xl font-semibold text-blue-400">
                    {mentor.name}
                  </h2>

                  <div className="flex gap-16 mt-6 text-lg">
                    <div>
                      <p className="text-gray-400">Total Points</p>
                      <p className="text-blue-400 font-bold text-2xl">
                        {mentor.points}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Teams Guided</p>
                      <p className="text-blue-400 font-bold text-2xl">
                        {mentor.teams}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}