export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 bg-gray-50"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="portfolio-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Portfolio & Samples
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Business Writing Course
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive curriculum for professional communication skills
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              IELTS Speaking Practice
            </h3>
            <p className="text-gray-600 mb-4">
              Interactive speaking exercises with assessment rubrics
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Academic Writing Guide
            </h3>
            <p className="text-gray-600 mb-4">
              Step-by-step approach to essay structure and development
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Pronunciation Workshop
            </h3>
            <p className="text-gray-600 mb-4">
              Audio-visual materials for accent reduction and clarity
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cultural Communication
            </h3>
            <p className="text-gray-600 mb-4">
              Cross-cultural awareness activities for global professionals
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Digital Literacy Course
            </h3>
            <p className="text-gray-600 mb-4">
              Technology integration for modern language learning
            </p>
            <a
              href="#"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              View sample →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
