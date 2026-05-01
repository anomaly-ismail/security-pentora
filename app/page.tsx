import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <Methodology />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
