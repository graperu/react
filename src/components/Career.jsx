import { motion } from 'framer-motion';
import './Career.css';

const Career = () => {
  return (
    <section id="career" className="section container">
      <h2 className="section-title">Career <span className="text-gradient">Info & Goal</span></h2>
      
      <div className="career-grid">
        <motion.div 
          className="career-card current glow-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="icon-wrapper">
            <i className='bx bx-briefcase'></i>
          </div>
          <h3>Current Position</h3>
          <ul className="career-list">
            <li><strong>Role:</strong> Frontend Developer</li>
            <li><strong>Company:</strong> Freelancer / Personal Projects</li>
            <li><strong>Core Skills:</strong> HTML, CSS, JavaScript, React, C++, Python</li>
            <li><strong>Experience:</strong> 2 years</li>
          </ul>
        </motion.div>

        <motion.div 
          className="career-card goal glow-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="icon-wrapper">
            <i className='bx bx-target-lock'></i>
          </div>
          <h3>Career Goal</h3>
          <p>
            Aiming to advance Frontend skills, build creative UI/UX projects, 
            enhance programming & design capabilities, and pursue a Fullstack Developer role within 2 years.
          </p>
          <div className="goal-tags">
            <span className="tag">Frontend</span>
            <span className="tag">UI/UX</span>
            <span className="tag">Fullstack</span>
            <span className="tag">React</span>
            <span className="tag">C++</span>
            <span className="tag">Python</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
