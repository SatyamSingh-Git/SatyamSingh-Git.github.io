import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

// Simple 3D sphere for each tech box
const Sphere3D = () => (
  <Canvas style={{ width: 32, height: 32 }} camera={{ position: [0, 0, 2.5], fov: 50 }}>
    <ambientLight intensity={0.7} />
    <pointLight position={[2, 2, 2]} intensity={0.7} />
    <mesh>
      <sphereGeometry args={[0.45, 24, 24]} />
      <meshStandardMaterial color="#9333ea" metalness={0.7} roughness={0.2} emissive="#9333ea" emissiveIntensity={0.15} />
    </mesh>
  </Canvas>
);

const TechStackSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          MY TECHSTACK
        </motion.h2>

        {/* Tech Stack List with 3D spheres in boxes */}
        <motion.div 
          className="max-w-5xl mx-auto mt-2 px-2 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy',
              'OpenCV', 'LangChain', 'Qiskit', 'Kotlin', 'Jetpack Compose', 'Firebase',
              'SQLite', 'Material Design 3', 'Streamlit', 'BeautifulSoup', 'Git', 'VSCode',
              'Jupyter', 'Google Colab', 'C++', 'C', 'NLP', 'IoT'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="w-full min-h-[48px] flex items-center justify-center px-3 py-2 rounded-lg text-center text-base border font-semibold transition-colors duration-300 shadow-md hover:scale-105 bg-gradient-to-r from-primary to-accent text-primary-foreground border-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                <span>{tech}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
