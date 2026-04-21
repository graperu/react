import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const galleryData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', caption: 'Làm việc nhóm cùng đồng đội' },
  { id: 2, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', caption: 'Setup góc Dev yêu thích' },
  { id: 3, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', caption: 'Thuyết trình dự án cuối kỳ' },
  { id: 4, src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop', caption: 'Tham dự hội thảo công nghệ' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section">
      <div className="container-body">
        <h2 className="section-title text-gradient">Bộ sưu tập cá nhân</h2>
        <p className="projects__desc">Những khoảnh khắc đáng nhớ trong quá trình học tập và làm việc.</p>
        <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="gallery-item glow-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-img-wrapper">
              <img src={item.src} alt={item.caption} />
              <div className="gallery-caption-overlay">
                <p>{item.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                <i className='bx bx-x'></i>
              </button>
              <img src={selectedImage.src} alt={selectedImage.caption} />
              <p className="lightbox-caption">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
