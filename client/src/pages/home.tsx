import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <title>Pranav Pisal - Portfolio</title>
      <meta name="description" content="Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving. Passionate about creating innovative software solutions." />
      <meta property="og:title" content="Pranav Pisal - Portfolio" />
      <meta property="og:description" content="Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving." />
      <meta property="og:type" content="website" />
      
      <AnimatedBackground />
      <Navigation />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
