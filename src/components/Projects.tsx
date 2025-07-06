import React from 'react';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CCTNS — AI-Powered Voice-Based Natural Language Querying",
      description: "Developed an intelligent, voice-enabled system for Andhra Pradesh Police to query the Crime & Criminal Tracking Network and Systems (CCTNS) database using natural language voice commands.",
      period: "Jan 2024 – June 2024",
      technologies: ["Python", "SQL", "Oracle DB", "Hugging Face Transformers", "FastAPI", "Generative AI"],
      highlights: [
        "Integrated multi-language Speech-to-Text with ai4bharat/indicconformer and openai/whisper-medium",
        "Processed queries with google/flan-t5-base and microsoft/CodeT5-base for SQL generation",
        "Automated report generation with google/pegasus-cnn_dailymail for clear summaries",
        "Enabled police personnel to retrieve crime data without writing SQL"
      ],
      isHighlighted: true
    },
    {
      title: "Robust Copy-Move Forgery Detection using Deep Learning",
      description: "Designed a CNN-based system to detect copy-move forgery in images with localization capabilities to accurately highlight manipulated regions.",
      period: "Oct 2023 – Present",
      technologies: ["Python", "CNN", "Deep Learning", "Computer Vision", "TensorFlow"],
      highlights: [
        "Developed CNN architecture for fraud detection in identity documents",
        "Implemented localization algorithms to highlight manipulated regions",
        "Published research in international conference proceedings",
        "Currently enhancing accuracy with advanced deep learning techniques"
      ],
      isHighlighted: false
    },
    {
      title: "Truinfo — ATS Integrated Career Portal",
      description: "Built an AI-powered career portal with ATS integration and resume analysis featuring secure authentication and personalized job matching.",
      period: "June 2024",
      technologies: ["Streamlit", "Python", "Gemini-Pro", "MongoDB", "AI/ML"],
      highlights: [
        "Integrated ATS system for automated resume screening",
        "Implemented AI-powered job matching algorithms",
        "Built secure user authentication and profile management",
        "Created dynamic job listings with personalized recommendations"
      ],
      isHighlighted: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${project.isHighlighted ? 'lg:col-span-2' : ''}`}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 h-full">
                {project.isHighlighted && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Award size={12} />
                    Featured
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{project.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-400 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <button className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Details
                  </button>
                  <button className="group/btn flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-full text-sm font-medium hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
                    <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;