"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#cv", label: "CV/Resume" },
  { href: "#teaching", label: "Teaching" },
  { href: "#portfolio", label: "Portfolio" },
  // { href: "#testimonials", label: "Testimonials" },
  // { href: "#blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            className="inline-flex items-center gap-4"
            aria-label="Go to top"
          >
            <svg
              role="img"
              aria-labelledby="saraLogoTitle saraLogoDesc"
              viewBox="0 0 420 120"
              className="h-10 sm:h-12 w-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="saraLogoTitle">
                Sara Abdelmeguid — English Language Teacher
              </title>
              <desc id="saraLogoDesc">
                Monogram and wordmark logo for Sara Abdelmeguid
              </desc>
              <defs>
                <linearGradient id="lgA" x1="0" x2="1">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="lgB" x1="0" x2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>

              {/* Monogram */}
              <g transform="translate(12,12)">
                <rect
                  x="0"
                  y="0"
                  width="88"
                  height="88"
                  rx="22"
                  fill="url(#lgA)"
                />
                <text
                  x="44"
                  y="58"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
                  fontWeight="700"
                  fontSize="40"
                  fill="white"
                  textAnchor="middle"
                >
                  SA
                </text>
                <circle cx="78" cy="12" r="8" fill="url(#lgB)" />
              </g>

              {/* Wordmark */}
              <g transform="translate(120,64)">
                <text
                  x="0"
                  y="-8"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
                  fontWeight="700"
                  fontSize="28"
                  fill="#0f172a"
                >
                  Sara
                </text>
                <text
                  x="0"
                  y="22"
                  fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
                  fontWeight="600"
                  fontSize="18"
                  fill="#334155"
                >
                  Abdelmeguid
                </text>
              </g>
            </svg>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-3 bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Contact Sara
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s: boolean) => !s)}
              className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white border border-gray-200 hover:text-indigo-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {open ? (
                <HiX className="h-7 w-7" aria-hidden="true" />
              ) : (
                <HiMenu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
              >
                Contact Sara
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
