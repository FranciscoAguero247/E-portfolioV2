import React from 'react';
import { SKILL_MATRIX } from '../../portfolioData';

export default function Skills() {
  return (
    <section style={{ marginBottom: 120 }}>
      {/* Header Readout */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
        <h2 style={{ fontSize: 13, letterSpacing: '0.28em', color: '#35ff6a', margin: 0 }}>
          TACTICAL_SKILL_MATRIX
        </h2>
        <span style={{ fontSize: 11, color: '#1fae44', letterSpacing: '0.14em' }}>
          {"// CAPABILITY READOUT"}
        </span>
      </div>

      {/* Cyber Divider Line */}
      <div
        style={{
          height: 2,
          background: '#35ff6a',
          transformOrigin: 'left center',
          boxShadow: '0 0 10px rgba(53, 255, 106, 0.5)',
          marginBottom: 40,
        }}
      />

      {/* Matrix Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 18,
        }}
      >
        {SKILL_MATRIX.map((grp) => (
          <div
            key={grp.category}
            style={{
              border: '1px solid rgba(53, 255, 106, 0.28)',
              background: 'rgba(4, 10, 6, 0.5)',
              padding: 24,
            }}
          >
            {/* Category Header & Status Badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#35ff6a',
                  letterSpacing: '0.1em',
                }}
              >
                {grp.category}
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  color: '#020402',
                  background: '#35ff6a',
                  padding: '3px 8px',
                  fontWeight: 700,
                }}
              >
                {grp.status || 'STABLE'}
              </span>
            </div>

            {/* Skill Progress Bars */}
            {grp.items.map((it) => {
              // Dynamically extract name and level straight from object or primitive
              const name = typeof it === 'object' ? it.name : it;
              const level = typeof it === 'object' ? it.level : undefined;

              return (
                <div key={name} style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 12,
                      color: '#9dffb5',
                      marginBottom: 6,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span>{name}</span>
                    {level !== undefined && (
                      <span style={{ color: '#1fae44' }}>{level}%</span>
                    )}
                  </div>
                  {level !== undefined && (
                    <div
                      style={{
                        height: 6,
                        background: 'rgba(53, 255, 106, 0.12)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${level}%`,
                          background: '#35ff6a',
                          boxShadow: '0 0 8px rgba(53, 255, 106, 0.6)',
                          transformOrigin: 'left center',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}