import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Layers, Cloud, Database, Atom, Smartphone, Users } from 'lucide-react';

const skills = {
  "Programming": {
    icon: Code2,
    items: ["Python", "C++", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  "AI & ML": {
    icon: Brain,
    items: [
      "RAG", "LLMs", "Agentic AI", "NLP", "Prompt Engineering", 
      "Model Performance Evaluation", "Computer Vision", "TensorFlow", 
      "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", 
      "LangChain", "Regression", "Classification", "Deep Learning", 
      "Model Optimization", "Autonomous Agents"
    ],
    color: "from-purple-500 to-pink-500"
  },
  "Frameworks": {
    icon: Layers,
    items: [
      "PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", 
      "LangChain", "Numpy", "Pandas", "RAGAS", "Streamlit"
    ],
    color: "from-orange-500 to-red-500"
  },
  "Backend & Cloud": {
    icon: Cloud,
    items: [
      "Flask", "Django", "Firebase", "Google Cloud (GCP)", 
      "Azure", "AWS", "SQLite", "Docker"
    ],
    color: "from-green-500 to-emerald-500"
  },
  "Tools & Database": {
    icon: Database,
    items: [
      "Git", "PyCharm", "ChatGPT", "Claude", "Gemini", 
      "MongoDB", "VectorDB", "VSCode", "Jupyter", 
      "Google Colab", "BeautifulSoup"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  "Quantum ML": {
    icon: Atom,
    items: [
      "Qiskit", "Quantum Circuits", "Grover's Algorithm", 
      "Shor's Algorithm", "IBM Quantum", "Solovay–Kitaev", 
      "Quantum Speedup", "Quantum Model Accuracy"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  "Android Development": {
    icon: Smartphone,
    items: [
      "Kotlin", "Jetpack Compose", "Firebase", "SQLite", 
      "Material Design 3", "NLP Integration", "AI Chatbot", 
      "Android UI/UX", "App Optimization"
    ],
    color: "from-teal-500 to-cyan-500"
  },
  "Soft Skills": {
    icon: Users,
    items: [
      "Teamwork", "Analytical Thinking", "Technical Communication", 
      "Problem-Solving", "Quick Learner"
    ],
    color: "from-rose-500 to-pink-500"
  }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate AI/ML Engineer and developer with a strong focus on building
              intelligent systems and applications. My journey in technology has led me to
              explore various domains including machine learning, deep learning, quantum
              computing, and mobile development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With expertise in cutting-edge technologies like RAG, LLMs, and Agentic AI,
              I strive to create innovative solutions that push the boundaries of what's
              possible with artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in developing AI-powered applications, implementing machine
              learning models, and creating scalable backend systems. My work spans across
              various technologies including PyTorch, TensorFlow, LangChain, and cloud
              platforms like GCP, Azure, and AWS.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether it's building intelligent chatbots, optimizing deep learning models,
              or exploring quantum machine learning algorithms, I'm always excited to
              tackle new challenges and learn emerging technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Skills & Technologies</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, { icon: Icon, items, color }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white ml-3">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;