import React from 'react';
import { SERVICE_RECORDS } from '../../portfolioDta';

export default function Projects() {
  return (
    <section id="operations" style={{ marginBottom: 120 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
        <h2 style={{ fontSize: 13, letterSpacing: '0.28em', color: '#35ff6a', margin: 0 }}>
          ACTIVE_OPERATIONS
        </h2>
        <span style={{ fontSize: 11, color: '#1fae44', letterSpacing: '0.14em' }}>
          {`// SELECTED DEPLOYMENTS [${String(SERVICE_RECORDS.length).padStart(2, '0')}]`}
        </span>
      </div>

      <div
        style={{
          height: 2,
          background: '#35ff6a',
          transformOrigin: 'left center',
          boxShadow: '0 0 10px rgba(53, 255, 106, 0.5)',
          marginBottom: 40,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 18,
        }}
      >
        {SERVICE_RECORDS.map((op, idx) => {

          const targetUrl = op.liveUrl || op.githubUrl || '#';
          
          const primaryTag = op.tags && op.tags.length > 0 ? op.tags[0] : 'SYSTEM';

          const repoAlias = op.githubUrl 
            ? op.githubUrl.split('/').pop() 
            : op.title.replace('OP: ', '');

          return (
            <a
              key={op.id || idx}
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                border: '1px solid rgba(53, 255, 106, 0.28)',
                background: 'rgba(4, 10, 6, 0.5)',
                padding: 24,
                position: 'relative',
                textDecoration: 'none',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 18,
                }}
              >
                <span style={{ fontSize: 11, color: '#1fae44', letterSpacing: '0.16em' }}>
                  [{String(idx + 1).padStart(2, '0')}]
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: '#9dffb5',
                    border: '1px solid rgba(53, 255, 106, 0.3)',
                    padding: '3px 8px',
                  }}
                >
                  {primaryTag}
                </span>
              </div>

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#eafff0',
                  letterSpacing: '0.02em',
                  marginBottom: 6,
                }}
              >
                {op.title}
              </div>

              <div
                style={{
                  fontSize: 11.5,
                  color: '#1fae44',
                  letterSpacing: '0.06em',
                  marginBottom: 16,
                  wordBreak: 'break-word',
                }}
              >
                {repoAlias}
              </div>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: '#7fe89a',
                  minHeight: 66,
                  margin: 0,
                }}
              >
                {op.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(53, 255, 106, 0.18)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                }}
              >
                <span style={{ color: '#35ff6a' }}>
                  STATUS: {op.status || 'DEPLOYED'}
                </span>
                <span style={{ color: '#cfffdb' }}>ACCESS →</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}