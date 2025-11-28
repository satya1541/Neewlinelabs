import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Static Website",
      price: "₹10,000",
      description: "Perfect for portfolios and landing pages",
      features: [
        "Professional responsive design",
        "Up to 5 pages",
        "Up to 5 custom domains",
        "Custom Email Domain (Complementary)",
        "Mobile-first approach",
        "SEO optimized",
        "Fast loading performance",
        "2 rounds of revisions",
        "30-day delivery",
      ],
      cta: "Get Started",
      highlighted: false,
      testId: "static-website",
      isContactUs: false,
    },
    {
      name: "Full-Stack",
      price: "Up to ₹50,000",
      priceSubtext: "Based on complexity",
      description: "Complete frontend & backend solution",
      features: [
        "Custom frontend development",
        "RESTful API development",
        "User authentication & authorization",
        "Third-party integrations",
        "Android app development",
        "iOS app development",
        "Responsive & interactive UI",
        "Comprehensive testing",
        "Priority support",
        "Up to 60 days priority delivery",
      ],
      cta: "Start Your Project",
      highlighted: true,
      testId: "full-stack",
      isContactUs: false,
    },
    {
      name: "Premium",
      price: "Let's Talk",
      priceSubtext: "Tailored to your vision",
      description: "Enterprise-grade complete solution",
      features: [
        "Everything in Full-Stack",
        "Advanced Android app development",
        "Advanced iOS app development",
        "Database design & optimization",
        "Cloud deployment (AWS/Azure/GCP)",
        "CI/CD pipeline setup",
        "Performance monitoring",
        "Security best practices",
        "3 months free maintenance",
        "Dedicated project manager",
        "On-site consultation available",
      ],
      cta: "Discuss Your Project",
      highlighted: false,
      testId: "premium",
      isContactUs: true,
    },
    {
      name: "Other Services",
      price: "Let's Talk",
      priceSubtext: "Specialized solutions",
      description: "Hardware & AI specialized services",
      features: [
        "IoT Solutions",
        "3D printing",
        "PCB designing",
        "Circuit Designing",
        "Embedded system development",
        "Model Training (AI/ML)",
        "Custom hardware integration",
        "Technical consultation",
      ],
      cta: "Get a Quote",
      highlighted: false,
      testId: "other-services",
      isContactUs: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Transparent pricing for your digital transformation
          </p>
          <p className="text-sm text-muted-foreground">
            Choose the package that fits your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary shadow-xl shadow-primary/20"
                  : "border-border"
              }`}
              data-testid={`card-pricing-${plan.testId}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-plan-name-${plan.testId}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-description-${plan.testId}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`feature-${plan.testId}-${idx}`}>
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-border">
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold" data-testid={`text-price-${plan.testId}`}>
                    {plan.price}
                  </div>
                  {plan.priceSubtext && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.priceSubtext}
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-primary hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={plan.isContactUs ? scrollToContact : scrollToContact}
                  data-testid={`button-cta-${plan.testId}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-3">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Custom Requirements?</strong> We understand every project is unique. 
            Prices may vary based on specific features, complexity, and timeline requirements.
          </p>
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            All packages include professional code quality, documentation, and post-delivery support. 
            GST applicable as per Indian tax laws. Payment milestones available for projects above ₹25,000.
          </p>
        </div>
      </div>
    </section>
  );
}
