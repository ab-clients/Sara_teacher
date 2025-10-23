import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-96 sm:h-120 lg:h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero-sara.jpg"
        alt="Sara Abdelmeguid teaching in a classroom"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay to improve text contrast; pointer-events-none keeps it non-interactive */}
      <div
        className="absolute inset-0 bg-black/50 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[20%]">
        <div className="max-w-lg">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-100 mb-4 shadow-md"
          >
            Sara Abdelmeguid
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/sara-abdelmeguid-resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-medium rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-sky-600 text-sky-200 font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
