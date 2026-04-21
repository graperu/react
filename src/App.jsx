import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import './index.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <Background />

      <div className="page">
        <Header />
        <Sidebar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />
        
        <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="container-body">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Hobbies />
            <Gallery />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
