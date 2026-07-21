import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

import TreatmentsPage from "@/components/sections/TreatmentsPage";

import GlobalBehaviours from "@/components/ui/GlobalBehaviours";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title:
    "LumaDent Studio | Dental Treatments in Chelsea",

  description:
    "Explore dental treatments at LumaDent Studio in Chelsea, including veneers, Invisalign, teeth whitening, dental implants, hygiene cleans and general dental care.",
};

export default function Treatments() {
  return (
    <>
      <GlobalBehaviours />

      <Preloader />

      <Header />

      <MobileNavigation />

      <main className="main treatments-background">
        <TreatmentsPage />
      </main>

      <Footer />
    </>
  );
}