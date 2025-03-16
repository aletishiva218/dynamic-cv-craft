
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product browsing, cart functionality, and secure checkout.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      demoLink: "#",
      githubLink: "#",
      challenges: "Implementing secure payment processing and optimizing product search functionality."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg",
      tech: ["React", "Firebase", "Tailwind CSS", "Context API"],
      demoLink: "#",
      githubLink: "#",
      challenges: "Building a responsive drag-and-drop interface and implementing real-time updates."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard showing forecasts, historical data, and location-based weather alerts.",
      image: "/placeholder.svg",
      tech: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
      demoLink: "#",
      githubLink: "#",
      challenges: "Working with multiple external APIs and displaying complex weather data in an intuitive way."
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "A financial management application for tracking expenses, income, and setting budget goals.",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "PostgreSQL", "Express", "Recharts"],
      demoLink: "#",
      githubLink: "#",
      challenges: "Ensuring data security while providing insightful financial visualizations and analytics."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end gap-3">
                      <a 
                        href={project.demoLink} 
                        className="bg-white p-2 rounded-full hover:bg-portfolio-green hover:text-white transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="bg-white p-2 rounded-full hover:bg-portfolio-green hover:text-white transition-colors duration-300"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-darkGray mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-portfolio-darkGray mb-2 flex items-center gap-2">
                    <Code size={16} className="text-portfolio-green" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-100 text-portfolio-darkGray px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-portfolio-darkGray mb-2">Challenges & Learnings</h4>
                  <p className="text-sm text-portfolio-gray">{project.challenges}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-outline inline-flex items-center gap-2">
            See More Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
