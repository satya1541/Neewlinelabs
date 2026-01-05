import PortfolioSection from '../PortfolioSection';
import dashboardImage from '@assets/generated_images/Web_dashboard_project_mockup_5332d007.png';
import mobileImage from '@assets/generated_images/Mobile_app_project_showcase_3fe1e034.png';
import iotImage from '@assets/generated_images/IoT_systems_project_visual_3c178d71.png';

export default function PortfolioSectionExample() {
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

  return <PortfolioSection projects={projects} />;
}
