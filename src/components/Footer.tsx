
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-darkGray">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="bg-portfolio-green text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
