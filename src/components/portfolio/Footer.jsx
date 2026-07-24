import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [timeUtc, setTimeUtc] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeUtc(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes bitFlicker {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>

      <footer
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
          background: 'rgba(3, 8, 5, 0.9)',
          backdropFilter: 'blur(4px)',
          borderTop: '1px solid rgba(53, 255, 106, 0.3)',
          padding: '10px 22px',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: '#35ff6a',
        }}
      >
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', alignItems: 'center' }}>
          <span>CORE: REACT_v18.0</span>
          <span style={{ color: '#1fae44' }}>LOGIC: TERMINATOR_PROTOCOL</span>
          <span style={{ color: '#9dffb5' }}>{timeUtc || '00:00:00 UTC'}</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span>© Francisco Aguero — SERVICE RECORD</span>
        </div>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1fae44' }}>
            DATABASE:
            <span style={{ display: 'inline-flex', gap: 2 }}>
              {[0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 0.99, 1.1, 1.21].map(
                (delay, idx) => (
                  <span
                    key={idx}
                    style={{
                      width: 5,
                      height: 11,
                      background: '#35ff6a',
                      animation: `bitFlicker 1.4s ease-in-out ${delay}s infinite`,
                    }}
                  />
                )
              )}
            </span>
          </span>

          <span>STABLE</span>
          <span style={{ color: '#9dffb5' }}>SIGNAL: ONLINE</span>

          <div style={{ display: 'flex', gap: 12, marginLeft: 8 }}>
            <button
              disabled
              style={{
                background: 'none',
                border: 'none',
                color: '#35ff6a',
                cursor: 'not-allowed',
                opacity: 0.5,
                padding: 0,
                fontSize: 'inherit',
                letterSpacing: 'inherit',
              }}
            >
              TERMS
            </button>
            <button
              disabled
              style={{
                background: 'none',
                border: 'none',
                color: '#35ff6a',
                cursor: 'not-allowed',
                opacity: 0.5,
                padding: 0,
                fontSize: 'inherit',
                letterSpacing: 'inherit',
              }}
            >
              PRIVACY
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}