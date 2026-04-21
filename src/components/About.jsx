import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about__container">
        <div className="about__intro">
          <h2 className="about__title">Về bản thân tôi</h2>
          <div className="about__title-underline"><span className="bar-lg"></span></div>
          <h3 className="about__subtitle">Tôi với vai trò <span className="role">Software Engineer</span></h3>
          <p className="about__description">
            Với định hướng chuyên sâu về Web Development, tôi tập trung xây dựng các hệ thống có kiến trúc tối ưu, hiệu suất cao và khả năng mở rộng. Tôi có kinh nghiệm thiết kế UI/UX, tích hợp API tin cậy và áp dụng các quy trình làm việc hiện đại để đảm bảo tính ổn định cho sản phẩm, mang lại giá trị thực tiễn cho người dùng.
          </p>
        </div>

        <div className="about__grid">
          <aside className="about__profile-card">
            <div className="about__profile-photo">
              <span className="about__ribbon">Profile</span>
              <img src="/img/conmeo.png" alt="Portrait" />
            </div>
          </aside>
          <div className="about__details-wrapper">
            <div className="about__details">
              <div className="about__detail"><b><i className="fa-solid fa-cake-candles"></i> Ngày sinh:</b><span>05/11/2005</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-user"></i> Tuổi:</b><span>19</span></div>
              <div className="about__detail"><b><i className="fa-brands fa-github"></i> Github:</b><span>PhanDinh2005</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-envelope"></i> Email:</b><span>dinhphan0511@gmail.com</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-graduation-cap"></i> Học vấn:</b><span>Sinh viên Công nghệ thông tin</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-phone"></i> Điện thoại:</b><span>(+84) 938 179 491</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-city"></i> Thành phố:</b><span>Hồ Chí Minh</span></div>
              <div className="about__detail"><b><i className="fa-solid fa-briefcase"></i> Trạng thái:</b><span>Sẵn sàng</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
