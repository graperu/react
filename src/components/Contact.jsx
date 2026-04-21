import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-body">
        <h2 className="section-title text-gradient">Let's work together</h2>
        <p className="projects__desc" style={{marginBottom: "40px"}}>Có dự án đang ấp ủ? Hãy liên hệ để cùng phân tích yêu cầu, đề xuất giải pháp và bắt đầu triển khai nhanh nhất có thể.</p>
        
        <div className="contact-grid">
        <motion.form 
          className="contact-form glow-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <input type="text" placeholder="Họ tên" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Nội dung..." required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Gửi Message</button>
            <button type="reset" className="btn btn-ghost">Xóa Form</button>
          </div>
        </motion.form>

        <motion.div 
          className="contact-info glow-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Thông tin liên hệ</h3>
          <p className="contact-desc">Feel free to reach out to me for collaborations, projects, or just to say hi!</p>
          
          <ul className="contact-details">
            <li>
              <div className="icon"><i className='bx bx-envelope'></i></div>
              <span>dinhphan0511@gmail.com</span>
            </li>
            <li>
              <div className="icon"><i className='bx bx-phone'></i></div>
              <span>0938179491</span>
            </li>
            <li>
              <div className="icon"><i className='bx bx-map'></i></div>
              <span>TP. Hồ Chí Minh, Vietnam</span>
            </li>
          </ul>

          <div className="contact-social">
            <a href="https://github.com/PhanDinh2005" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
            <a href="https://www.facebook.com/graperuu" target="_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a>
            <a href="#" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
