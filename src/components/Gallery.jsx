import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const galleryData = [
  { id: 1, src: '/img/hoanhac.png', caption: 'Hòa nhạc ở nhà văn hóa sinh viên' },
  { id: 2, src: '/img/pnvn.png', caption: '20/10 của năm 2022' },
  { id: 3, src: '/img/nhvl.png', caption: 'Sự kiện ở IU' },
  { id: 4, src: '/img/drl.png', caption: 'Sự kiện của trường' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section container">
      <h2 className="section-title"><span className="text-gradient">Gallery</span></h2>
      
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
    </section>
  );
};

export default Gallery;
