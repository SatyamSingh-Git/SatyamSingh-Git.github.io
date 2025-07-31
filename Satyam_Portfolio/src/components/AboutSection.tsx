import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Simple desk and computer scene using basic Three.js geometry
const DeskScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Desk */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      
      {/* Computer Monitor */}
      <mesh position={[0, 0.3, 0.3]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      
      {/* Computer Screen */}
      <mesh position={[0, 0.3, 0.33]}>
        <boxGeometry args={[0.7, 0.5, 0.01]} />
        <meshStandardMaterial color="#9333ea" emissive="#9333ea" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.4, 0.6]}>
        <boxGeometry args={[0.6, 0.02, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      {/* Avatar sitting */}
      <mesh position={[0, 0, 0.8]}>
        <boxGeometry args={[0.3, 0.4, 0.3]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
    </group>
  );
};

const AboutSection = () => {
  const skills = {
    aiml: [
      'Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'OpenCV', 'LangChain',
      'Regression', 'Classification', 'Deep Learning', 'Model Optimization', 'Prompt Engineering', 'LLMs', 'Autonomous Agents'
    ],
    quantum: [
      'Qiskit', 'Quantum Circuits', "Grover's Algorithm", "Shor's Algorithm", 'IBM Quantum', 'Solovay–Kitaev', 'Quantum Speedup', 'Quantum Model Accuracy'
    ],
    android: [
      'Kotlin', 'Jetpack Compose', 'Firebase', 'SQLite', 'Material Design 3', 'NLP Integration', 'AI Chatbot', 'Android UI/UX', 'App Optimization'
    ],
    tools: [
      'Git', 'VSCode', 'Jupyter', 'Google Colab', 'Streamlit', 'BeautifulSoup', 'C++', 'C', 'IoT', 'Data Visualization', 'Sentiment Analysis'
    ]
  };

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - 3D Scene */}
          <motion.div 
            className="h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#9333ea" />
              <DeskScene />
            </Canvas>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            {/* AI/ML Section */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                QUANTUM ML & AI ENGINEERING
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Currently interning at DRDO working on Quantum Machine Learning, implementing algorithms like 
                Grover's and Shor's, while developing practical AI solutions with 98% accuracy in real-world applications.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {skills.aiml.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-colors duration-300 shadow-md hover:shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Android & App Development Section */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                ANDROID & APP DEVELOPMENT
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                Developing AI-integrated Android applications like AyurGreens with Kotlin, Jetpack Compose, 
                and modern Material Design 3 UI with seamless AI chatbot integration.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                {skills.android.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-colors duration-300 shadow-md hover:shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;