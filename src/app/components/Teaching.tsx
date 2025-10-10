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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Business English
            </h3>
            <p className="text-gray-600 mb-4">
              Professional communication for career advancement
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Enhanced presentation skills and confidence</li>
              <li>• Improved email and report writing abilities</li>
              <li>• Stronger networking and meeting participation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              IELTS/Exam Prep
            </h3>
            <p className="text-gray-600 mb-4">
              Strategic preparation for academic and migration goals
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Increased band scores by average of 1.5 points</li>
              <li>• Mastered test-taking strategies and time management</li>
              <li>• Built academic vocabulary and writing skills</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Writing & Conversation
            </h3>
            <p className="text-gray-600 mb-4">
              Fluency development through meaningful practice
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Developed natural speaking rhythm and intonation</li>
              <li>• Strengthened critical thinking and argumentation</li>
              <li>• Expanded vocabulary through contextual learning</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Tools I use:</span> Google
            Classroom, Zoom, Canvas LMS, Google Docs, Kahoot, Padlet
          </p>
        </div>
      </div>
    </section>
  );
}
