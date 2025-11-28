import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  teamImage: string;
}

export default function AboutSection({ teamImage }: AboutSectionProps) {
  const stats = [
    { label: "Projects Completed", value: "70+" },
    { label: "Happy Clients", value: "70+" },
    { label: "Years Experience", value: "4+" },
    { label: "Team Members", value: "10" },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">NewLineLabs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2021, NewLineLabs has been at the forefront of technological innovation, 
              delivering cutting-edge solutions that transform businesses across industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of expert engineers and designers are passionate about creating solutions 
              that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="NewLineLabs Team"
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-card-border" data-testid={`card-stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-card-border" data-testid="card-mission">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth and success.
            </p>
          </Card>

          <Card className="p-8 border-card-border" data-testid="card-vision">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading technology partner trusted by enterprises worldwide for digital transformation.
            </p>
          </Card>

          <Card className="p-8 border-card-border" data-testid="card-values">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovation, integrity, and client success are at the core of everything we do.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
