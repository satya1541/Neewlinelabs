import Header from "@/components/Header";
import PromoSplash from "@/components/PromoSplash";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import heroImage from '@assets/generated_images/Premium_tech_gradient_background_c69f9830.png';
import dashboardImage from '@assets/generated_images/Web_dashboard_project_mockup_5332d007.png';
import mobileImage from '@assets/generated_images/Mobile_app_project_showcase_3fe1e034.png';
import iotImage from '@assets/generated_images/IoT_systems_project_visual_3c178d71.png';
import teamImage from '@assets/generated_images/Team_collaboration_office_photo_0ea25770.png';

export default function HomePage() {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      category: "Web Development",
      description: "A comprehensive analytics dashboard for real-time business intelligence and data visualization.",
      image: dashboardImage,
      tags: ["React", "TypeScript", "D3.js", "Cloud"],
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: mobileImage,
      tags: ["React Native", "Security", "API Integration"],
    },
    {
      title: "Smart Factory IoT System",
      category: "IoT & Embedded",
      description: "Connected industrial automation system with predictive maintenance and real-time monitoring.",
      image: iotImage,
      tags: ["IoT", "Embedded C", "MQTT", "Edge Computing"],
    },
  ];

  return (
    <div className="min-h-screen">
      <PromoSplash />
      <Header />
      <PromoBanner />
      <main>
        <HeroSection backgroundImage={heroImage} />
        <ServicesSection />
        <PortfolioSection projects={projects} />
        <AboutSection teamImage={teamImage} />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
