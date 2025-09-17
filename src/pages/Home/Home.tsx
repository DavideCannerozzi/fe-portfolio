import About from "../../components/About/About";
import ArrowTop from "../../components/ArrowTop/ArrowTop";
import Resume from "../../components/Resume/Resume";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <header className="pt-0 pb-60 bg-gradient w-full">
        <Navbar />
        <Hero />
      </header>
      <main className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12 w-full">
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>

      <Footer />
      <ArrowTop />
    </>
  );
}
