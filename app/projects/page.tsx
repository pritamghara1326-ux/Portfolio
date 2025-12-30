import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "TestMagiq",
      description: "A Qa automation tool for testing web applications",
      tags: ["Next.js", "Mui"],
      link: "#",
     image: "company thumbnail.png"
    
    },
    {
      title: "Digital learning platform",
      description: "A digital learning platform for children to study",
      tags: ["Next js", "Tailwind", "Mui"],
      link: "#",
     image: "company thumbnail.png"
      
    },
    {
      title: "Social Media App",
      description: "Full-featured social platform with real-time messaging and feed updates.",
      tags: [ "Next.js","TypeScript","Socket.io"],
      link: "#",
     image: "company thumbnail.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Featured <span className="gradient-text">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="h-48 rounded-xl overflow-hidden relative mb-6 group-hover:scale-[1.02] transition-transform">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 h-20 overflow-hidden">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={project.link}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View Project <span className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
