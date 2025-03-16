
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in-up">
            <p className="text-portfolio-green font-medium mb-3">Hello, I'm a</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkGray mb-4">
              Web Developer
            </h1>
            <div className="h-1 w-20 bg-portfolio-green mb-6"></div>
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-gray mb-6">
              Web Developer | MERN Stack Enthusiast | Passionate About Scalable & Secure Web Applications
            </h2>
            <p className="text-portfolio-gray mb-8 max-w-lg">
              I craft responsive websites and web applications that provide users with exceptional experiences. Specializing in MERN stack development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </a>
              <a href="#" className="btn-outline flex items-center gap-2">
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fade-in">
            {/* Professional photo placeholder - replace with your actual image */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-portfolio-green to-portfolio-lightGreen flex items-center justify-center">
                <div className="w-60 h-60 md:w-76 md:h-76 bg-portfolio-offWhite rounded-full overflow-hidden">
                  {/* Replace with your image */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-portfolio-gray">
                    Your Profile Image
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <span className="block text-portfolio-green font-bold">1+ Years</span>
                <span className="text-sm text-portfolio-gray">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
