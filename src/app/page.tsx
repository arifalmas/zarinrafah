"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollToHash() {
      if (typeof window === "undefined") return;
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.slice(1);
      // small delay to ensure DOM is ready after route change
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // run on mount / route change
    scrollToHash();

    // also handle user-driven hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}

import About from "./components/About/about";
import CtaSection from "./CTA";
import FaqSection from "./Faq/";
import { FeedbackSection } from "./Feedbacks/index";
import Footer from "./Footer";
import Hero from "./home/hero";
import PricingSection from "./Pricing/";
import RoadmapAnimation from "./Process/index";
import Services from "./Services/index";
// import ServicesCard from "./Services/services";
import SolutionSection from "./Solution/";
import WorksShowcase from "./Works/index";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <ServicesCard /> */}
        <RoadmapAnimation />
        <WorksShowcase />
        <SolutionSection />
        <PricingSection />
        <FeedbackSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
