
import { ArrowRight, Download, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const titles = ['Web Developer', 'Software Engineer', 'Full Stack Developer', 'UI/UX Enthusiast'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentTitle.length) {
        setTypedText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentTitleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 100, y: 50 },
    { Icon: Terminal, delay: 1, x: -50, y: 100 },
  ];

  return (
    <section id="home" className="pt-28 pb-20 md:min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.p
              className="text-portfolio-green font-medium mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hello, I'm a
            </motion.p>
            
            <div className="h-20 mb-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkGray"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {typedText}
                <motion.span
                  className="text-portfolio-green"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.h1>
            </div>

            <motion.div
              className="h-1 bg-gradient-to-r from-portfolio-green to-portfolio-lightGreen mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1.2, duration: 1 }}
            />

            <motion.h2
              className="text-xl md:text-2xl font-medium text-portfolio-gray mb-6"
              variants={itemVariants}
            >
              Web Developer | MERN Stack Enthusiast | Passionate About Scalable & Secure Web Applications
            </motion.h2>

            <motion.p
              className="text-portfolio-gray mb-8 max-w-lg"
              variants={itemVariants}
            >
              I craft responsive websites and web applications that provide users with exceptional experiences. Specializing in MERN stack development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover
              >
                View My Work
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover
              >
                Download CV
                <Download size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center relative"
            variants={itemVariants}
          >
            {/* Floating icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                className="absolute text-portfolio-green opacity-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                  x: [0, x, 0],
                  y: [0, y, 0],
                }}
                transition={{
                  delay,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={48} />
              </motion.div>
            ))}

            {/* Profile section */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-portfolio-green to-portfolio-lightGreen"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-4 bg-portfolio-offWhite rounded-full flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-portfolio-gray">
                    Your Profile Image
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="block text-portfolio-green font-bold">1+ Years</span>
                <span className="text-sm text-portfolio-gray">Experience</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
