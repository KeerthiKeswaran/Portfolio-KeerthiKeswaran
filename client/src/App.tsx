import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-jet flex items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-cyan-glow/20 rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-t-4 border-cyan-glow rounded-full animate-glow"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-jet">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;