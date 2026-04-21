import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I code and design beautiful things.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText.length]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="home" className="hero section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00f0ff" },
            links: {
              color: "#00f0ff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: {
              density: { enable: true, area: 800 },
              value: 40,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
      
      <div className="hero-inner container">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow">Hi — I'm</div>
          <h1><span className="text-gradient hover-glow">Phan Văn Đỉnh</span></h1>
          <p className="lead">
            I am a tech enthusiast who loves to code and create amazing digital experiences.
          </p>
          
          <div className="typewriter-container">
            <span className="typewriter-text">{text}</span>
            <span className="cursor">|</span>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/PhanDinh2005" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i> github.com/PhanDinh2005
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <img src="/img/nhokhoc.png" alt="Avatar profile" />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <a href="#about"><i className='bx bx-chevron-down'></i></a>
      </div>
    </section>
  );
};

export default Hero;
