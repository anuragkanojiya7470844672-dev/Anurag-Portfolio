import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className="relative">
      <Header />
      <main className="pt-16">
           <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
     
    </div>
  );
}

export default App;
