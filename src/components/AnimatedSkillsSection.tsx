import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Server, Database, GitBranch, 
  Monitor, Terminal, Boxes, Globe 
} from 'lucide-react';

const AnimatedSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={28} className="text-portfolio-green" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server size={28} className="text-portfolio-green" />,
      skills: ["Node.js", "Express.js", "PHP"]
    },
    {
      title: "Database",
      icon: <Database size={28} className="text-portfolio-green" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Others",
      icon: <Code size={28} className="text-portfolio-green" />,
      skills: ["Git", "Docker", "TypeScript", "WordPress"]
    }
  ];

  const skillsData = [
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "JavaScript", percentage: 95 },
    { name: "MongoDB", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Express.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "TypeScript", percentage: 70 }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
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
            Here are the technologies and tools I'm proficient with, categorized by area of expertise.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.05 
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-portfolio-green/5 to-portfolio-lightGreen/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="flex items-center gap-3 mb-4 relative z-10"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-portfolio-darkGray">{category.title}</h3>
              </motion.div>
              
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill} 
                    className="skill-item group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 + 0.5, duration: 0.4 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-portfolio-green"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-portfolio-darkGray mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Skills Progress
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {skillsData.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-portfolio-darkGray">{skill.name}</span>
                  <motion.span 
                    className="text-portfolio-green"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-portfolio-green to-portfolio-lightGreen rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1.2, delay: 1.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSkillsSection;