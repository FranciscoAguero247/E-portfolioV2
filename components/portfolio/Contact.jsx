import React from 'react';

const CONTACTS = [
  { label: 'PORTFOLIO', value: 'franciscojavieraguerojr.com', url: 'https://franciscojavieraguerojr.com/' },
  { label: 'LINKEDIN', value: '/in/francisco-aguero', url: 'https://www.linkedin.com/in/francisco-aguero' },
  { label: 'GITHUB', value: '/FranciscoAguero247', url: 'https://github.com/FranciscoAguero247' },
  { label: 'SIGNAL_SECURE', value: 'blast255@live.com', url: 'mailto:blast255@live.com' },
  { label: 'DOSSIER', value: 'DOWNLOAD_RESUME.PDF', url: 'https://franciscojavieraguerojr.com/' }
];

const DIRECTIVES = [
  { title: 'Eliminate System Inefficiency', desc: 'Ruthless attention to performance, clean architecture, and code that does exactly what it must.' },
  { title: 'Ensure UI Resilience', desc: 'Responsive, accessible interfaces that hold under load and across every viewport.' },
  { title: 'Scale Architecture', desc: 'Typed, modular systems built to grow — from API surface to component library.' },
  { title: 'Ship Relentlessly', desc: '100% attendance record energy: consistent output, iterated in the open on GitHub.' }
];

export default function Contact() {
  return (
    <section id="contact" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', marginBottom: '120px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
          <h2 style={{ fontSize: '13px', letterSpacing: '0.28em', color: 'rgb(53, 255, 106)' }}>ESTABLISH_CONTACT</h2>
          <span style={{ fontSize: '11px', color: 'rgb(31, 174, 68)', letterSpacing: '0.14em' }}>{'// OPEN_CHANNELS'}</span>
        </div>
        <div style={{ height: '2px', background: 'rgb(53, 255, 106)', transformOrigin: 'left', boxShadow: 'rgba(53, 255, 106, 0.5) 0px 0px 10px', marginBottom: '40px' }} />
        <div style={{ border: '1px solid rgba(53, 255, 106, 0.28)', background: 'rgba(4, 10, 6, 0.5)', padding: '24px' }}>
          <div style={{ marginBottom: '12px', color: 'rgb(207, 255, 219)' }}>Send a message or find me on:</div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', color: 'rgb(127, 232, 154)' }}>
            {CONTACTS.map((contact) => (
              <li key={contact.label}>
                <a href={contact.url} target="_blank" rel="noreferrer" style={{ color: 'rgb(127, 232, 154)' }}>
                  {contact.label === 'SIGNAL_SECURE' ? 'Email' : contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ border: '1px solid rgba(53, 255, 106, 0.28)', background: 'rgba(4, 10, 6, 0.5)', padding: '24px' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgb(234, 255, 240)', marginBottom: '12px' }}>CONTACT_PANEL</div>
        <div style={{ color: 'rgb(127, 232, 154)' }}>Email and a small contact form can be placed here — for now the social links are provided on the left.</div>
      </div>
    </section>
  );
}
