import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    tools: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Task Management App',
    category: 'Frontend',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tools: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Weather Dashboard',
    category: 'Frontend',
    description: 'An interactive weather dashboard that provides real-time weather data, forecasts, and climate visualizations using external APIs.',
    tools: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Social Media Analytics',
    category: 'Data Science',
    description: 'A comprehensive analytics platform for social media metrics, engagement tracking, and performance visualization.',
    tools: ['Python', 'Pandas', 'D3.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Fitness Tracking App',
    category: 'Mobile',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features.',
    tools: ['React Native', 'Express', 'MongoDB', 'Redux'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'Portfolio Generator',
    category: 'Full Stack',
    description: 'A dynamic portfolio generator that allows users to create and customize their professional portfolios with various templates.',
    tools: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
  },
  {
    id: '07',
    title: 'Computer Use Agent – AI-Powered Automation Platform',
    category: 'AI Automation / Enterprise',
    description: 'Engineered a scalable desktop automation platform with Python, PyQt, Selenium, and Gemini (LLM) backend, automating multistep workflows across browsers and applications. Delivered a cloud-ready, self-healing system where Gemini AI executes real-time corrective actions, ensuring enterprise reliability and reducing manual interventions by 70%. Integrated voice-based commands with Whisper & Picovoice, achieving 95% recognition accuracy.',
    tools: ['Python', 'PyQt', 'Selenium', 'Gemini LLM', 'Whisper', 'Picovoice', 'Cloud', 'Self-Healing AI', 'Voice Commands'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
  },
  {
    id: '08',
    title: 'AI Misinformation Detector – Multimodal Forensic AI System',
    category: 'Multimodal AI / Security',
    description: 'Developed a multimodal AI detector integrating text, image, and metadata pipelines, achieving 85%+ accuracy and 0.82 confidence on misinformation verdicts. Built a 6-layer forensic pipeline by combining CLIP, GNNs, Deepfake, and Gemini 2.5 Flash for cross-modal reasoning and real-time Google Cloud (GCP) Fact Check API verification. Engineered a FastAPI + Docker backend handling 100+ concurrent requests/sec. Delivered explainable AI outputs including sentiment and linguistic analysis, confidence (0.91), coherence scoring (0.25), and transparent correction insights for user trust.',
    tools: ['Python', 'CLIP', 'GNNs', 'Gemini 2.5 Flash', 'FastAPI', 'Docker', 'GCP', 'Deepfake Detection', 'NLP', 'Explainable AI'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}