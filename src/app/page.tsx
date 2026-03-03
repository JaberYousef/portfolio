import BlueprintBackground from "@/components/layout/BlueprintBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContentSwitcher from "@/components/layout/ContentSwitcher";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SectionRouter from "@/components/layout/SectionRouter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BlueprintBackground />
      <Navbar />
      <main>
        <Hero />
        <ContentSwitcher>
          <About />
          <SectionRouter />
        </ContentSwitcher>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
