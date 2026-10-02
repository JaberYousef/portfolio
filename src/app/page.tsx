import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Life from "@/components/Life";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Life />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
