import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src="/img/conmeo.png" alt="Logo" className="logo__avatar" />
        <h1 className="logo__site-title">Portfolio</h1>
      </a>

      <div className="header__controls">
        <a className="controls__iconlink" href="https://github.com/PhanDinh2005" aria-label="Github">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="controls__iconlink" href="mailto:dinhphan0511@gmail.com" aria-label="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <button className="controls__theme-toggle" aria-label="Toggle light/dark theme">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
