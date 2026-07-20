import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Results from "@/components/sections/Results";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DentalSchema from "@/components/seo/DentalSchema";
import Preloader from "@/components/ui/Preloader";
import GlobalBehaviours from "@/components/ui/GlobalBehaviours";

export default function HomePage() {
  return (
    <>
      <GlobalBehaviours />

      <Preloader />

      <Header />

      <MobileNavigation />

      <main className="main">
        <Hero />
        <Services />
        <Results />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
      </main>

      <Footer />

      <DentalSchema />
    </>
  );
}