import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import WhyChooseReviveSection from "@/components/WhyChooseReviveSection";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <AboutPreviewSection />
      <WhyChooseReviveSection />
    </main>
  );
}