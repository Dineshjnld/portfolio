import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant",
      location: "Hyderabad",
      period: "Dec 2024 – Present",
      description: [
        "Gained practical experience in Python, Generative AI, Agentic AI, SQL, AWS",
        "Contributed to two projects involving data pipelining and migration workflows",
        "Worked closely with cross-functional teams to deliver automation solutions"
      ],
      skills: ["Python", "Generative AI", "Agentic AI", "SQL", "AWS", "Data Pipeline"]
    },
    {
      title: "Software Engineer Intern",
      company: "Decenter AI",
      location: "Remote",
      period: "Sep 2023 – June 2024",
      description: [
        "Developed a demo application using Python and Streamlit; reduced system training time using Sub-process and Queue approaches",
        "Resolved 10+ issues and tasks, contributing to the Decentralized and Democratized AI Model Training Infrastructure"
      ],
      skills: ["Python", "Streamlit", "Sub-process", "Queue", "AI Model Training", "Decentralized Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-64 w-128 h-128 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-128 h-128 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full border-4 border-gray-800 z-10"></div>
              
              {/* Experience Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 rounded-full text-xs font-medium border border-teal-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;