import { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const particlesContainer = document.querySelector('.neural-particles');
    if (!particlesContainer) return;

    // Clear existing
    particlesContainer.innerHTML = '';

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const left = Math.random() * 100;
      const animDuration = 10 + Math.random() * 15;
      const animDelay = Math.random() * 10;
      const drift = (Math.random() - 0.5) * 100;
      
      particle.style.left = `${left}vw`;
      particle.style.animationDuration = `${animDuration}s`;
      particle.style.animationDelay = `-${animDelay}s`;
      particle.style.setProperty('--drift', `${drift}px`);
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <>
      <div className="neural-background" aria-hidden="true"></div>
      
      <div className="geometric-shapes" aria-hidden="true">
        <div className="shape s1"></div>
        <div className="shape s2"></div>
        <div className="shape s3"></div>
        <div className="shape s4"></div>
      </div>
      
      <div className="neural-lines" aria-hidden="true">
        <div className="neural-line l1"></div>
        <div className="neural-line l2"></div>
        <div className="neural-line l3"></div>
      </div>

      <div className="neural-particles" aria-hidden="true"></div>
    </>
  );
};

export default Background;
