import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Simulate asset loading
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => {
      // FIX: Argument of type 'unknown' is not assignable to parameter of type 'Element'.
      // Replaced Object.values() with Object.keys() to ensure correct type inference for 'el'.
      Object.keys(sectionRefs.current).forEach((key) => {
        const el = sectionRefs.current[key];
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] scroll-smooth">
      <Navbar activeSection={activeSection} navLinks={sections} />
      <main>
        <div id="home" ref={(el) => (sectionRefs.current['home'] = el)}>
          <Hero />
        </div>
        <div id="about" ref={(el) => (sectionRefs.current['about'] = el)}>
          <About />
        </div>
        <div id="skills" ref={(el) => (sectionRefs.current['skills'] = el)}>
          <Skills />
        </div>
        <div id="projects" ref={(el) => (sectionRefs.current['projects'] = el)}>
          <Projects />
        </div>
        <div id="experience" ref={(el) => (sectionRefs.current['experience'] = el)}>
          <ExperienceTimeline />
        </div>
        <div id="contact" ref={(el) => (sectionRefs.current['contact'] = el)}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;