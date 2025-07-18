import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-2 right-4 z-50 w-12 h-12 rounded-full glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 group shadow-lg"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500 group-hover:text-yellow-600" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400 group-hover:text-blue-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
