import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio',
    desc: 'My personal portfolio showcasing UI/UX and frontend skills.',
    img: '/img/prj1.png',
    tags: ['HTML', 'CSS', 'JS', 'React', 'Vite'],
    github: 'https://github.com/PhanDinh2005',
    demo: '#',
  },
  {
    id: 2,
    title: 'Web mua bán sách',
    desc: 'Web bán sách trực tuyến, UI tối giản, dễ dùng.',
    img: '/img/prj2.png',
    tags: ['Coming Soon'],
    github: '#',
    demo: '#',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section container">
      <h2 className="section-title"><span className="text-gradient">Projects</span></h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card glow-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-media">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <span className="view-btn">View Details</span>
              </div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content glow-box"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  <i className='bx bx-x'></i>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
                <p>{selectedProject.desc}</p>
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
