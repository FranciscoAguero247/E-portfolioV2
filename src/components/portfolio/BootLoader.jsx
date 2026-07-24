import { useEffect, useRef } from 'react';

const bootLines = [
  '> INITIALIZING TERMINATOR_PROTOCOL v2.4.7',
  '> MOUNTING /dev/service_record ......... OK',
  '> DECRYPTING OPERATOR MANIFEST ......... OK',
  '> ID .......... FRANCISCO_A_247',
  '> ROLE ........ SOFTWARE DEVELOPER / FULL-STACK',
  '> LOADING ACTIVE_OPERATIONS [##########] 100%',
  '> CLEARANCE ... GRANTED',
  '',
  '> ACCESS GRANTED. WELCOME, OPERATOR.',
];

export default function BootLoader({ onComplete }) {
  const bootRef = useRef(null);
  const bootTextRef = useRef(null);
  const fallbackRef = useRef(0);
  const cleanupRef = useRef(0);

  useEffect(() => {
    const root = document.body;
    root.classList.add('no-scroll');

    const el = bootRef.current;
    const textEl = bootTextRef.current;
    let skipped = false;

    const finish = () => {
      if (skipped) return;
      skipped = true;
      root.classList.remove('no-scroll');
      if (el) {
        el.dataset.done = '1';
      }
      cleanupRef.current = window.setTimeout(() => {
        if (el) {
          el.style.display = 'none';
        }
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 650);
    };

    const handleSkip = () => finish();

    window.addEventListener('keydown', handleSkip);
    if (el) {
      el.addEventListener('click', handleSkip);
    }

    const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

    const runBoot = async () => {
      if (!textEl) return;
      for (const line of bootLines) {
        for (let i = 0; i < line.length; i += 1) {
          if (skipped) return;
          textEl.textContent += line[i];
          // allow the browser to paint and avoid jank on slower devices
          // eslint-disable-next-line no-await-in-loop
          await wait(9);
        }
        textEl.textContent += '\n';
        // eslint-disable-next-line no-await-in-loop
        await wait(160);
      }
      // eslint-disable-next-line no-await-in-loop
      await wait(650);
      finish();
    };

    // fallback if the bootscreen is not skipped after 11 seconds
    fallbackRef.current = window.setTimeout(finish, 11000);
    void runBoot();

    return () => {
      window.removeEventListener('keydown', handleSkip);
      if (el) {
        el.removeEventListener('click', handleSkip);
      }
      window.clearTimeout(fallbackRef.current);
      window.clearTimeout(cleanupRef.current);
      root.classList.remove('no-scroll');
    };
  }, [onComplete]);

  return (
    <div ref={bootRef} className="boot-overlay" role="status" aria-live="polite">
      <div className="boot-inner">
        <pre ref={bootTextRef} className="boot-text" />
        <span className="boot-cursor" aria-hidden="true" />
      </div>
      <div className="boot-hint">PRESS ANY KEY TO SKIP // TERMINATOR_PROTOCOL v2.4.7</div>
    </div>
  );
}
