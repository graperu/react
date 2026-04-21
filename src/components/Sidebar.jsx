import './Sidebar.css';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { href: '#home', icon: 'fa-house', label: 'Home' },
    { href: '#about', icon: 'fa-id-card', label: 'About Me' },
    { href: '#skills', icon: 'fa-code', label: 'Skills' },
    { href: '#experience', icon: 'fa-briefcase', label: 'Experience' },
    { href: '#projects', icon: 'fa-folder-open', label: 'Projects' },
    { href: '#hobbies', icon: 'fa-heart', label: 'Hobbies' },
    { href: '#gallery', icon: 'fa-images', label: 'Gallery' },
    { href: '#contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`} aria-label="Side navigation">
      <div className="sidebar-header">
        <button className="sidebar-toggler" onClick={toggleSidebar}>
          <i className="fas fa-angles-right" style={{ transform: collapsed ? 'rotate(0)' : 'rotate(180deg)', transition: 'transform 0.3s ease' }}></i>
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list primary-nav">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a href={item.href} className="nav-link">
                <i className={`fas ${item.icon} nav-icon`}></i>
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
