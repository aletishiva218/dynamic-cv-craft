import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

const AnimatedProjectCard = ({ project, index }: AnimatedProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Image */}
      <motion.div
        className="h-48 bg-gradient-to-br from-portfolio-green to-portfolio-lightGreen relative overflow-hidden"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover
            >
              <Github size={20} />
            </motion.a>
          )}
          <motion.button
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-hover
          >
            <Eye size={20} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="p-6"
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-xl font-bold text-portfolio-darkGray mb-2"
          animate={{
            color: isHovered ? '#38b000' : '#343a40',
          }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-portfolio-gray mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="bg-gray-100 text-portfolio-darkGray px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              whileHover={{ scale: 1.1, backgroundColor: '#38b000', color: 'white' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Glassmorphism Border */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(56, 176, 0, 0.3)' : 'transparent',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(56, 176, 0, 0.1)' 
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default AnimatedProjectCard;