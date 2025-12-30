export default function About() {
  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">
        About <span className="gradient-text">Me</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Hello! I'm Pritam Ghara, a dedicated developer with a passion for building digital products that look great and perform even better.
          </p>
          <p>
            With a background in computer science and years of hands-on experience, I specialize in the modern web stack, focusing on Next.js and React ecosystems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
          </p>
        </div>
        
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
