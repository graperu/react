import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text-card glow-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-subtitle">Who I Am</h3>
          <p className="about-text">
            Hi, I'm <strong>Phan Văn Đỉnh</strong>, a 3rd-year IT student with a deep passion for coding and crafting digital experiences. 
            Beyond programming, I’m captivated by <span className="highlight text-gradient">astronomy</span>—spending my free time stargazing, tracing constellations, and marveling at the vastness of the night sky. 
          </p>
          <p className="about-text">
            I enjoy exploring <span className="highlight text-gradient">UI/UX design</span> and creative coding projects, where logic meets visual storytelling, inspired by the elegance and mystery of the cosmos. 
            For me, the stars are not just distant lights—they are a source of <span className="highlight text-gradient">ideas, reflection, and endless curiosity</span>.
          </p>

          <h3 className="section-subtitle mt-4">Career Direction</h3>
          <p className="about-text">
            I aim to combine <span className="highlight text-gradient">IT with design and front-end development</span>, leveraging programming, UX principles, 
            and creative thinking to craft meaningful digital experiences. My goal is to become a <span className="highlight text-gradient">tech creator</span>, 
            helping products communicate their value clearly and beautifully to users.
          </p>

          <ul className="about-meta mt-4">
            <li><i className='bx bx-book-bookmark'></i> <strong>Degree:</strong> Information Technology</li>
            <li><i className='bx bx-map'></i> <strong>Location:</strong> TP. HCM</li>
            <li><i className='bx bx-envelope'></i> <strong>Email:</strong> dinhphan0511@gmail.com</li>
          </ul>
        </motion.div>

        <motion.div 
          className="about-images-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="img-wrapper img-1 glow-box">
            <img src="/img/anhdai1.png" alt="Profile Image 1" />
          </div>
          <div className="img-wrapper img-2 glow-box">
            <img src="/img/anhdai2.png" alt="Profile Image 2" />
          </div>
          <div className="img-wrapper img-3 glow-box">
            <img src="/img/anhbautroi.png" alt="Profile Image 3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
