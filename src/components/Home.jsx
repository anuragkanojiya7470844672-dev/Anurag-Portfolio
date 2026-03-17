import React, { useState } from 'react';
import LogoLoop from './Loop';
import LetterGlitch from './Letterglitch';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaChevronDown
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const techLogos = [
    { node: <FaReact className="w-12 h-12 text-blue-400 animate-pulse" />, name: 'React' },
    { node: <SiTailwindcss className="w-12 h-12 text-teal-400 animate-pulse" />, name: 'TailwindCSS' },
    { node: <SiNextdotjs className="w-12 h-12 text-gray-300 animate-pulse" />, name: 'Next.js' },
    { node: <FaNode className="w-12 h-12 text-green-500 animate-pulse" />, name: 'Node.js' },
    { node: <FaHtml5 className="w-12 h-12 text-orange-500 animate-pulse" />, name: 'HTML5' },
    { node: <FaCss3Alt className="w-12 h-12 text-blue-600 animate-pulse" />, name: 'CSS3' },
    { node: <SiJavascript className="w-12 h-12 text-yellow-400 animate-pulse" />, name: 'JavaScript' }
  ];

  const services = [
    {
      icon: <FaCode className="text-purple-400 w-6 h-6" />,
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and web applications using modern technologies.'
    },
    {
      icon: <FaMobileAlt className="text-purple-400 w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with smooth performance and modern UI.'
    },
    {
      icon: <FaPalette className="text-purple-400 w-6 h-6" />,
      title: 'UI/UX Design & Prototyping',
      description: 'Designing user-friendly interfaces and interactive prototypes focused on usability and aesthetics.'
    }
  ];

  return (
    <>
      <section className="min-h-screen bg-[#0b1220] text-white flex flex-col justify-center px-4 mt-[-200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-2">Hi, I'm Anurag Kanojiya</p>
           <h1 className="text-5xl lg:text-7xl font-bold mb-6">Mearn Stack Developer</h1>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="mailto:" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed">
              Transforming ideas into interactive and seamless digital experiences with cutting-edge{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                frontend
              </span>{' '}
              development.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 w-full flex justify-center">
          <LogoLoop logos={techLogos} speed={50} />
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-[#0b0f19] text-white mt-[-300px] ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">What I Do?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Accordions */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border border-purple-500/20 rounded-lg bg-gray-800/50 backdrop-blur hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/50 transition-colors rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <FaChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Letter Glitch */}
            <div className="flex justify-center">
              <LetterGlitch
                glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                glitchSpeed={50}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
