import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="banner">
      <div className="banner__container">
        <header className="banner__header">
          <h2 className="banner__title">Phan Văn Đỉnh</h2>
          <p className="banner__subtitle">
            <span>I'm a</span> <button className="sparkle-button">Software Engineer
              <div className="star-1"><i className="fas fa-star"></i></div>
              <div className="star-2"><i className="fas fa-star"></i></div>
              <div className="star-3"><i className="fas fa-star"></i></div>
              <div className="star-4"><i className="fas fa-star"></i></div>
            </button>
          </p>
          <p className="banner__desc">
            Với niềm đam mê lập trình và khát khao sáng tạo, tôi luôn nỗ lực xây dựng các giải pháp công nghệ hiệu quả và đẹp mắt mang lại trải nghiệm xuất sắc cho người dùng.
          </p>
          <div className="banner__actions">
            <a className="banner__btn" href="#" download>Download CV <span><i className="fa-solid fa-download"></i></span></a>
            <ul className="banner__social">
              <li className="banner__social-item">
                <a className="banner__social-link" href="https://github.com/PhanDinh2005" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              </li>
              <li className="banner__social-item">
                <a className="banner__social-link" href="https://www.facebook.com/graperuu" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              </li>
            </ul>
          </div>
        </header>

        <figure className="banner__avatar">
          <img
            className="banner__photo"
            src="/img/conmeo.png"
            alt="Portrait"
          />
          <span className="banner__ring banner__ring--outer"></span>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
