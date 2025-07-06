import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        
        heroRef.current.style.background = `
          radial-gradient(circle at ${xPercent}% ${yPercent}%, 
          rgba(59, 130, 246, 0.3) 0%, 
          rgba(147, 51, 234, 0.2) 25%, 
          rgba(17, 24, 39, 0.8) 50%)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] transform perspective-1000 rotate-x-15"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Jonnalagadda Dinesh
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            AI Enthusiast & Generative AI Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-400">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
              <MapPin size={16} />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
              <Phone size={16} />
              <span>814-312-2034</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
              <Mail size={16} />
              <span>dineshjnld22@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Dineshjnld"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://linkedin.com/in/-dinesh-7a83b2241/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;