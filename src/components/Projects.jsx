import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiArrowLeft } from 'react-icons/fi';
import ScrollVelocity from './ReactBits/ScrollVelocity';
import FlexCarousel from './ReactBits/FlexCarousel';
import DecryptedText from './ReactBits/DecryptedText';

const photo = id => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=max`;
const projectImages = [
  photo('photo-1737071371043-761e02b1ef95'),
  photo('photo-1693645325828-62cd35c8da8f'),
  photo('photo-1739056238917-d89cd05c48d5'),
  photo('photo-1747191092806-c7da11881986'),
  photo('photo-1605034313761-73ea4a0cfbf3'),
  photo('photo-1495462911434-be47104d70fa'),
];

const projects = [
  { id: 1, title: 'AI Chatbot Interface', category: 'Web App', tech: ['React', 'Tailwind', 'OpenAI'], desc: 'A sleek, modern interface for conversing with LLMs.' },
  { id: 2, title: 'E-Commerce Dashboard', category: 'Web Design', tech: ['Next.js', 'Framer Motion'], desc: 'A complex data-driven dashboard for store owners.' },
  { id: 3, title: 'Portfolio Template', category: 'Web Design', tech: ['HTML', 'CSS', 'JS'], desc: 'A highly customizable portfolio template.' },
  { id: 4, title: 'Machine Learning Visualizer', category: 'Data Vis', tech: ['Python', 'D3.js'], desc: 'Interactive tool to visualize neural network layers.' },
  { id: 5, title: 'Task Management System', category: 'Web App', tech: ['React', 'Firebase'], desc: 'Collaborative task tracker with real-time updates.' },
  { id: 6, title: 'Weather Application', category: 'Mobile First', tech: ['React Native', 'API'], desc: 'Real-time weather data with dynamic backgrounds.' },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-32 w-full relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <ScrollVelocity
            texts={['Latest Projects - Latest Projects -']}
            velocity={100}
            className="tracking-tighter"
          />
        </div>

        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="w-[100vw] h-[600px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            >
              <FlexCarousel
                items={[
                  ...projects.map((p, i) => ({
                    src: projectImages[i % projectImages.length],
                    title: p.title,
                    subtitle: p.category
                  })),
                  {
                    src: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200&q=80&auto=format&fit=max',
                    title: 'Contact Me',
                    subtitle: 'Click to connect!'
                  }
                ]}
                preset="liquid"
                intro="rise"
                cardHeight={0.6}
                gap={24}
                squeeze={0.2}
                focusOnClick
                captions
                onSelect={(index) => {
                  if (index === projects.length) {
                    const contactEl = document.getElementById('contact');
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    setSelectedProject(projects[index]);
                  }
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              id="project-details"
              key="details"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="mb-8 flex items-center gap-3 text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
              >
                <FiArrowLeft size={18} /> Back to Projects
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Image */}
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl">
                  <img 
                    src={projectImages[projects.findIndex(p => p.id === selectedProject.id) % projectImages.length]} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Right Side: Details */}
                <div className="flex flex-col justify-center h-full">
                  <div className="mb-6">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3 block">
                      <DecryptedText text={selectedProject.category} animateOn="view" />
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                      <DecryptedText text={selectedProject.title} animateOn="view" maxIterations={12} />
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      <DecryptedText text={selectedProject.desc} animateOn="view" speed={40} sequential={true} />
                    </p>
                  </div>

                  <div className="flex flex-col gap-8 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t, i) => (
                        <span key={t} className="px-5 py-2 glass-panel rounded-full text-sm font-bold text-slate-300">
                          <DecryptedText text={t} animateOn="view" speed={70} />
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <a href="#" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5 group-hover:border-white/20">
                          <FiGithub size={20} />
                        </div>
                        <span className="font-bold text-slate-400 group-hover:text-white transition-colors text-sm uppercase tracking-wider">
                          <DecryptedText text="GitHub" animateOn="view" />
                        </span>
                      </a>
                      <a href="#" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-blue-500/20 transition-all border border-white/5 group-hover:border-blue-500/50">
                          <FiExternalLink size={20} />
                        </div>
                        <span className="font-bold text-slate-400 group-hover:text-white transition-colors text-sm uppercase tracking-wider">
                          <DecryptedText text="Live Demo" animateOn="view" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
