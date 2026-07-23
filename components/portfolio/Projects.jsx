import React from 'react';
import { SERVICE_RECORDS } from '../../portfolioDta';

export default function Projects() {
  return (
    <section id="operations" style={{ marginBottom: '120px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
        <h2 style={{ fontSize: '13px', letterSpacing: '0.28em', color: 'rgb(53, 255, 106)' }}>ACTIVE_OPERATIONS</h2>
        <span style={{ fontSize: '11px', color: 'rgb(31, 174, 68)', letterSpacing: '0.14em' }}>{'// SELECTED DEPLOYMENTS ['}{SERVICE_RECORDS.length}{']'}</span>
      </div>
      <div style={{ height: '2px', background: 'rgb(53, 255, 106)', transformOrigin: 'left', boxShadow: 'rgba(53, 255, 106, 0.5) 0px 0px 10px', marginBottom: '40px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '18px' }}>
        {SERVICE_RECORDS.map((op, idx) => (
          <a
            key={op.id}
            href={op.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block', border: '1px solid rgba(53, 255, 106, 0.28)', background: 'rgba(4, 10, 6, 0.5)', padding: '24px', position: 'relative', transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '11px', color: 'rgb(31, 174, 68)', letterSpacing: '0.16em' }}>[{String(idx + 1).padStart(2, '0')}]</span>
              <span style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgb(157, 255, 181)', border: '1px solid rgba(53, 255, 106, 0.3)', padding: '3px 8px' }}>{op.tags && op.tags[0]}</span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'rgb(234, 255, 240)', letterSpacing: '0.02em', marginBottom: '6px' }}>{op.title}</div>
            <div style={{ fontSize: '11.5px', color: 'rgb(31, 174, 68)', letterSpacing: '0.06em', marginBottom: '16px', wordBreak: 'break-word' }}>{op.githubUrl}</div>
            <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgb(127, 232, 154)', minHeight: '66px' }}>{op.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(53, 255, 106, 0.18)', fontSize: '11px', letterSpacing: '0.12em' }}>
              <span style={{ color: 'rgb(53, 255, 106)' }}>STATUS: ONLINE</span>
              <span style={{ color: 'rgb(207, 255, 219)' }}>ACCESS →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
