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
          <div className="flex flex-col gap-8">
            <section>
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Experience
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-4">
                <li>
                  Centre Coordinator / Nominated Supervisor,{" "}
                  <span className="text-gray-500 italic text-sm">
                    Jan 2017 - Aug 2024
                  </span>
                </li>
                <li>
                  English teacher,{" "}
                  <span className="text-gray-500 italic text-sm">
                    (Sep 2007 - Nov 2016)
                  </span>
                </li>
                <li>
                  Lower grades coordinator & <br />
                  English language class teacher,{" "}
                  <span className="text-gray-500 italic text-sm">
                    (Sep 2005 - Aug 2007)
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Skills
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-4">
                <li>Curriculum Development &amp; Assessment</li>
                <li>Digital Learning Technologies</li>
                <li>Cross-cultural Communication</li>
              </ul>
            </section>
          </div>
          <div>
            <section>
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Education & Certifications
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-4">
                <li>
                  <strong>CELTA:</strong> Certificate in English Language
                  Teaching to Adults, Cambridge,{" "}
                  <span className="text-gray-500 italic text-sm">
                    Sydney, 2015
                  </span>
                </li>
                <li>
                  <strong>TEFL:</strong> Teaching English as a Foreign Language,
                  TEFL International,{" "}
                  <span className="text-gray-500 italic text-sm">
                    Alexandria, 2009
                  </span>
                </li>
                <li>
                  <strong>Early Childhood Diploma:</strong> Australian early
                  years diploma
                </li>
                <li>
                  <strong>Educational Diploma:</strong> Faculty of Education,
                  Alexandria University,{" "}
                  <span className="text-gray-500 italic text-sm">2013</span>
                </li>
                <li>
                  <strong>BA in English:</strong> Language & Translation,
                  Alexandria University,{" "}
                  <span className="text-gray-500 italic text-sm">
                    2004-2005
                  </span>
                </li>
                <li>
                  Translation courses — consecutive & simultaneous,{" "}
                  <span className="text-gray-500 italic text-sm">
                    Alexandria University
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/sara-abdelmeguid-resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Download Full CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
