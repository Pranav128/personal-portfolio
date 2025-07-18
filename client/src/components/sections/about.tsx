import { Linkedin, Github, Code, Terminal } from "lucide-react";
import { personalInfo, achievements } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={personalInfo.aboutImage}
              alt="Modern coding workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Passionate Computer Engineer</h3>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a Computer Engineer with expertise in Java development, database management, and full-stack solutions. 
              I excel in solving complex problems and crafting user-friendly applications that make a difference.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              With a blend of technical prowess and creative flair, I aim to deliver innovative solutions that exceed expectations. 
              My passion for continuous learning and collaboration drives me to push the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
