import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SYSTEM_CREDENTIALS } from '../../portfolioData';

const coreDirectives = [
  {
    title: 'Eliminate System Inefficiency',
    description: 'Ruthless attention to performance, clean architecture, and code that does exactly what it must.',
  },
  {
    title: 'Ensure UI Resilience',
    description: 'Responsive, accessible interfaces that hold under load and across every viewport.',
  },
  {
    title: 'Scale Architecture',
    description: 'Typed, modular systems built to grow — from API surface to component library.',
  },
  {
    title: 'Ship Relentlessly',
    description: '100% attendance record energy: consistent output, iterated in the open on GitHub.',
  },
];

export default function Contact() {
  const socials = SYSTEM_CREDENTIALS.socials || {};
  const formRef = useRef(null);

  const [transmissionStatus, setTransmissionStatus] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setTransmissionStatus('TRANSMITTING');

    const SERVICE_ID = 'service_1lghigc';
    const TEMPLATE_ID = 'template_e1ipelh';
    const PUBLIC_KEY = '5-ebr5ty1brcRAbed';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setTransmissionStatus('SUCCESS');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Transmission Failure:', error);
        setTransmissionStatus('ERROR');
        setErrorMessage(error.text || 'COMMS_RELAY_OFFLINE');
      });
  };

  return (
    <section
      id="contact"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr .9fr',
        gap: 56,
        marginBottom: 120,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
          <h2 style={{ fontSize: 13, letterSpacing: '.28em', color: '#35ff6a', margin: 0 }}>
            ESTABLISH_CONTACT
          </h2>
          <span style={{ fontSize: 11, color: '#1fae44', letterSpacing: '.14em' }}>
            {"//"} OPEN_CHANNELS
          </span>
        </div>
        <div
          style={{
            height: 2,
            background: '#35ff6a',
            transformOrigin: 'left',
            boxShadow: '0 0 10px rgba(53,255,106,.5)',
            marginBottom: 32,
          }}
        />

        <div
          style={{
            border: '1px solid rgba(53,255,106,.28)',
            background: 'rgba(4,10,6,.5)',
            padding: 24,
            marginBottom: 24,
            boxShadow: '0 0 15px rgba(53,255,106,.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(53,255,106,.28)',
              paddingBottom: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: '#eafff0', letterSpacing: '.12em' }}>
              &gt; SECURE_COMMS_LINK.EXE
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#35ff6a' }} />
            </div>
          </div>

          {transmissionStatus === 'SUCCESS' ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#35ff6a',
                  letterSpacing: '.14em',
                  marginBottom: 12,
                }}
              >
                &gt;&gt; TRANSMISSION COMPLETE //
              </div>
              <div style={{ fontSize: 12, color: '#7fe89a', lineHeight: 1.6, marginBottom: 20 }}>
                Connection secure. Signal dispatched to base archives successfully. Officer Agüero will respond shortly.
              </div>
              <button
                onClick={() => setTransmissionStatus('IDLE')}
                style={{
                  border: '1px solid #35ff6a',
                  background: 'transparent',
                  color: '#35ff6a',
                  padding: '8px 16px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  cursor: 'pointer',
                }}
              >
                NEW TRANSMISSION
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} style={{ display: 'grid', gap: 16 }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    color: '#1fae44',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                  }}
                >
                  [01] Sender Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                  style={{
                    width: '100%',
                    background: '#030507',
                    border: '1px solid rgba(53,255,106,.3)',
                    padding: '8px 12px',
                    fontSize: 13,
                    color: '#35ff6a',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    color: '#1fae44',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                  }}
                >
                  [02] Return Signal (Email)
                </label>
                <input
                  type="email"
                  name="mail"
                  placeholder="e.g. you@domain.com"
                  required
                  style={{
                    width: '100%',
                    background: '#030507',
                    border: '1px solid rgba(53,255,106,.3)',
                    padding: '8px 12px',
                    fontSize: 13,
                    color: '#35ff6a',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    color: '#1fae44',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                  }}
                >
                  [03] Encrypted Payload (Message)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Inject payload sequence here..."
                  required
                  style={{
                    width: '100%',
                    background: '#030507',
                    border: '1px solid rgba(53,255,106,.3)',
                    padding: '8px 12px',
                    fontSize: 13,
                    color: '#35ff6a',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {transmissionStatus === 'ERROR' && (
                <div
                  style={{
                    padding: 10,
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    background: 'rgba(127, 29, 29, 0.2)',
                    color: '#f87171',
                    fontSize: 11,
                  }}
                >
                  SYSTEM ERROR: {errorMessage}. Signal dropped.
                </div>
              )}

              <button
                type="submit"
                disabled={transmissionStatus === 'TRANSMITTING'}
                style={{
                  border: '1px solid #35ff6a',
                  background: 'transparent',
                  color: '#35ff6a',
                  padding: '10px 0',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  cursor: transmissionStatus === 'TRANSMITTING' ? 'not-allowed' : 'pointer',
                  opacity: transmissionStatus === 'TRANSMITTING' ? 0.5 : 1,
                  transition: 'background 0.2s',
                }}
              >
                {transmissionStatus === 'TRANSMITTING'
                  ? 'UPLOADING PACKETS...'
                  : 'EXECUTE TRANSMISSION'}
              </button>
            </form>
          )}
        </div>

        <div
          style={{
            border: '1px solid rgba(53,255,106,.28)',
            background: 'rgba(4,10,6,.5)',
            padding: 24,
          }}
        >
          <div style={{ marginBottom: 12, color: '#cfffdb', fontSize: 13 }}>
            Direct channels:
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: 10,
              color: '#7fe89a',
            }}
          >
            {socials.github && (
              <li>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#35ff6a', textDecoration: 'none' }}
                >
                  ▸ GitHub
                </a>
              </li>
            )}
            {socials.linkedin && (
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#35ff6a', textDecoration: 'none' }}
                >
                  ▸ LinkedIn
                </a>
              </li>
            )}
            {socials.facebook && (
              <li>
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#35ff6a', textDecoration: 'none' }}
                >
                  ▸ Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
          <h2 style={{ fontSize: 13, letterSpacing: '.28em', color: '#35ff6a', margin: 0 }}>
            CORE_DIRECTIVES
          </h2>
        </div>
        <div
          style={{
            height: 2,
            background: '#35ff6a',
            transformOrigin: 'left',
            boxShadow: '0 0 10px rgba(53,255,106,.5)',
            marginBottom: 32,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {coreDirectives.map((directive, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ color: '#35ff6a', fontSize: 13, marginTop: 2 }}>▸</span>
              <div>
                <div style={{ fontSize: 15, color: '#eafff0', fontWeight: 700 }}>
                  {directive.title}
                </div>
                <div style={{ fontSize: '12.5px', color: '#7fe89a', lineHeight: 1.7, marginTop: 2 }}>
                  {directive.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}