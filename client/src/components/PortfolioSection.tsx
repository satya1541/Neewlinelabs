import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioSectionProps {
  projects: PortfolioProject[];
}

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative projects that demonstrate our technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer border-card-border"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${index}`}>
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs" data-testid={`badge-tag-${index}-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
