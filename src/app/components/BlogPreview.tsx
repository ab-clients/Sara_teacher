export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-16 bg-gray-50"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="blog-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5 Common IELTS Speaking Mistakes to Avoid
            </h3>
            <p className="text-sm text-gray-500 mb-3">March 15, 2024</p>
            <p className="text-gray-700 mb-4">
              Learn about the most frequent errors students make in IELTS
              speaking tests and practical strategies to overcome them for
              better performance.
            </p>
            <a
              href="/blog"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Read more →
            </a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Building Confidence in Business English
            </h3>
            <p className="text-sm text-gray-500 mb-3">March 8, 2024</p>
            <p className="text-gray-700 mb-4">
              Discover effective techniques for professionals to develop
              confidence in workplace communication and presentation skills.
            </p>
            <a
              href="/blog"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Read more →
            </a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Future of Online Language Learning
            </h3>
            <p className="text-sm text-gray-500 mb-3">February 28, 2024</p>
            <p className="text-gray-700 mb-4">
              Exploring emerging technologies and methodologies that are shaping
              the future of digital English language education.
            </p>
            <a
              href="/blog"
              className="text-indigo-700 hover:text-indigo-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
            >
              Read more →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
