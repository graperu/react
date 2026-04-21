import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 60 },
  { name: 'React', level: 30 },
  { name: 'C++', level: 90 },
  { name: 'Python', level: 90 },
  { name: 'DS & Algo', level: 73 },
  { name: 'Soft Skills', level: 58 },
  { name: 'Tiếng Việt', level: 100 },
  { name: 'English', level: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title"><span className="text-gradient">Skills</span></h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="skill-pill glow-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="skill-info">
              <strong>{skill.name}</strong>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bg">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
