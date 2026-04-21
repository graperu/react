import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Hobbies />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
