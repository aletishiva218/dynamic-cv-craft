import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Server, Database, Monitor
} from 'lucide-react';
import SimpleDonutChart from './SimpleDonutChart';

const AnimatedSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={28} className="text-portfolio-blue" />,
      skills: [
        { name: "HTML", value: 95 },
        { name: "CSS", value: 90 },
        { name: "JavaScript", value: 95 },
        { name: "React.js", value: 90 },
        { name: "Tailwind CSS", value: 90 }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={28} className="text-portfolio-blue" />,
      skills: [
        { name: "Node.js", value: 85 },
        { name: "Express.js", value: 85 },
        { name: "PHP", value: 75 }
      ]
    },
    {
      title: "Database",
      icon: <Database size={28} className="text-portfolio-blue" />,
      skills: [
        { name: "MongoDB", value: 80 },
        { name: "PostgreSQL", value: 75 },
        { name: "MySQL", value: 80 }
      ]
    },
    {
      title: "Others",
      icon: <Code size={28} className="text-portfolio-blue" />,
      skills: [
        { name: "Git", value: 90 },
        { name: "Docker", value: 70 },
        { name: "TypeScript", value: 70 },
        { name: "WordPress", value: 80 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-portfolio-gray max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are the technologies and tools I'm proficient with, organized by skill categories with visual proficiency indicators.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <SimpleDonutChart
              key={category.title}
              title={category.title}
              data={category.skills}
              icon={category.icon}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSkillsSection;