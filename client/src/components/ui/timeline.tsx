import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
  grade?: string;
  description?: string;
  achievements?: string[];
  children?: ReactNode;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  location,
  grade,
  description,
  achievements,
  children
}: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="experience-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold gradient-text">{title}</h3>
            {subtitle && (
              <p className="text-lg font-medium text-foreground">{subtitle}</p>
            )}
            {location && (
              <p className="text-muted-foreground">{location}</p>
            )}
          </div>
          <div className="text-right">
            <span className="certification-badge">{period}</span>
            {grade && (
              <p className="text-sm text-muted-foreground mt-1">{grade}</p>
            )}
          </div>
        </div>
        
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        
        {achievements && (
          <ul className="text-muted-foreground space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        )}
        
        {children}
      </div>
    </div>
  );
}
