import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-y-2">
        {/* Left - Initials */}
        <motion.div 
          className="text-2xl font-bold text-primary"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          S.S.
        </motion.div>

        {/* Center - Email */}
        <motion.div 
          className="text-sm text-muted-foreground hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          theindianboy555@gmail.com
        </motion.div>

        {/* Right - Navigation + Theme Switcher */}
        <div className="flex items-center gap-4 ml-auto">
          <nav className="flex space-x-4 md:space-x-8">
            {[
              { label: 'ABOUT', id: 'about' },
              { label: 'WORK', id: 'work' },
              { label: 'CONTACT', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>
          {/* Theme Switcher */}
          {mounted && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">🌞</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle dark mode"
              />
              <span className="text-xs text-muted-foreground">🌙</span>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;