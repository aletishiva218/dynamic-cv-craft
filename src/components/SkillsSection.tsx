
import { 
  Code, Server, Database, GitBranch, 
  Monitor, Terminal, Docker, Globe 
} from 'lucide-react';

const SkillsSection = () => {
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Here are the technologies and tools I'm proficient with, categorized by area of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-portfolio-darkGray">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="h-3 w-3 rounded-full bg-portfolio-green"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-portfolio-darkGray mb-6 text-center">Skills Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { name: "React.js", percentage: 90 },
              { name: "Node.js", percentage: 85 },
              { name: "JavaScript", percentage: 95 },
              { name: "MongoDB", percentage: 80 },
              { name: "HTML/CSS", percentage: 95 },
              { name: "Express.js", percentage: 85 },
              { name: "Tailwind CSS", percentage: 90 },
              { name: "TypeScript", percentage: 70 }
            ].map((skill) => (
              <div key={skill.name} className="animate-fade-in">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-portfolio-darkGray">{skill.name}</span>
                  <span className="text-portfolio-green">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-portfolio-green transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
