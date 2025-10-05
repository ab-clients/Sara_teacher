"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-700 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">
              Sara Abdelmeguid
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                About
              </a>
              <a
                href="#cv"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                CV
              </a>
              <a
                href="#teaching"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Teaching
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Contact Sara
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <Image
            src="/hero-sara.jpg"
            alt="Sara Abdelmeguid teaching in a classroom"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay to improve text contrast; pointer-events-none keeps it non-interactive */}
          <div className="absolute inset-0 bg-zinc-900/60 pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl pt-40 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Sara Abdelmeguid
              </h1>
              <p className="text-xl sm:text-2xl text-white mb-4">
                English Language Teacher — Australian, open to roles worldwide
              </p>
              <p className="text-lg text-gray-200 mb-8">
                Helping learners communicate with clarity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Sara-Abdelmeguid-CV.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                I&apos;m an experienced English language teacher from Australia
                with a passion for helping students achieve their communication
                goals. With years of experience in diverse educational settings,
                I specialize in creating engaging, personalized learning
                experiences that build confidence and fluency in English.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="text-amber-500 font-semibold mb-2">
                    ESL/ELT
                  </div>
                  <div className="text-sm text-gray-600">
                    Expert instruction
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-amber-500 font-semibold mb-2">
                    Exam Prep
                  </div>
                  <div className="text-sm text-gray-600">IELTS & Cambridge</div>
                </div>
                <div className="p-4">
                  <div className="text-amber-500 font-semibold mb-2">
                    Multicultural
                  </div>
                  <div className="text-sm text-gray-600">
                    Diverse classrooms
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-amber-500 font-semibold mb-2">
                    Flexible
                  </div>
                  <div className="text-sm text-gray-600">
                    Online & in-person
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section
          id="cv"
          className="py-16 bg-gray-50"
          aria-labelledby="cv-heading"
        >
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
                  <li>
                    • Master of Applied Linguistics, University of Queensland
                  </li>
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
                  <li>• Curriculum Development & Assessment</li>
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

        {/* Teaching & Methodology Section */}
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
                student-centered environments where learners feel confident to
                take risks and make mistakes. I believe in practical,
                communicative approaches that connect language learning to
                real-world contexts and personal goals.
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

        {/* Portfolio Section */}
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

        {/* Testimonials Section */}
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
                  &ldquo;Sara&apos;s teaching methods helped me achieve my
                  target IELTS score in just 3 months. Her patience and
                  expertise made all the difference.&rdquo;
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    Ahmed Hassan
                  </div>
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
                  <div className="font-semibold text-gray-900">
                    Jennifer Park
                  </div>
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
                  &ldquo;The online classes were interactive and
                  well-structured. Sara made complex grammar concepts easy to
                  understand and apply.&rdquo;
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    Carlos Rodriguez
                  </div>
                  <div className="text-gray-600">
                    Professional — Mexico City
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
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
                  Exploring emerging technologies and methodologies that are
                  shaping the future of digital English language education.
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

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-white"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Get In Touch
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Ready to start your English learning journey or discuss teaching
                opportunities? I&apos;d love to hear from you and explore how we
                can work together to achieve your goals.
              </p>
              <div className="flex justify-center items-center gap-6 mb-8">
                <a
                  href="mailto:sara@example.com"
                  className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Email Sara
                </a>
                <a
                  href="https://linkedin.com/in/sara-abdelmeguid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-3 text-indigo-700 border border-indigo-700 rounded-md hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Connect with Sara on LinkedIn"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell me about your learning goals or teaching opportunity..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Send Message
                </button>
              </div>
              {formStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-center">
                  <p className="text-green-800">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sara Abdelmeguid</h3>
              <p className="text-gray-400">English Language Teacher</p>
            </div>
            <nav className="grid grid-cols-2 gap-4">
              <div>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  About
                </a>
                <a
                  href="#cv"
                  className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  CV
                </a>
                <a
                  href="#teaching"
                  className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  Teaching
                </a>
                <a
                  href="#portfolio"
                  className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  Portfolio
                </a>
              </div>
              <div>
                <a
                  href="#testimonials"
                  className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  Testimonials
                </a>
                <a
                  href="#blog"
                  className="block text-gray-300 hover:text-white transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sara-abdelmeguid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
                aria-label="LinkedIn profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>Based in Australia • Open to global roles</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
