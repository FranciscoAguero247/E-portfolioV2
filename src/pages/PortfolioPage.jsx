import React from 'react';
import Hero from '../components/portfolio/Hero';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function PortfolioPage(){
  return (
    <div style={{minHeight:'100vh',background:'#030603',color:'#8bffa8',fontFamily:"'JetBrains Mono', ui-monospace, monospace",padding:'96px 28px 160px'}}>
      <main style={{maxWidth:1180,margin:'0 auto'}}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
