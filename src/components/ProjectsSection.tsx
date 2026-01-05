import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description: "Developed an intelligent code review system using GPT-4 and static analysis tools to provide automated feedback on code quality, security vulnerabilities, and best practices.",
    image: "/project-placeholder.png",
    tools: ["Python", "GPT-4", "FastAPI", "Docker", "GitHub Actions"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Real-time Collaborative Whiteboard",
    description: "Built a scalable real-time collaboration platform with WebSocket support, allowing multiple users to draw, annotate, and share ideas simultaneously.",
    image: "/project-placeholder.png",
    tools: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "E-Commerce Analytics Dashboard",
    description: "Created a comprehensive analytics dashboard for e-commerce businesses, featuring real-time sales tracking, customer behavior analysis, and predictive insights.",
    image: "/project-placeholder.png",
    tools: ["TypeScript", "React", "D3.js", "PostgreSQL", "AWS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Smart Home IoT Platform",
    description: "Designed and implemented a complete IoT ecosystem for smart home automation, including device management, scheduling, and energy optimization.",
    image: "/project-placeholder.png",
    tools: ["Python", "MQTT", "Raspberry Pi", "React Native", "Firebase"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Machine Learning Pipeline Framework",
    description: "Built an end-to-end ML pipeline framework that automates data preprocessing, model training, evaluation, and deployment with built-in versioning.",
    image: "/project-placeholder.png",
    tools: ["Python", "TensorFlow", "Kubernetes", "MLflow", "Apache Airflow"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Blockchain-based Supply Chain Tracker",
    description: "Developed a transparent supply chain management system using blockchain technology to track product authenticity and movement across the distribution network.",
    image: "/project-placeholder.png",
    tools: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 7,
    title: "Computer Use Agent – AI-Powered Automation Platform",
    description: "Engineered a scalable desktop automation platform with Python, PyQt, Selenium, and Gemini (LLM) backend, automating multistep workflows across browsers and applications. Delivered a cloud-ready, self-healing system where Gemini AI executes real-time corrective actions, ensuring enterprise reliability and reducing manual interventions by 70%. Integrated voice-based commands with Whisper & Picovoice, achieving 95% recognition accuracy.",
    image: "/project-placeholder.png",
    tools: ["Python", "PyQt", "Selenium", "Gemini LLM", "Whisper", "Picovoice", "Cloud", "Voice Commands"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 8,
    title: "AI Misinformation Detector – Multimodal Forensic AI System",
    description: "Developed a multimodal AI detector integrating text, image, and metadata pipelines, achieving 85%+ accuracy and 0.82 confidence on misinformation verdicts. Built a 6-layer forensic pipeline by combining CLIP, GNNs, Deepfake, and Gemini 2.5 Flash for cross-modal reasoning and real-time Google Cloud (GCP) Fact Check API verification. Engineered a FastAPI + Docker backend handling 100+ concurrent requests/sec. Delivered explainable AI outputs including sentiment and linguistic analysis, confidence (0.91), coherence scoring (0.25), and transparent correction insights for user trust.",
    image: "/project-placeholder.png",
    tools: ["Python", "CLIP", "GNNs", "Gemini 2.5 Flash", "FastAPI", "Docker", "GCP", "Deepfake Detection", "NLP"],
    liveLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in software development, AI/ML, and system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;