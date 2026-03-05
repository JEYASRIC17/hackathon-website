export default function Teams() {
  const eliteTeams = [
    {
      name: "Code Queens",
      lead: "Lakshitha Devi S",
      member: "Devadharshini G",
      mentor: "Jothismathi S",
      points: 2847,
      tasks: 102,
    },
    {
      name: "Binary Builders",
      lead: "Bhuvanesh N",
      member: "Om Vignesh S",
      mentor: "Lalitha Mohana R S",
      points: 2780,
      tasks: 100,
    },
    {
      name: "Logic Loop",
      lead: "Srinidhi K",
      member: "Rubika M",
      mentor: "Suvetha S",
      points: 2705,
      tasks: 98,
    },
  ];

  const teams = [
    { name: "Tech Titans", lead: "Deepasri J P", tasks: 29, points: 779 },
    { name: "Code Crafters", lead: "Vaishnavi K A", tasks: 28, points: 769 },
    { name: "MindSpark", lead: "Jerine Priya D", tasks: 26, points: 683 },
    { name: "Twin Thinkers", lead: "Archana Devi K", tasks: 28, points: 673 },
    { name: "Runtime Rebels", lead: "Nivesh N S", tasks: 52, points: 1436 },
    { name: "Alpha Logic", lead: "Shalini S", tasks: 64, points: 1767 },
    { name: "Coding Beast", lead: "Sivadharshini M", tasks: 50, points: 1378 },
  ];

  return (
  <section
      id="teams"
      className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-blue-400 
        drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          Elite Squadrons
        </h1>

        {/* TOP 3 TEAMS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {eliteTeams.map((team, index) => (
            <div
              key={index}
              className="bg-[#0c0c0c] p-8 rounded-2xl 
              border border-blue-900 
              hover:border-blue-400
              hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
              transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                🏆 {team.name}
              </h2>

              <p className="text-gray-400 mt-3">
                 Lead: {team.lead}
              </p>
              <p className="text-gray-400">
                 Member: {team.member}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                 Mentor: {team.mentor}
              </p>

              <div className="flex justify-between mt-6 text-blue-400 font-semibold">
                <span>⚡ {team.tasks} Tasks</span>
                <span> {team.points} Pts</span>
              </div>
            </div>
          ))}
        </div>

     {/* OTHER TEAMS */}
<h2 className="text-4xl font-bold text-center text-blue-400 mt-24">
  Leaderboard
</h2>

<div className="mt-12 space-y-4">
  {teams.map((team, index) => (
    <div
      key={index}
      className="flex items-center justify-between 
      bg-white/5 backdrop-blur-md
      px-6 py-4 rounded-xl
      border border-blue-900
      hover:border-blue-400
      hover:bg-blue-500/10
      transition duration-300"
    >
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <span className="text-blue-400 font-bold text-lg">
          #{index + 4}
        </span>

        <div>
          <h3 className="font-semibold text-white">
            {team.name}
          </h3>
          <p className="text-sm text-gray-400">
            Lead: {team.lead}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-10 text-blue-400 font-medium">
        <span>⚡ {team.tasks} Tasks</span>
        <span> {team.points} Pts</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}