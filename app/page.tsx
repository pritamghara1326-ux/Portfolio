import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8 animate-in fade-in zoom-in duration-700">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Building the <span className="gradient-text">Future</span>
          <br />
          One Line at a Time
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-400">
          I'm a Pritam Ghara, a passionate Frontend  Developer crafting beautiful, high-performance web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all transform hover:scale-105"
          >
            About Me
          </Link>
        </div>
      </div>
      
      {/* Decorative gradient background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
}
