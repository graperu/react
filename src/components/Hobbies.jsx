import { motion } from 'framer-motion';
import './Hobbies.css';

const hobbies = [
  { icon: 'bx-code-alt', title: 'Coding', desc: 'Creating cool projects and solving problems' },
  { icon: 'bx-book-open', title: 'Reading', desc: 'Exploring knowledge and ideas' },
  { icon: 'bx-game', title: 'Gaming', desc: 'Having fun and relaxing' },
  { icon: 'bx-tv', title: 'Watching Anime', desc: 'Enjoying stories and animation' },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="section">
      <div className="container-body">
        <h2 className="section-title text-gradient">Sở thích</h2>
        <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <motion.div 
            key={hobby.title}
            className="hobby-card glow-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="hobby-icon">
              <i className={`bx ${hobby.icon}`}></i>
            </div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-desc">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Hobbies;
