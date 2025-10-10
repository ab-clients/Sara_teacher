"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

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
              <FaLinkedin className="h-6 w-6 mr-2" />
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
