export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Pritam Ghara. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
