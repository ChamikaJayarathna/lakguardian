import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));
const Hero = lazy(() => import("@/components/Hero"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const MissionVision = lazy(() => import("@/components/MissionVision"));
const Founder = lazy(() => import("@/components/Founder"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[200px]">
            Loading...
          </div>
        }
      >
        <Navbar />
        <Hero />
        <AboutUs />
        <MissionVision />
        <Founder />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
