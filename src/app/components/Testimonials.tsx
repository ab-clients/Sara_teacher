export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          What Students Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4 italic">
              &ldquo;Sara&apos;s teaching methods helped me achieve my target
              IELTS score in just 3 months. Her patience and expertise made all
              the difference.&rdquo;
            </p>
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Ahmed Hassan</div>
              <div className="text-gray-600">Student — Cairo</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4 italic">
              &ldquo;Professional, engaging, and results-driven. Sara
              transformed our team&apos;s business communication skills
              remarkably.&rdquo;
            </p>
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Jennifer Park</div>
              <div className="text-gray-600">HR Director — Seoul</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4 italic">
              &ldquo;Sara&apos;s cultural sensitivity and adaptive teaching
              style made learning English enjoyable and effective for our
              diverse student body.&rdquo;
            </p>
            <div className="text-sm">
              <div className="font-semibold text-gray-900">
                Dr. Maria Santos
              </div>
              <div className="text-gray-600">Dept. Head — Sydney</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4 italic">
              &ldquo;The online classes were interactive and well-structured.
              Sara made complex grammar concepts easy to understand and
              apply.&rdquo;
            </p>
            <div className="text-sm">
              <div className="font-semibold text-gray-900">
                Carlos Rodriguez
              </div>
              <div className="text-gray-600">Professional — Mexico City</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
