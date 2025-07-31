import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
        
        {/* Left - Introduction */}
        <motion.div 
          className="space-y-4 text-left lg:text-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello! I'm
          </motion.p>
          <motion.h1 
            className="text-6xl lg:text-7xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Satyam Singh
          </motion.h1>
        </motion.div>

        {/* Center - Profile Photo */}
        <motion.div 
          className="h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            <motion.img
              src="/satyam-profile.png"
              alt="Satyam Singh - ECE Student & ML Engineer"
              className="w-80 h-[32rem] object-cover rounded-full border-4 border-primary/20 shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ borderRadius: '9999px' }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 60px hsl(270 91% 65% / 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 animate-pulse-glow" 
                 style={{ borderRadius: '9999px' }} />
          </div>
        </motion.div>

        {/* Right - Roles */}
        <motion.div 
          className="space-y-4 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-xl lg:text-2xl font-extrabold text-primary text-glow mb-2 tracking-wide uppercase">
            



            </p>
            <div className="space-y-2 text-lg lg:text-xl font-medium ml-8">
              <div className="flex flex-col gap-2">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 to-primary text-primary-foreground font-bold shadow-md w-fit mb-1">Machine Learning (ML)</span>
                <span className="text-muted-foreground ml-4">Regression, Classification, Deep Learning, Model Optimization</span>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 to-primary text-primary-foreground font-bold shadow-md w-fit mb-1">Agentic AI</span>
                <span className="text-muted-foreground ml-4">LLMs, LangChain, Prompt Engineering, Autonomous Agents</span>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 to-primary text-primary-foreground font-bold shadow-md w-fit mb-1">Android Development</span>
                <span className="text-muted-foreground ml-4">Kotlin, Jetpack Compose, Material Design, AI Integration</span>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 to-primary text-primary-foreground font-bold shadow-md w-fit mb-1">Quantum Machine Learning (QML)</span>
                <span className="text-muted-foreground ml-4 mb-12">Grover's, Shor's, Quantum Circuits, Qiskit</span>
              </div>
              {/* Resume Button - placed below QML expertise */}
              <motion.div 
                className="flex justify-center mt-20 pt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1.0 }}
              >
                <motion.a
                  href="https://drive.google.com/file/d/1WOCC0BOG-1Yd3kekOsnSSBcFnCxAMKdN/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-primary to-accent text-white font-black text-xl shadow-2xl border-2 border-primary/30 text-center cursor-pointer w-full max-w-xs overflow-hidden"
                  tabIndex={0}
                  aria-label="Open Resume in new tab"
                  whileHover={{ 
                    scale: 1.1,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4), 0 0 50px rgba(168, 85, 247, 0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 15px 30px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)",
                      "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.3)",
                      "0 15px 30px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    hover: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-xl opacity-75"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgb(168, 85, 247), rgb(139, 92, 246), rgba(44, 121, 245, 1))",
                        "linear-gradient(45deg, rgba(30, 113, 247, 1), rgb(168, 85, 247), rgb(139, 92, 246))",
                        "linear-gradient(45deg, rgb(139, 92, 246), rgba(37, 117, 246, 1), rgb(168, 85, 247))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <span className="relative z-10 font-black tracking-wider drop-shadow-lg">
                    RESUME
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        animate-class="animate-pulse"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;