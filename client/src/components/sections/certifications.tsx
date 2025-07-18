import { Award, Code, Trophy, Cloud } from "lucide-react";
import { certifications, personalInfo } from "@/lib/data";

const iconMap = {
  java: Award,
  code: Code,
  trophy: Trophy,
  cloud: Cloud
};

export function Certifications() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon as keyof typeof iconMap] || Award;
            return (
              <div key={index} className="achievement-card">
                <div className="text-4xl mb-4 text-primary">
                  <IconComponent className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-3">{cert.description}</p>
                <span className="certification-badge">{cert.date}</span>
              </div>
            );
          })}
          
          <div className="achievement-card">
            <div className="text-4xl mb-4 text-purple-500">
              <Code className="w-10 h-10 mx-auto" />
            </div>
            <h3 className="text-lg font-bold mb-2">LeetCode Profile</h3>
            <p className="text-muted-foreground mb-3">
              Active problem solver with consistent practice
            </p>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-badge hover:bg-purple-500 hover:text-white cursor-pointer"
            >
              View Profile
            </a>
          </div>
          
          <div className="achievement-card">
            <div className="text-4xl mb-4 text-orange-500">
              <Award className="w-10 h-10 mx-auto" />
            </div>
            <h3 className="text-lg font-bold mb-2">GeeksforGeeks</h3>
            <p className="text-muted-foreground mb-3">
              Active contributor and problem solver
            </p>
            <a
              href={personalInfo.socialLinks.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-badge hover:bg-orange-500 hover:text-white cursor-pointer"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
