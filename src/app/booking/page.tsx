import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

import BookingPage from "@/components/sections/BookingPage";

import GlobalBehaviours from "@/components/ui/GlobalBehaviours";

import BookingBehaviours from "@/components/ui/BookingBehaviours";

import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title:
    "LumaDent Studio | Book a Dental Consultation in Chelsea",

  description:
    "Book a dental consultation with LumaDent Studio in Chelsea. Request cosmetic dentistry, general dental care, Invisalign, veneers or emergency appointments online.",

  alternates: {
    canonical: "/booking",
  },

  openGraph: {
    title:
      "LumaDent Studio | Book a Dental Consultation in Chelsea",

    description:
      "Book a dental consultation with LumaDent Studio in Chelsea. Request cosmetic dentistry, general dental care, Invisalign, veneers or emergency appointments online.",

    url: "/booking",

    type: "website",

    images: [
      {
        url: "/images/icons/logo.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LumaDent Studio | Book a Dental Consultation in Chelsea",

    description:
      "Book a dental consultation with LumaDent Studio in Chelsea. Request cosmetic dentistry, general dental care, Invisalign, veneers or emergency appointments online.",

    images: ["/images/icons/logo.png"],
  },
};

export default function Booking() {
  return (
    <>
      <GlobalBehaviours />

      <BookingBehaviours />

      <Preloader />

      <Header />

      <MobileNavigation />

      <main className="main booking-background">
        <BookingPage />
      </main>

      <Footer />
    </>
  );
}