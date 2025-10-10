import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CvSummary from "./components/CvSummary";
import Teaching from "./components/Teaching";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-700 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <CvSummary />
        <Teaching />
        <Portfolio />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
