import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/ui/typing-text";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="section flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Pranav</span>
            </h1>
            <div className="text-2xl lg:text-3xl mb-6 h-16">
              <TypingText
                texts={personalInfo.roles}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="font-medium"
              />
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="profile-image relative">
              <img
                src={personalInfo.profileImage}
                alt="Pranav Pisal - Professional Developer"
                className="w-full h-full object-cover"
              />
              <div className="floating-element absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              <div className="floating-element absolute -bottom-10 -left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
