export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-900">
            Sara Abdelmeguid
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              About
            </a>
            <a
              href="#cv"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              CV
            </a>
            <a
              href="#teaching"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Teaching
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Testimonials
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Contact Sara
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
