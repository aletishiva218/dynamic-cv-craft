
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show toast notification
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-md h-full">
              <h3 className="text-2xl font-bold text-portfolio-darkGray mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="contact-icon">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-portfolio-darkGray">Email</h4>
                    <a href="mailto:youremail@example.com" className="text-portfolio-gray hover:text-portfolio-green transition-colors duration-300">
                      youremail@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="contact-icon">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-portfolio-darkGray">Phone</h4>
                    <a href="tel:+1234567890" className="text-portfolio-gray hover:text-portfolio-green transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-portfolio-darkGray mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white p-3 rounded-full shadow-md hover:bg-portfolio-green hover:text-white transition-all duration-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-md hover:bg-portfolio-green hover:text-white transition-all duration-300">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-md hover:bg-portfolio-green hover:text-white transition-all duration-300">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-md animate-fade-in">
              <h3 className="text-2xl font-bold text-portfolio-darkGray mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-darkGray mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-portfolio-green outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-darkGray mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-portfolio-green outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-darkGray mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-portfolio-green outline-none transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-darkGray mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-green focus:border-portfolio-green outline-none transition-all duration-300"
                    placeholder="Hello, I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
