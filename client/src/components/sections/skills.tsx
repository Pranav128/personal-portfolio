import { SkillBar } from "@/components/ui/skill-bar";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={skillCategory.category} className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary/20">
              <div className="mb-6">
                <h3 className="text-xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  {skillCategory.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
