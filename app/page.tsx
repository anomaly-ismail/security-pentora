import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";
import Consulting from "@/components/Consulting";
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
        <Subscription />
        <Consulting />
        <Methodology />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
