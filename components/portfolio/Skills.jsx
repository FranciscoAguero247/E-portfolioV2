import React from 'react';
import { SKILL_MATRIX } from '../../portfolioDta';

export default function Skills() {
  return (
    <section style={{ marginBottom: '120px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
        <h2 style={{ fontSize: '13px', letterSpacing: '0.28em', color: 'rgb(53, 255, 106)' }}>TACTICAL_SKILL_MATRIX</h2>
        <span style={{ fontSize: '11px', color: 'rgb(31, 174, 68)', letterSpacing: '0.14em' }}>{'// CAPABILITY READOUT'}</span>
      </div>
      <div style={{ height: '2px', background: 'rgb(53, 255, 106)', transformOrigin: 'left', boxShadow: 'rgba(53, 255, 106, 0.5) 0px 0px 10px', marginBottom: '40px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px' }}>
        {SKILL_MATRIX.map((grp) => (
          <div key={grp.category} style={{ border: '1px solid rgba(53, 255, 106, 0.28)', background: 'rgba(4, 10, 6, 0.5)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgb(234, 255, 240)' }}>{grp.category}</div>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: '8px' }}>
              {grp.items.map((it) => (
                <li key={it} style={{ fontSize: '13px', color: 'rgb(127, 232, 154)' }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
