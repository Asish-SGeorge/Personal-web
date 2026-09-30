import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import PixelTransition from './ReactBits/PixelTransition';
import StaggeredText from './ReactBits/StaggeredText';
import TechText from './ReactBits/TechText';
import TextType from './ReactBits/TextType';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 w-full">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="text-[#888] font-bold tracking-widest uppercase mb-6 text-sm flex gap-1">
            <StaggeredText text="HELLO, I AM" animateBy="character" staggerDelay={0.05} />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full h-auto min-h-[160px] md:min-h-[220px] mb-4 -ml-2">
            <TechText
              text="Asish S George"
              fontWeight={900}
              fontSize={140}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
            />
          </motion.div>
          <div className="text-xl md:text-2xl font-semibold text-[#888] mb-8 flex items-center gap-2">
            A passionate <TextType text={["AIML Engineer", "Frontend Developer", "Web Designer"]} typingSpeed={75} pauseDuration={1500} showCursor={true} className="text-white" />
          </div>
          <motion.p variants={itemVariants} className="text-[#aaa] text-lg max-w-md mb-10 leading-relaxed font-medium">
            AIML engineering student & web design enthusiast exploring the intersection of AI and premium digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <a href="https://github.com/Asish-SGeorge" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-full text-[#888] hover:text-white transition-all hover:scale-110">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/asish-s-george-06b43932b/" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-full text-[#888] hover:text-white transition-all hover:scale-110">
              <FiLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/asishsgeorge/" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-full text-[#888] hover:text-white transition-all hover:scale-110">
              <FiInstagram size={24} />
            </a>
          </motion.div>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black text-lg hover:bg-white/90 transition-all"
          >
            Download CV
            <FiDownload />
          </motion.a>
        </motion.div>

        {/* Visual / Image (PixelTransition) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative hidden lg:flex justify-center items-center w-full"
        >
          <PixelTransition
            firstContent={
              <div className="w-full h-full glass-panel flex items-center justify-center rounded-3xl relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <img src={profileImg} className="w-full h-full object-cover opacity-90" alt="Asish S George" />
              </div>
            }
            secondContent={
              <div className="w-full h-full flex flex-col items-center justify-center bg-white text-black text-center p-6 rounded-3xl">
                <p className="font-black text-5xl mb-2 tracking-tight">Hai there! 👋</p>
                <p className="text-[#555] font-semibold text-lg mt-2">Nice to meet you!</p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="w-full max-w-[450px] aspect-square"
          />
        </motion.div>

      </div>
    </section>
  );
}
