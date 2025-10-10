export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sara Abdelmeguid</h3>
            <p className="text-gray-400">English Language Teacher</p>
          </div>
          <nav className="grid grid-cols-2 gap-4">
            <div>
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                About
              </a>
              <a
                href="#cv"
                className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                CV
              </a>
              <a
                href="#teaching"
                className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Teaching
              </a>
              <a
                href="#portfolio"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/sara-abdelmeguid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              aria-label="LinkedIn profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Based in Australia • Open to global roles</p>
        </div>
      </div>
    </footer>
  );
}
