import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import heroImage from "@/assets/hero-lime-splash.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection heroImage={heroImage} />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
