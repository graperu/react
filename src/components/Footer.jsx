import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner container-body">
        <div className="credit" style={{color: "var(--muted)"}}>
          &copy; {currentYear} Phan Văn Đỉnh — Portfolio
        </div>
        <div className="small muted">Thanks for viewing my portfolio. Designed with a modern space aesthetic.</div>
      </div>
    </footer>
  );
};

export default Footer;
