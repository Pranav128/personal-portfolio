import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              features={project.features}
              liveUrl="#"
              githubUrl="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
