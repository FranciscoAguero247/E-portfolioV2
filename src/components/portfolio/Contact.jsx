import React from 'react';
import { SYSTEM_CREDENTIALS } from '../../portfolioDta';

export default function Contact(){
  const socials = SYSTEM_CREDENTIALS.socials || {};
  return (
    <section id="contact" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:56,marginBottom:120}}>
      <div>
        <div style={{display:'flex',alignItems:'baseline',gap:16,marginBottom:8}}>
          <h2 style={{fontSize:13,letterSpacing:'.28em',color:'#35ff6a'}}>ESTABLISH_CONTACT</h2>
          <span style={{fontSize:11,color:'#1fae44',letterSpacing:'.14em'}}>// OPEN_CHANNELS</span>
        </div>
        <div style={{height:2,background:'#35ff6a',transformOrigin:'left',boxShadow:'0 0 10px rgba(53,255,106,.5)',marginBottom:40}} />
        <div style={{border:'1px solid rgba(53,255,106,.28)',background:'rgba(4,10,6,.5)',padding:24}}>
          <div style={{marginBottom:12,color:'#cfffdb'}}>Send a message or find me on:</div>
          <ul style={{listStyle:'none',padding:0,display:'grid',gap:10,color:'#7fe89a'}}>
            {socials.github && <li><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a></li>}
            {socials.linkedin && <li><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
            {socials.facebook && <li><a href={socials.facebook} target="_blank" rel="noreferrer">Facebook</a></li>}
          </ul>
        </div>
      </div>

      <div style={{border:'1px solid rgba(53,255,106,.28)',background:'rgba(4,10,6,.5)',padding:24}}>
        <div style={{fontSize:13,fontWeight:700,color:'#eafff0',marginBottom:12}}>CONTACT PANEL</div>
        <div style={{color:'#7fe89a'}}>Email and a small contact form can be placed here — for now the social links are provided on the left.</div>
      </div>
    </section>
  );
}
