import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AcademyPage from "./components/AcademyPage";
import BridalPackagesPage from "./components/BridalPackagesPage";
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
import TransformationsPage from "./components/TransformationsPage";
import WhyChooseUs from "./components/WhyChooseUs";

function HomePage() {
  return (
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
  );
}

export default function App() {
  const [page, setPage] = useState<string>("/");

  useEffect(() => {
    const updatePage = () => setPage(window.location.pathname);
    updatePage();
    window.addEventListener("popstate", updatePage);
    return () => window.removeEventListener("popstate", updatePage);
  }, []);

  let content: React.ReactNode;
  if (page === "/academy") content = <AcademyPage />;
  else if (page === "/packages") content = <BridalPackagesPage />;
  else if (page === "/transformations") content = <TransformationsPage />;
  else content = <HomePage />;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#fdf8f3", color: "#3d2817" }}
    >
      <Navbar currentPage={page} onNavigate={setPage} />
      <FloatingButtons />
      {content}
      <Footer />
    </div>
  );
}
