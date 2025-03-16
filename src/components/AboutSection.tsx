
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-portfolio-darkGray mb-4">
              A passionate Web Developer with a focus on creating impactful digital experiences
            </h3>
            <p className="text-portfolio-gray mb-6">
              I am a dedicated web developer with 1 year of professional experience, specializing in modern web technologies and frameworks. My journey in web development began with a curiosity about how digital experiences are created, and it has evolved into a passion for building efficient, user-friendly, and scalable web applications.
            </p>
            <p className="text-portfolio-gray mb-8">
              I graduated with a degree in Computer Science from [Your College Name] in [Graduation Year]. Since then, I've been continuously expanding my skills through real-world projects, online courses, and community involvement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-portfolio-green shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-portfolio-darkGray">Education</h4>
                  <p className="text-portfolio-gray">Computer Science Graduate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="text-portfolio-green shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-portfolio-darkGray">Experience</h4>
                  <p className="text-portfolio-gray">1+ Year in Web Development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-portfolio-green shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-portfolio-darkGray">Certifications</h4>
                  <p className="text-portfolio-gray">Excel, AI-900, Azure AI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-portfolio-green shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-portfolio-darkGray">Passion</h4>
                  <p className="text-portfolio-gray">Building meaningful applications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-portfolio-darkGray mb-6">Why I Love Coding</h3>
              <p className="text-portfolio-gray mb-6">
                My passion for coding stems from the endless possibilities it offers to solve real-world problems. I enjoy the creative process of transforming ideas into functional applications and the continuous learning journey that comes with it.
              </p>
              <p className="text-portfolio-gray mb-6">
                What excites me most about web development is the intersection of creativity and logic. Every project presents unique challenges that push me to think critically and innovatively. The satisfaction of crafting clean, efficient code that powers seamless user experiences is what drives me every day.
              </p>
              <h3 className="text-2xl font-bold text-portfolio-darkGray mb-4 mt-8">Future Goals</h3>
              <p className="text-portfolio-gray">
                Looking ahead, I aim to deepen my expertise in full-stack development while exploring emerging technologies like AI integration in web applications. I'm committed to creating accessible, performance-optimized applications that make a positive impact on users' lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
