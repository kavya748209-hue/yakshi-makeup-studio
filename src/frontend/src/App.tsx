import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import CelebritySection from "./components/CelebritySection";
import FAQSection from "./components/FAQSection";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-foreground overflow-x-hidden">
      <Navbar />
      <FloatingButtons />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUs />
        <CelebritySection />
        <TestimonialsSection />
        <FAQSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
