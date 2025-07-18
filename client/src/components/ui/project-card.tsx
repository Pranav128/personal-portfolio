import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  features,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="project-card group">
      <div className="mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="certification-badge">
            {tech}
          </Badge>
        ))}
      </div>
      
      <ul className="text-sm text-muted-foreground mb-6 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex gap-3">
        {liveUrl && (
          <Button className="btn-primary flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
        )}
        
        {githubUrl && (
          <Button variant="outline" className="px-4" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
