import { TimelineItem } from "@/components/ui/timeline";
import { experience, education } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          {experience.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              location={exp.location}
              achievements={exp.achievements}
            />
          ))}
          
          {/* Education */}
          {education.map((edu, index) => (
            <TimelineItem
              key={`edu-${index}`}
              title={edu.degree}
              subtitle={edu.field}
              period={edu.period}
              location={edu.institution}
              grade={edu.grade}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
