export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          About Sara
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Hi, I&apos;m Sara — an English tutor with 15+ years of teaching
            experience across Egypt, the UAE, and Australia. Being
            Australian-Egyptian has given me a broader understanding of how
            students from different backgrounds learn and express themselves. I
            mainly focus on IGCSE English, but I&apos;ve also worked with the
            American, Canadian, and Australian curriculums, which helps me adapt
            my lessons to each learner&apos;s needs. With CELTA and TEFL
            certifications, I aim to make learning English an enjoyable and
            supportive experience where students feel encouraged to grow, gain
            confidence, and reach their goals at their own pace.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-amber-500 font-semibold mb-2">
                CELTA/TEFL
              </div>
              <div className="text-sm text-gray-600">Expert instruction</div>
            </div>
            <div className="p-4">
              <div className="text-amber-500 font-semibold mb-2">Exam Prep</div>
              <div className="text-sm text-gray-600">IELTS &amp; Cambridge</div>
            </div>
            <div className="p-4">
              <div className="text-amber-500 font-semibold mb-2">
                Multicultural
              </div>
              <div className="text-sm text-gray-600">Diverse classrooms</div>
            </div>
            <div className="p-4">
              <div className="text-amber-500 font-semibold mb-2">Flexible</div>
              <div className="text-sm text-gray-600">
                Online &amp; in-person
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
