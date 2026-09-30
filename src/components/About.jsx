import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TextLoop from './ReactBits/TextLoop';
import TextType from './ReactBits/TextType';
import FoldText from './ReactBits/FoldText';

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16 -mt-10">
          <TextLoop
            text="ABOUT ✦ ME"
            shape="wave"
            speed={90}
            direction="forward"
            separator="✦"
            curviness={60}
            fontSize={64}
            fontWeight={900}
            letterSpacing={2}
            uppercase
            color="#ffffff"
            ribbon
            ribbonColor="#1e3a8a"
            ribbonWidth={120}
            pauseOnHover
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Decorative image / abstract shape */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-white/10 rotate-3 transition-transform hover:rotate-0 duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/20 -rotate-3 transition-transform hover:rotate-0 duration-500 flex items-center justify-center p-8">
              <p className="text-2xl font-black text-white/50 text-center leading-relaxed">
                Code &<br/>AI Models
              </p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
              <FoldText
                text="ABOUT ME"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.05}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize="inherit"
                fontWeight="inherit"
                color="#ffffff"
              />
            </h3>
            {isInView && (
              <>
                <TextType 
                  as="p"
                  text="I'm Asish S George, currently pursuing a B.Tech in AI and ML at ACE College of Engineering. While I'm developing my skills as a frontend developer, I'm also diving deep into the world of AI and machine learning."
                  typingSpeed={20}
                  loop={false}
                  showCursor={false}
                  className="text-slate-400 text-lg leading-relaxed mb-6 block min-h-[84px]"
                />
                <TextType 
                  as="p"
                  text="I'm constantly learning and experimenting with new innovations in these fields. My passion is to apply what I learn to create real-world solutions and grow into a versatile engineer, combining both web and AI/ML expertise."
                  typingSpeed={20}
                  initialDelay={3500}
                  loop={false}
                  showCursor={true}
                  className="text-slate-400 text-lg leading-relaxed mb-8 block min-h-[84px]"
                />
              </>
            )}
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-blue-600/10 text-blue-400 font-semibold border border-blue-600/50 hover:bg-blue-600 hover:text-white transition-all"
            >
              Read More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
