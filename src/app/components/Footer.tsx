import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sara Abdelmeguid</h3>
            <p className="text-gray-200">English Language Teacher</p>
            <p className="text-gray-400 text-sm">
              Based in Australia • Open to global roles
            </p>
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
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{`© ${new Date().getFullYear()} Sara Abdelmeguid. All rights reserved.`}</p>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <a
              href="https://alybadawy.com"
              className="hover:text-white transition-colors underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Aly Badawy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
