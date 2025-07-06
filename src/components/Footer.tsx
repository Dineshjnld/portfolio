import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-4">
            Made with <Heart className="w-4 h-4 text-red-400" /> and <Code className="w-4 h-4 text-blue-400" /> by Dinesh Jonnalagadda
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Dinesh Jonnalagadda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;