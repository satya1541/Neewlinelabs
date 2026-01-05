import { Card } from "@/components/ui/card";

import webDevImage from '@assets/generated_images/Web_development_workspace_2cbc897f.png';
import cloudImage from '@assets/generated_images/Cloud_services_infrastructure_481c439d.png';
import iotImage from '@assets/generated_images/IoT_connected_devices_f835f149.png';
import embeddedImage from '@assets/generated_images/Embedded_systems_hardware_32b80e6c.png';
import mobileImage from '@assets/generated_images/Mobile_app_interface_054b0019.png';
import marketingImage from '@assets/generated_images/Digital_marketing_analytics_36e4df7d.png';
import backendImage from '@assets/generated_images/Backend_development_architecture_04d902c8.png';
import databaseImage from '@assets/generated_images/Database_management_system_7c733228.png';
import printingImage from '@assets/generated_images/3D_printing_technology_e8a94d9a.png';
import pcbImage from '@assets/generated_images/PCB_design_workstation_408ae809.png';
import circuitImage from '@assets/generated_images/Circuit_design_schematic_24505a11.png';
import embeddedCodingImage from '@assets/generated_images/Embedded_systems_coding_ac150653.png';
import modelTrainingImage from '@assets/generated_images/Model_training_visualization_3f9c0a41.png';
import uiuxImage from '@assets/generated_images/UX_design_workspace_a0fca40f.png';

const services = [
  {
    image: webDevImage,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance.",
  },
  {
    image: backendImage,
    title: "Backend Development",
    description: "Robust server-side applications and APIs designed for scalability, security, and high performance.",
  },
  {
    image: databaseImage,
    title: "Database Management",
    description: "Expert database design, optimization, and administration for efficient data storage and retrieval.",
  },
  {
    image: cloudImage,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration solutions to power your business growth seamlessly.",
  },
  {
    image: iotImage,
    title: "IoT Solutions",
    description: "Connected device ecosystems and smart technology integration for the future of automation.",
  },
  {
    image: printingImage,
    title: "3D Printing",
    description: "Advanced additive manufacturing solutions for rapid prototyping and custom product development.",
  },
  {
    image: pcbImage,
    title: "PCB Designing",
    description: "Professional printed circuit board design with precision layout and optimal signal integrity.",
  },
  {
    image: circuitImage,
    title: "Circuit Designing",
    description: "Custom electronic circuit design and analysis for specialized hardware applications and devices.",
  },
  {
    image: embeddedImage,
    title: "Embedded Systems",
    description: "Advanced embedded software and hardware solutions for specialized industrial applications.",
  },
  {
    image: embeddedCodingImage,
    title: "Embedded Coding",
    description: "Low-level firmware and embedded software development for microcontrollers and real-time systems.",
  },
  {
    image: mobileImage,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    image: modelTrainingImage,
    title: "Model Training",
    description: "Machine learning model development and training for intelligent data-driven solutions.",
  },
  {
    image: uiuxImage,
    title: "UI/UX Designing",
    description: "User-centered interface design focused on creating intuitive and engaging digital experiences.",
  },
  {
    image: marketingImage,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies and campaigns that amplify your brand's digital presence.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer border-card-border"
              data-testid={`card-service-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
