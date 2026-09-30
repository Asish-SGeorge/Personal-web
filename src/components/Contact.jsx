import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import TrueFocus from './ReactBits/TrueFocus';
import FoldText from './ReactBits/FoldText';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    const myForm = e.target;
    const formData = new FormData(myForm);
    
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => setSubmitStatus('success'))
    .catch((error) => setSubmitStatus('error'));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center justify-center"
        >
          <div className="mb-8 relative z-10 w-full flex justify-center scale-75 md:scale-100">
            <TrueFocus 
              sentence="Contact Me!"
              manualMode={false}
              blurAmount={4}
              borderColor="#3b82f6"
              glowColor="rgba(59, 130, 246, 0.5)"
              animationDuration={0.5}
              pauseBetweenAnimations={0.5}
            />
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mt-12">
          
          {/* Left Side: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Simple geometric decoration */}
            <div className="absolute top-4 right-12 md:right-32 w-12 h-12 bg-white rounded-full" />
            <div className="absolute top-16 right-4 md:right-20 w-24 h-24 border border-white/30 rounded-b-full rounded-t-none" />

            <h2 className="text-[5rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] font-serif text-white tracking-tight">
              <FoldText
                text={"LET'S\nGET IN\nTOUCH"}
                splitBy="line"
                hinge="top"
                trigger="scroll"
                duration={0.8}
                stagger={0.15}
                ease="power3.out"
                perspective={800}
                creaseShading={0.4}
                color="#ffffff"
                fontSize="inherit"
                fontWeight="inherit"
              />
            </h2>
          </motion.div>

          {/* Right Side: Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pl-12 flex flex-col justify-between h-full"
          >
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-12">
              <input type="hidden" name="form-name" value="contact" />
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Full Name</label>
                  <span className="text-slate-500 text-[10px]">*</span>
                </div>
                <input type="text" name="name" required className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors text-lg" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Email</label>
                    <span className="text-slate-500 text-[10px]">*</span>
                  </div>
                  <input type="email" name="email" required className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors text-lg" />
                </div>
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Phone</label>
                    <span className="text-slate-500 text-[10px]">*</span>
                  </div>
                  <input type="tel" name="phone" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors text-lg" />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Message</label>
                  <span className="text-slate-500 text-[10px]">*</span>
                </div>
                <input type="text" name="message" required className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors text-lg" />
              </div>
              
              <div className="flex justify-end pt-4 items-center gap-4">
                {submitStatus === 'success' && <span className="text-green-400 text-sm tracking-widest uppercase">Message Sent!</span>}
                {submitStatus === 'error' && <span className="text-red-400 text-sm tracking-widest uppercase">Error sending message</span>}
                <button type="submit" disabled={submitStatus === 'submitting'} className="text-white hover:text-slate-300 transition-colors group disabled:opacity-50">
                  <FiArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </form>

            <div className="flex justify-end text-right text-[10px] tracking-[0.15em] text-slate-400 uppercase mt-24">
              <div className="flex flex-col items-end">
                <h4 className="text-white font-bold mb-4 tracking-[0.2em]">INDIA</h4>
                <p className="leading-loose">
                  KERALA<br/>
                  ASISHSUNNYGEORGE9912<br/>
                  @GMAIL.COM
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-slate-500 text-sm">
          Copyright © {new Date().getFullYear()} by ASG | All Rights Reserved
        </p>
      </div>
    </section>
  );
}
