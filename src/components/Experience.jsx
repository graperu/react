import { motion } from 'framer-motion';
import './Experience.css';

const timelineData = [
  { id: 1, time: 'Sep 2023 — Dec 2023', title: 'Năm 1', desc: 'Toán 1, Lập trình cơ bản, Tin học đại cương' },
  { id: 2, time: 'Jan 2024 — Jun 2024', title: 'Năm 1 kỳ 2', desc: 'C++, CTDL & GT, TRR, MMT' },
  { id: 3, time: 'Sep 2024 — Jun 2025', title: 'Năm 2', desc: 'OS, Computer Architecture, Web Basics...' },
  { id: 4, time: 'Jul 2025 — Present', title: 'Năm 3', desc: 'Frontend, Personal Projects' },
  { id: 5, time: 'Jan 2026 — Mar 2026', title: 'Coming Soon', desc: '...' },
  { id: 6, time: 'Apr 2026 — Dec 2026', title: 'Coming Soon', desc: '...' },
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Experience & <span className="text-gradient">Timeline</span></h2>
      
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        
        <div className="timeline">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-content glow-box">
                  <div className="time">{item.time}</div>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                </div>
                <div className="timeline-point"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
