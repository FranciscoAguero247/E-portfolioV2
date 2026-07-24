import React from 'react';

const historyLogs = [
  {
    period: 'AUG 2016 — DEC 2021',
    title: 'B.S. Systems Engineering',
    subtitle: 'Texas A&M International University',
  },
  {
    period: 'JUN 2022 — PRESENT',
    title: 'Self-Directed Software Engineering',
    subtitle: 'Full-stack web development // React, Node, TypeScript',
  },
  {
    period: 'NOV 2023',
    title: 'C++ Essential Training',
    subtitle: 'Certification — LinkedIn Learning',
  },
  {
    period: '2024 — 2025',
    title: 'Front-End Virtual Internships',
    subtitle: 'Skinstric (FES) · Frontend Simplified',
  },
];

export default function Experience() {
  return (
    <section style={{ marginBottom: 120 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
        <h2 style={{ fontSize: 13, letterSpacing: '0.28em', color: '#35ff6a', margin: 0 }}>
          SERVICE_HISTORY
        </h2>
        <span style={{ fontSize: 11, color: '#1fae44', letterSpacing: '0.14em' }}>
          // TRAINING &amp; DEPLOYMENT LOG
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
          position: 'relative',
          paddingLeft: 28,
          borderLeft: '1px solid rgba(53, 255, 106, 0.3)',
        }}
      >
        {historyLogs.map((item, idx) => (
          <div key={idx} style={{ position: 'relative', marginBottom: 34 }}>
            <span
              style={{
                position: 'absolute',
                left: -34,
                top: 4,
                width: 11,
                height: 11,
                background: '#35ff6a',
                borderRadius: '50%',
                boxShadow: '0 0 10px #35ff6a',
              }}
            />
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.16em',
                color: '#1fae44',
                marginBottom: 6,
              }}
            >
              <span>{item.period}</span>
            </div>
            {/* Title */}
            <div
              style={{
                fontSize: 16,
                color: '#eafff0',
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              <span>{item.title}</span>
            </div>
            {/* Subtitle / Location */}
            <div style={{ fontSize: 12.5, color: '#7fe89a' }}>
              <span>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}