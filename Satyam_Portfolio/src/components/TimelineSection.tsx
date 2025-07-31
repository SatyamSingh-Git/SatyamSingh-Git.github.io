import { motion } from 'framer-motion';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: '1 Jun-31 July, 2025',
      title: 'Quantum Machine Learning Research Intern',
      company: 'SAG, DRDO Delhi',
      description: "Implemented various QML algorithms (like Grover's and Shor's), optimized quantum circuits using Solovay–Kitaev approximations, and improved QML model accuracy and speed.",
      type: 'career'
    },
    {
      date: 'August 2023',
      title: 'B.Tech in Electronics and Communication Engineering',
      company: 'National Institute of Technology Delhi',
      description: 'Currently in 3rd year, exploring AI and ML in electronics',
      type: 'education'
    },
    {
      date: 'July 2021-July 2022',
      title: 'Senior Secondary Education (12th) in CBSE Board',
      company: 'Gurukul Academy Dehwa, Lucknow',
      description: 'Passed with flying color, have been one of the top performer in class with 90.1%',
      type: 'education'
    },
    {
      date: 'July 2019 - July 2020',
      title: 'Secondary Education (10th) in CBSE Board',
      company: 'Gurukul Academy Dehwa, Lucknow',
      description: 'Have served as the School Head Boy, along with achieving the award of Rising Sun, and have been the class topper with 93.4%',
      type: 'education'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Career & Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent opacity-60" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline node */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow" />
              </motion.div>

              {/* Content card */}
              <motion.div 
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-glow">
                  <motion.div 
                    className="text-primary font-bold text-lg mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {event.date}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {event.title}
                  </motion.h3>
                  <motion.p 
                    className="text-primary font-medium mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    {event.company}
                  </motion.p>
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    {event.description}
                  </motion.p>
                  <motion.div 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                      event.type === 'career' 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-accent/20 text-accent-foreground border border-accent/30'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                    viewport={{ once: true }}
                  >
                    {event.type === 'career' ? 'Career' : 'Education'}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;