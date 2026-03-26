/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  LayoutGrid, 
  Video, 
  Zap, 
  PenTool, 
  MousePointer2, 
  Play, 
  Pause, 
  Target, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Linkedin,
  Monitor,
  Palette,
  Layers,
  Smartphone,
  Edit3,
  User,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Plasma Wave Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[600px] md:h-[800px] plasma-wave -z-10 rounded-full opacity-20 md:opacity-30" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-neon-cyan/30 text-neon-cyan text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
          >
            <Sparkles className="w-3 h-3" />
            PHARMACY × COMPUTER SCIENCE
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-6 md:mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              NETSANET
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="luxury-gradient block italic font-normal"
            >
              DESTA.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/50 text-lg md:text-xl lg:text-2xl max-w-lg mx-auto lg:mx-0 font-light mb-10 md:mb-12 leading-relaxed font-sans"
          >
            Bridging the gap between pharmaceutical precision and digital innovation. Full-Stack Developer & Visual Designer.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-xs tracking-[0.2em] hover:bg-neon-cyan transition-all shadow-[0_20px_40px_rgba(0,242,255,0.2)] flex items-center justify-center gap-3"
            >
              START PROJECT <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-full glass border border-white/10 font-bold text-xs tracking-[0.2em] hover:border-white/30 transition-all"
            >
              EXPLORE WORK
            </motion.button>
          </div>
        </motion.div>

        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Main Portrait */}
          <motion.div 
            style={{ y: y1, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[260px] sm:w-[320px] md:w-[400px] aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden glass border-2 border-white/10 neon-glow-cyan group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/90 z-10" />
            <motion.img 
              src="/Netsanet/image.png" 
              alt="Netsanet Desta" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              style={{ filter: `blur(${blur}px)` }}
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center border border-neon-cyan/50 group-hover:bg-neon-cyan/20 transition-colors">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-neon-cyan fill-neon-cyan" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Showreel</p>
                  <p className="text-xs md:text-sm font-display italic">2026 Edition</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Motion Image */}
          <motion.div 
            style={{ y: y2, x: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-4 md:-right-12 top-1/4 z-0 w-[180px] md:w-[240px] aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden glass border border-white/10 shadow-2xl rotate-12 group hidden sm:block"
          >
            <div className="absolute inset-0 bg-neon-magenta/10 mix-blend-overlay z-10" />
            <img 
              src="/Netsanet/image 2.png" 
              alt="Creative Vision" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 blur-[2px] group-hover:blur-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg/60 to-transparent" />
          </motion.div>

          {/* Luxury Accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 border border-white/5 rounded-full -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-60 md:h-60 border border-white/5 rounded-full -z-10 animate-pulse delay-700" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all"
      >
        {['FULL-STACK', 'PHARMACY', 'MOTION', 'BRANDING', 'UI/UX'].map((label, i) => (
          <span key={i} className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em]">{label}</span>
        ))}
      </motion.div>
    </section>
  );
};

const FloatingButton = () => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full glass flex items-center justify-center border border-white/20 shadow-2xl hover:border-neon-cyan transition-all group"
  >
    <ChevronRight className="w-6 h-6 -rotate-90 group-hover:text-neon-cyan transition-colors" />
  </motion.button>
);

const CreativePartner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:20 gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 leading-tight">
            PHARMACEUTICAL PRECISION <br />
            <span className="luxury-gradient italic font-normal">MEETS DIGITAL INNOVATION.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
            A versatile creator with a unique background in Pharmacy and Computer Science. Expert in building functional web applications while maintaining high standards for UI/UX and motion graphics.
          </p>
        </div>
        <div className="flex items-center gap-4 pb-4">
          <div className="w-12 h-px bg-white/20" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Class of 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Feature Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Identity */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col h-full group border-white/5 hover:border-neon-cyan/30 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl md:text-2xl font-display font-bold">Netsanet Chat App</h3>
              <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan" />
              </div>
            </div>
            <div className="flex-grow mb-8 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black/40 border border-white/5 relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" 
                alt="Chat App" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
            </div>
            <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Black/Orange/Thunder Aesthetic</p>
          </motion.div>

          {/* Card 2: Vision */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col h-full group border-white/5 hover:border-neon-magenta/30 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl md:text-2xl font-display font-bold">Pharmacy System</h3>
              <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center group-hover:bg-neon-magenta/20 transition-colors">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-neon-magenta" />
              </div>
            </div>
            <div className="relative flex-grow mb-8 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black/40 border border-white/5 group aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" 
                alt="Pharmacy System" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group-hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-6 h-6 md:w-8 md:h-8" /> : <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Clinical Calculators & Tools</p>
          </motion.div>
        </div>

        {/* Right Column: Profile Section */}
        <div className="lg:col-span-1">
          <div className="glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 sticky top-24 border-white/5 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-10 md:mb-12">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-8 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-magenta animate-pulse blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-full h-full rounded-full border-2 border-white/10 p-2 glass overflow-hidden">
                  <img 
                    src="/Netsanet/image.png" 
                    alt="Netsanet Desta" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white text-black p-2 md:p-3 rounded-full shadow-2xl">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 md:mb-3">Netsanet Desta</h3>
              <p className="text-neon-cyan text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 md:mb-10">Full-Stack & Pharmacy</p>
              
              <div className="w-full space-y-3 md:space-y-4">
                <motion.a 
                  href="mailto:netsanet3613@gmail.com"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 md:py-5 rounded-2xl bg-white text-black font-bold text-[10px] md:text-xs tracking-[0.2em] hover:bg-neon-cyan transition-all flex items-center justify-center gap-3"
                >
                  <Edit3 className="w-4 h-4" />
                  GET IN TOUCH
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 md:py-5 rounded-2xl glass border border-white/10 font-bold text-[10px] md:text-xs tracking-[0.2em] hover:border-white/30 transition-all flex items-center justify-center gap-3"
                >
                  DOWNLOAD CV
                </motion.button>
              </div>
            </div>

            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs md:text-sm font-bold">B.Sc. in Computer Science</p>
                    <p className="text-[10px] text-white/40">In Progress - 1st Year</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold">B.Pharm in Pharmacy</p>
                    <p className="text-[10px] text-white/40">Class of 2026 G.C.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h4 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Contact</h4>
                <div className="space-y-2">
                  <p className="text-[10px] md:text-xs font-mono text-white/60">netsanet3613@gmail.com</p>
                  <p className="text-[10px] md:text-xs font-mono text-white/60">0900003613</p>
                  <p className="text-[10px] md:text-xs font-mono text-white/60">netsanet.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreativeServices = () => (
  <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto w-full">
    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/40 mb-6"
      >
        TECHNICAL ARSENAL
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-8 tracking-tight"
      >
        MASTERING THE <span className="luxury-gradient italic font-normal">DIGITAL CANVAS.</span>
      </motion.h2>
      <div className="w-20 h-px bg-white/20" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[
        { icon: LayoutGrid, title: 'Full-Stack Web', desc: 'HTML/CSS/JS, React, and modern web architectures.' },
        { icon: Smartphone, title: 'Mobile App Dev', desc: 'Building functional APKs and Android firmware mods.' },
        { icon: Monitor, title: 'Java & C++', desc: 'OOP principles and complex data structures.' },
        { icon: Zap, title: 'Motion Graphics', desc: 'High-end animations and cinematic storytelling.' },
        { icon: Palette, title: 'UI/UX Design', desc: 'Figma-driven interfaces with luxury aesthetics.' },
        { icon: Edit3, title: 'Brand Identity', desc: 'Crafting unique visual languages and branding.' },
        { icon: Layers, title: 'Illustration', desc: 'Custom digital artwork and Photoshop mastery.' },
        { icon: Target, title: 'Professional', desc: 'Pharmacology, Clinical Calc & Compounding.' }
      ].map((service, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.8 }}
          whileHover={{ 
            y: -10,
            borderColor: 'rgba(0, 242, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)'
          }}
          className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group transition-all duration-500 cursor-default border-white/5"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-neon-cyan/10 group-hover:neon-glow-cyan transition-all duration-700">
            <service.icon className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
          <p className="text-xs md:text-sm text-white/30 leading-relaxed font-light group-hover:text-white/50 transition-colors">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 md:px-12 border-t border-white/5 bg-black/50">
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-xl font-display font-bold">
        Netsanet<span className="text-neon-cyan">.</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="mailto:netsanet3613@gmail.com" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-neon-cyan transition-colors">EMAIL</a>
        <a href="tel:0900003613" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-neon-cyan transition-colors">PHONE</a>
        <a href="https://netsanet.com" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-neon-cyan transition-colors">DOMAIN</a>
      </div>
      <p className="text-[10px] text-white/20 tracking-widest uppercase">© 2026 Netsanet Desta. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-neon-cyan selection:text-black">
      <main className="relative flex-grow">
        <Hero />
        <CreativePartner />
        <CreativeServices />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
