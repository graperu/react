import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('fe');

  const tabs = [
    { id: 'fe', label: 'Front-end' },
    { id: 'be', label: 'Back-end' },
    { id: 'db', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const skillsData = {
    fe: [
      { name: 'HTML5', desc: 'Semantic markup, accessibility, forms.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', meta: 'Markup' },
      { name: 'CSS3', desc: 'Flexbox, Grid, Animations, Variables.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', meta: 'Styles' },
      { name: 'JavaScript', desc: 'ES6+, DOM manipulation, Async/Await.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', meta: 'Logic' },
      { name: 'React', desc: 'Components, Hooks, Context, State.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', meta: 'Library' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', meta: 'Framework' },
    ],
    be: [
      { name: 'Node.js', desc: 'REST APIs, server-side logic.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', meta: 'Runtime' },
      { name: 'Express', desc: 'Routing, middleware, application structure.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', meta: 'Framework' },
      { name: 'Python', desc: 'Data processing, scripts, backend basics.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', meta: 'Language' },
    ],
    db: [
      { name: 'MySQL', desc: 'Relational databases, queries, schemas.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', meta: 'RDBMS' },
      { name: 'MongoDB', desc: 'NoSQL, document database design.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', meta: 'NoSQL' },
    ],
    tools: [
      { name: 'Git', desc: 'Version control, branching, merging.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', meta: 'VCS' },
      { name: 'GitHub', desc: 'Repository hosting, actions, PRs.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', meta: 'Platform' },
      { name: 'VS Code', desc: 'Editor, debugging, extensions.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', meta: 'Editor' },
    ]
  };

  return (
    <section id="skills" className="skills section">
      <header className="skills__intro">
        <h2 className="section-title text-gradient">Năng lực chuyên môn</h2>
        <p className="skills__description">
          Dưới đây là các công nghệ và công cụ tôi sử dụng để xây dựng các ứng dụng và dự án của mình.
        </p>
      </header>

      <div className="skills__wrap">
        <aside className="skills__panel">
          <nav className="skills__tabs">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`skills__tab ${activeTab === tab.id ? 'skills__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="skills__grid">
          {skillsData[activeTab].map((skill, idx) => (
            <article key={idx} className="skills__card">
              <p className="skills__meta"><strong>{skill.meta}</strong></p>
              <h3 className="skills__card-title">{skill.name}</h3>
              <p className="skills__card-bio">{skill.desc}</p>
              <footer className="skills__card-meta">
                <img className="skills__card-logo" alt={skill.name} src={skill.icon} />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
