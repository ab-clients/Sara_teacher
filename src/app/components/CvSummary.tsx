export default function CvSummary() {
  return (
    <section id="cv" className="py-16 bg-gray-50" aria-labelledby="cv-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="cv-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          CV Summary
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Experience
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                • Senior English Teacher at International Language Institute
                (2020-present)
              </li>
              <li>
                • IELTS Preparation Specialist at Elite Education Center
                (2018-2020)
              </li>
              <li>
                • ESL Instructor at Brisbane Community College (2016-2018)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Education
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Master of Applied Linguistics, University of Queensland</li>
              <li>• Bachelor of Education (TESOL), Griffith University</li>
              <li>• CELTA Certification, Cambridge Assessment English</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Certifications
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• TESOL Certificate (120 hours)</li>
              <li>• IELTS Examiner Certification</li>
              <li>• Google Certified Educator Level 2</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Skills
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Curriculum Development &amp; Assessment</li>
              <li>• Digital Learning Technologies</li>
              <li>• Cross-cultural Communication</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/Sara-Abdelmeguid-CV.pdf"
            className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Download Full CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
