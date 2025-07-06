import React from 'react';
import { Brain, Code, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Specialized in NLP, Generative AI, and deep learning applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in Python, React, and modern web technologies"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Research",
      description: "Published researcher with multiple hackathon wins and patents"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Collaboration",
      description: "Experienced in leading teams and cross-functional collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                AI enthusiast with a strong Python background and hands-on experience in building 
                end-to-end AI and Generative AI applications. Currently working as a Programmer 
                Analyst Trainee at Cognizant, where I contribute to automation-driven projects 
                using modern AI technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in solving real-world problems through innovative AI solutions, 
                from natural language processing to computer vision applications. I've successfully 
                developed voice-enabled systems for law enforcement and contributed to decentralized 
                AI training infrastructures.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-gray-300">
                <span className="font-medium">Bachelor of Technology</span> in Computer Science and Engineering
              </p>
              <p className="text-gray-400">
                Prasad V Potluri Siddhartha Institute of Technology (PVPSIT)
              </p>
              <p className="text-gray-500 text-sm">Sep 2020 – April 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-2"
              >
                <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;