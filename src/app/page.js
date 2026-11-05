import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import ProofStrip from "@/components/home/ProofStrip";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesPreview from "@/components/home/ServicesPreview";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProofStrip />
      <HowItWorks />
      <ServicesPreview />
      <CaseStudyTeaser />
      <Testimonials />
      <FinalCTA />
    </>
  );
}