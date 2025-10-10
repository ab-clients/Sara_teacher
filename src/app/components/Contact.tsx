"use client";

import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
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
            opportunities? I&apos;d love to hear from you and explore how we can
            work together to achieve your goals.
          </p>
          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="mailto:me@saraabdelmeguid.com"
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
  );
}
