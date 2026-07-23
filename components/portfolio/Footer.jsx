import React from 'react';

export default function Footer() {
  return (
    <footer style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', background: 'rgba(3, 8, 5, 0.9)', backdropFilter: 'blur(4px)', borderTop: '1px solid rgba(53, 255, 106, 0.3)', padding: '10px 22px', fontSize: '11px', letterSpacing: '0.1em', color: 'rgb(53, 255, 106)' }}>
      <div>© Francisco Aguero — SERVICE RECORD</div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="#" style={{ color: 'rgb(53, 255, 106)' }}>TERMS</a>
        <a href="#" style={{ color: 'rgb(53, 255, 106)' }}>PRIVACY</a>
      </div>
    </footer>
  );
}
