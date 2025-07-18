import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks  } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="gradient-text text-2xl font-bold mb-4">
            {personalInfo.name}
          </div>
          <p className="text-muted-foreground mb-6">
            Computer Engineer | Full-Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiLeetcode className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiGeeksforgeeks className="w-5 h-5" />
            </a>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              &copy; 2024 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
