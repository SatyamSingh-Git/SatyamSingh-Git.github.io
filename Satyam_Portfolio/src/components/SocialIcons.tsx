import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SatyamSingh-Git', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/satyam--singh--/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/theindianboy__', label: 'Instagram' }
  ];

  return (
    <motion.div 
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 20px hsl(270 91% 65% / 0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon size={18} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;