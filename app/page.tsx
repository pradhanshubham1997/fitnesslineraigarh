import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Vision = dynamic(() => import("./components/Vision"), {
  loading: () => <div className="shimmer" style={{ height: 500 }} />,
});
const Services = dynamic(() => import("./components/Services"), {
  loading: () => <div className="shimmer" style={{ height: 500 }} />,
});
const Facilities = dynamic(() => import("./components/Facilities"), {
  loading: () => <div className="shimmer" style={{ height: 400 }} />,
});
const Transformation = dynamic(() => import("./components/Transformation"), {
  loading: () => <div className="shimmer" style={{ height: 600 }} />,
});
const Trainers = dynamic(() => import("./components/Trainers"), {
  loading: () => <div className="shimmer" style={{ height: 500 }} />,
});
const Pricing = dynamic(() => import("./components/Pricing"), {
  loading: () => <div className="shimmer" style={{ height: 600 }} />,
});
const Reviews = dynamic(() => import("./components/Reviews"), {
  loading: () => <div className="shimmer" style={{ height: 450 }} />,
});
const Gallery = dynamic(() => import("./components/Gallery"), {
  loading: () => <div className="shimmer" style={{ height: 400 }} />,
});
const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <div className="shimmer" style={{ height: 500 }} />,
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="shimmer" style={{ height: 300 }} />,
});
const FloatingWhatsApp = dynamic(() => import("./components/FloatingWhatsApp"), {
  loading: () => null,
});
const StickyCta = dynamic(() => import("./components/StickyCta"), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Facilities />
        <Transformation />
        <Trainers />
        <Pricing />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCta />
    </>
  );
}
