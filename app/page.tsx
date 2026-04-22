import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Facilities from "./components/Facilities";
import Transformation from "./components/Transformation";
import Trainers from "./components/Trainers";
import Vision from "./components/Vision";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Facilities />
        <Transformation />
        <Trainers />
        <Vision />
        <Pricing />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
