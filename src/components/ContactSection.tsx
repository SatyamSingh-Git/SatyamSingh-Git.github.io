import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Contact</h3>
            
            <motion.div 
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <Mail size={20} />
              <span>231220054@nitdelhi.ac.in</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <Phone size={20} />
              <span>+91 6387946481</span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Social</h3>
            
            <motion.a
              href="https://github.com/SatyamSingh-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/satyam--singh--/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Credit */}
          <motion.div 
            className="space-y-6 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Credit</h3>
            
            <div className="space-y-2 text-muted-foreground">
              <p>Designed and Developed by</p>
              <p className="text-primary font-semibold">Satyam Singh</p>
              <p>© 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom separator */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Crafted with passion for AI, Quantum, and Modern Web 🚀</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;