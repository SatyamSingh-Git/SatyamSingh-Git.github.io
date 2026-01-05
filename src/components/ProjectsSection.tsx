import { motion } from 'framer-motion';

// Project images - using placeholder images for now
const smartIrrigationImg = '\ ML-IOT.png';
const multiAgentImg = '\ Mar Os.png';
const chatAnalyzerImg = '\ whatsapp.png';
const ayurGreensImg = '\ Ayusgreens.png'
const ragasEvaluationImg = '\ download.png';
const voiceAgentImg = '\ CCai.png';
const computerUseAgentImg = '\ computer-use.png';
const misinfoDetectorImg = '\ misinfo-detector.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: '01',
      title: 'Smart Irrigation System',
      category: 'ML + IoT',
      description: 'Engineered dual ML models for indoor/outdoor irrigation, reducing water usage by 20% and achieving 98% accuracy using KNN, SVM, and XGBoost algorithms.',
      tools: ['Python', 'Scikit-learn', 'ESP8266', 'NumPy', 'Pandas', 'MLExtend','XGBoost', 'Word Cloud', 'Charts & Graphs'],
      image: smartIrrigationImg
    },
    {
      id: '02', 
      title: 'Multi-Agent Retail Optimization',
      category: 'Reinforcement Learning',
      description: 'Developed a reinforcement learning-based multiagent system for inventory and pricing optimization, improving fulfillment by 25% with real-time dashboards.',
      tools: ['Python', 'Reinforcement Learning', 'Streamlit', 'BeautifulSoup', 'Data Analytics', 'Agentic AI'],
      image: multiAgentImg
    },
    {
      id: '03',
      title: 'WhatsApp Chat Analyzer', 
      category: 'NLP & Data Science',
      description: 'Built a full-featured chat analysis platform using Streamlit and NLP, enabling group/user analysis with sentiment, frequency, and emoji usage insights.',
      tools: ['Python', 'Streamlit', 'NLP', 'Data Visualization', 'Sentiment Analysis','Scikit-Learn', 'UrlExtract'],
      image: chatAnalyzerImg
    },
    {
      id: '04',
      title: 'AyurGreens – AI-Driven Android App',
      category: 'Android & AI', 
      description: 'Designed a Kotlin app with Jetpack Compose and Firebase, featuring a fine-tuned Gemini 2.5 Flash AI chatbot for medicinal plant discoveries and information.',
      tools: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini AI', 'SQLite', 'Material Design 3'],
      image: ayurGreensImg
    },
    {
      id: '05',
      title: 'RAGAs for LLM Evaluation',
      category: 'LLM Evaluation / NLP',
      description: 'Built a production-grade pipeline to evaluate LLM outputs using Retrieval-Augmented Generation Assessment (RAGAs), computing faithfulness, answer relevancy, and context precision with Gemini 2.5 Flash.',
      tools: ['Python', 'RAGAs', 'Google Gemini API', 'Jupyter Notebook', 'Data Analysis', 'LLM'],
      image: ragasEvaluationImg
    },
    {
      id: '06',
      title: 'Voice-Controlled Task Automation Agent',
      category: 'AI Assistant / Automation',
      description: 'Developed a voice-activated Python agent that executes system tasks like opening apps or writing files using commands or voice prompts, with API integration, .env setup, and support for commands like "Hey CC, open notepad".',
      tools: ['Python 3.11', 'Speech Recognition', 'OS Automation', 'dotenv', 'Voice Commands','Picovoice', 'PyAutoGUI', 'Selenium'],
      image: voiceAgentImg
    },
    {
      id: '07',
      title: 'Computer Use Agent – AI-Powered Automation Platform',
      category: 'AI Automation / Enterprise',
      description: 'Engineered a scalable desktop automation platform with Python, PyQt, Selenium, and Gemini (LLM) backend, automating multistep workflows across browsers and applications. Delivered a cloud-ready, self-healing system where Gemini AI executes real-time corrective actions, ensuring enterprise reliability and reducing manual interventions by 70%. Integrated voice-based commands with Whisper & Picovoice, achieving 95% recognition accuracy.',
      tools: ['Python', 'PyQt', 'Selenium', 'Gemini LLM', 'Whisper', 'Picovoice', 'Cloud', 'Self-Healing AI'],
      image: computerUseAgentImg
    },
    {
      id: '08',
      title: 'AI Misinformation Detector – Multimodal Forensic AI System',
      category: 'Multimodal AI / Security',
      description: 'Developed a multimodal AI detector integrating text, image, and metadata pipelines, achieving 85%+ accuracy and 0.82 confidence on misinformation verdicts. Built a 6-layer forensic pipeline by combining CLIP, GNNs, Deepfake, and Gemini 2.5 Flash for cross-modal reasoning and real-time Google Cloud (GCP) Fact Check API verification. Engineered a FastAPI + Docker backend handling 100+ concurrent requests/sec. Delivered explainable AI outputs including sentiment and linguistic analysis, confidence (0.91), coherence scoring (0.25), and transparent correction insights for user trust.',
      tools: ['Python', 'CLIP', 'GNNs', 'Gemini 2.5 Flash', 'FastAPI', 'Docker', 'GCP', 'Deepfake Detection', 'NLP'],
      image: misinfoDetectorImg
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover-scale"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-white font-bold text-sm bg-purple-800/90 backdrop-blur-sm px-3 py-2 rounded-full border-2 border-white/30 shadow-lg">
                    Project {project.id}
                  </span>
                </div>
                {/* Dark overlay for better text visibility */}
                <div className="absolute top-0 left-0 w-24 h-16 bg-gradient-to-br from-black/40 to-transparent rounded-br-2xl" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tools */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded border border-muted group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;