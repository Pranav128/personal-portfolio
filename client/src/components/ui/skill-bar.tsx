import { useState, useEffect, useRef } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export function SkillBar({ skill, level, delay = 0 }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm group-hover:text-primary transition-colors">{skill}</span>
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-bold">{level}%</span>
      </div>
      <div className="skill-bar group-hover:shadow-md transition-shadow">
        <div
          className="skill-progress group-hover:brightness-110 transition-all"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
}
