import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-portfolio-blue text-white p-4 rounded-full shadow-lg z-50 hover:bg-portfolio-lightBlue transition-colors duration-300"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotate: [0, 360]
          }}
          exit={{ 
            opacity: 0, 
            scale: 0, 
            y: 100 
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          data-hover
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;