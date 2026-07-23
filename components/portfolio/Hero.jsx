import React from 'react';
import { SYSTEM_CREDENTIALS } from '../../portfolioDta';

export default function Hero() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.9fr', gap: '48px', alignItems: 'start', marginBottom: '120px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', letterSpacing: '0.24em', color: 'rgb(31, 174, 68)', marginBottom: '26px', flexWrap: 'wrap' }}>
          <span>FILE_REF: FRN-247-ALPHA</span>
          <span style={{ color: 'rgb(15, 82, 32)' }}>{'//'}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: 'rgb(53, 255, 106)' }}>
            <span style={{ width: '8px', height: '8px', background: 'rgb(53, 255, 106)', borderRadius: '50%' }} />
            STATUS: ACTIVE_DEPLOYMENT
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(38px, 7vw, 88px)', fontWeight: 800, lineHeight: 0.94, letterSpacing: '-0.01em', color: 'rgb(234, 255, 240)', marginBottom: '8px' }}>
          FRANCISCO<br />AGUERO
        </h1>

        <div style={{ fontSize: 'clamp(14px, 2vw, 19px)', letterSpacing: '0.16em', color: 'rgb(53, 255, 106)', margin: '18px 0 30px' }}>
          SOFTWARE DEVELOPER<span style={{ color: 'rgb(15, 82, 32)' }}> // </span>FULL-STACK OPERATIVE
        </div>

        <p style={{ maxWidth: '560px', fontSize: '14.5px', lineHeight: 1.85, color: 'rgb(127, 232, 154)', marginBottom: '34px' }}>
          {SYSTEM_CREDENTIALS.bio}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '38px' }}>
          {['LOC: WEST_VALLEY_CITY_UT', 'REPOS: 27', 'COMMITS/YR: 189', 'EST: 2022'].map((item) => (
            <span key={item} style={{ border: '1px solid rgba(53, 255, 106, 0.28)', padding: '7px 12px', fontSize: '11.5px', letterSpacing: '0.1em', color: 'rgb(157, 255, 181)' }}>
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a href="#operations" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgb(53, 255, 106)', color: 'rgb(2, 4, 2)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 22px', boxShadow: 'rgba(53, 255, 106, 0.35) 0px 0px 24px' }}>
            VIEW_OPERATIONS <span>↓</span>
          </a>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(53, 255, 106, 0.5)', color: 'rgb(53, 255, 106)', fontSize: '13px', letterSpacing: '0.08em', padding: '13px 22px' }}>
            ESTABLISH_CONTACT
          </a>
        </div>
      </div>

      <div style={{ border: '1px solid rgba(53, 255, 106, 0.4)', background: 'rgba(4, 10, 6, 0.55)', boxShadow: 'rgba(53, 255, 106, 0.1) 0px 0px 34px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', borderBottom: '1px solid rgba(53, 255, 106, 0.25)', fontSize: '10.5px', letterSpacing: '0.18em', color: 'rgb(31, 174, 68)' }}>
          <span>DOSSIER_PHOTO</span><span>FRN-247</span>
        </div>
        <div style={{ position: 'relative', height: '300px', filter: 'grayscale(1) contrast(1.15) brightness(1.02)' }}>
          <img alt="dossier" src="/logs/Screenshot from 2026-06-20 17-29-00.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(transparent 60%, rgba(3, 10, 5, 0.55))', boxShadow: 'rgba(53, 255, 106, 0.12) 0px 0px 60px inset' }} />
        </div>
        <div style={{ padding: '14px', fontSize: '11.5px', lineHeight: 2, color: 'rgb(127, 232, 154)' }}>
          {[['DESIGNATION', 'FULL-STACK DEV'], ['CORE', 'REACT / NODE'], ['CLEARANCE', 'ACTIVE'], ['DEGREE', 'B.S. SYS ENG']].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgb(31, 174, 68)' }}>{label}</span>
              <span style={{ color: 'rgb(207, 255, 219)' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
