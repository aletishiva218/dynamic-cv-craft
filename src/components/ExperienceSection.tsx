
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA (Remote)",
      description: "Working as a full-stack web developer focusing on MERN stack applications. Responsible for developing and maintaining client websites and web applications.",
      responsibilities: [
        "Developed responsive and accessible web interfaces using React.js and Tailwind CSS",
        "Built RESTful APIs with Node.js and Express.js for various client projects",
        "Implemented database schemas and queries using MongoDB and PostgreSQL",
        "Collaborated with design and QA teams to ensure high-quality deliverables",
        "Participated in code reviews and implemented best practices for maintainable code"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            My professional journey in web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white rounded-xl p-8 shadow-md border-l-4 border-portfolio-green animate-fade-in-up"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-portfolio-darkGray">{experience.role}</h3>
                  <h4 className="text-xl text-portfolio-green">{experience.company}</h4>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-portfolio-gray">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-portfolio-gray mt-1">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-portfolio-gray mb-6">
                {experience.description}
              </p>

              <div className="mb-6">
                <h5 className="font-bold text-portfolio-darkGray mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-portfolio-green rounded-full mt-2"></div>
                      <span className="text-portfolio-gray">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-portfolio-darkGray mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-portfolio-darkGray px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
