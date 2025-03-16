
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "Microsoft Excel Expert",
      issuer: "Microsoft",
      date: "June 2022",
      description: "Advanced Excel skills including complex formulas, data analysis, and automation.",
      link: "#"
    },
    {
      id: 2,
      name: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "September 2022",
      description: "Fundamental knowledge of machine learning and AI in the cloud, and Azure AI services.",
      link: "#"
    },
    {
      id: 3,
      name: "Azure AI Engineer",
      issuer: "Microsoft",
      date: "January 2023",
      description: "Design and implement Microsoft AI solutions including natural language processing, speech, vision, and knowledge mining.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div 
              key={certification.id}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <Award size={36} className="text-portfolio-green" />
                <span className="text-sm text-portfolio-gray">{certification.date}</span>
              </div>
              <h3 className="text-xl font-bold text-portfolio-darkGray mb-2">{certification.name}</h3>
              <p className="text-sm text-portfolio-gray mb-2">Issued by {certification.issuer}</p>
              <p className="text-portfolio-gray mb-4">{certification.description}</p>
              <a 
                href={certification.link} 
                className="text-portfolio-green flex items-center gap-1 hover:underline"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-portfolio-darkGray mb-6 text-center">Additional Achievements</h3>
            
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h4 className="text-lg font-bold text-portfolio-darkGray mb-2">Technical Blog Posts</h4>
                <p className="text-portfolio-gray mb-3">
                  I've written several technical articles on LinkedIn about modern web development topics:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-portfolio-green rounded-full mt-2"></div>
                    <span className="text-portfolio-gray">
                      <strong>Supabase vs Firebase:</strong> A comparison of backend-as-a-service options
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-portfolio-green rounded-full mt-2"></div>
                    <span className="text-portfolio-gray">
                      <strong>Redis Caching Strategies:</strong> Improving API performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-portfolio-green rounded-full mt-2"></div>
                    <span className="text-portfolio-gray">
                      <strong>JWT Authentication:</strong> Best practices for secure web applications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-portfolio-green rounded-full mt-2"></div>
                    <span className="text-portfolio-gray">
                      <strong>Building RESTful APIs:</strong> Design principles and implementation tips
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
