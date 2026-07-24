import React, { useState } from 'react';
import Hero from '../components/portfolio/Hero';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import BootLoader from '../components/portfolio/BootLoader';

export default function PortfolioPage() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <div className="background-grid" />
      <div className="background-radial" />
      <div className="scanline-sweep" />
      {booting && <BootLoader onComplete={() => setBooting(false)} />}
      <div className="portfolio-page" style={{ minHeight: '100vh', background: '#030603', color: '#8bffa8', fontFamily: "'JetBrains Mono', ui-monospace, monospace", padding: '96px 28px 160px' }}>
        <main style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
