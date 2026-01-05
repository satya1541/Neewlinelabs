import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by 70+ businesses worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation
            </span>
            {" "}Meets{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your business with cutting-edge solutions in web development, cloud services, 
            IoT, embedded systems, mobile apps, and digital marketing.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="group animate-pulse-glow"
              onClick={scrollToContact}
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="backdrop-blur-sm bg-background/50"
              onClick={scrollToServices}
              data-testid="button-our-services"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
