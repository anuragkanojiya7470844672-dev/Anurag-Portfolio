import React from 'react';

const Header = () => {
  const links = ['Home', 'Projects', 'Contact'];
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-75 backdrop-blur z-50">
      <ul className="flex justify-center space-x-8 py-4">
        {links.map(link => (
          <li key={link} className="flex items-center space-x-2">
            {link === 'Home' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            <a
              href={`#${link.toLowerCase()}`}
              className="text-lg font-medium hover:text-indigo-400 focus:outline-none"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
