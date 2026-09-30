import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#ededed] selection:bg-white/20 relative">
      <div className="noise-bg"></div>
      <Navbar />
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
