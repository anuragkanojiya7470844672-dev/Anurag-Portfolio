import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const demoProjects = [
  { 
    title: 'MoviesForDevs', 
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  { 
    title: 'StockIn', 
    status: 'On Development',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  { 
    title: 'Svgl.app', 
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  { 
    title: 'Rifas Velez Web', 
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1507238691854-564bafe89f3b?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-[#0b0f19] text-white">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">My work</p>
        <h2 className="text-4xl lg:text-5xl font-bold">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {demoProjects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-64">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50"></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Title and Action Buttons */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold leading-tight flex-1">{proj.title}</h3>
                <div className="flex space-x-3 ml-4">
                  <a 
                    href={proj.github} 
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors hover:text-white"
                    title="View Code"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={proj.demo} 
                    className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors hover:text-white"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Status */}
              <p className="text-sm text-gray-400">
                {proj.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;