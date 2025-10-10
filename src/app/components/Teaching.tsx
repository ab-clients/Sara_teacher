import { educationalPhilosophies } from "@/data/philosophies";

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="py-16 bg-white"
      aria-labelledby="teaching-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="teaching-heading"
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Teaching & Methodology
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center">
            My teaching philosophy centers on creating inclusive,
            student-centered environments where learners feel confident to take
            risks and make mistakes. I believe in practical, communicative
            approaches that connect language learning to real-world contexts and
            personal goals.
          </p>
        </div>

        {/* Teaching Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {educationalPhilosophies.map((philosophy) => (
            <div
              key={philosophy.title}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3 text-center">
                {philosophy.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {philosophy.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools I Use */}
        <div className="text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Tools I use:</span> Google
            Classroom, Zoom, Canvas LMS, Google Docs, and Kahoot
          </p>
        </div>
      </div>
    </section>
  );
}
