import { useEffect, useRef } from 'react';

const BOOT_LINES = [
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
  
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const root = document.body;
    root.classList.add('no-scroll');

    const el = bootRef.current;
    const textEl = bootTextRef.current;
    
    let isCancelled = false;
    let fallbackTimer = null;
    let cleanupTimer = null;

    if (textEl) {
      textEl.textContent = '';
    }

    const finish = () => {
      if (isCancelled) return;
      isCancelled = true;

      root.classList.remove('no-scroll');

      if (el) {
        el.dataset.done = '1';
      }

      cleanupTimer = window.setTimeout(() => {
        if (el) {
          el.style.display = 'none';
        }
        if (typeof onCompleteRef.current === 'function') {
          onCompleteRef.current();
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

      for (const line of BOOT_LINES) {
        for (let i = 0; i < line.length; i += 1) {
          if (isCancelled) return;
          textEl.textContent += line[i];
          await wait(9);
        }
        if (isCancelled) return;
        textEl.textContent += '\n';
        await wait(160);
      }

      await wait(650);
      finish();
    };

    fallbackTimer = window.setTimeout(finish, 11000);

    void runBoot();

    return () => {
      isCancelled = true;
      window.removeEventListener('keydown', handleSkip);
      if (el) {
        el.removeEventListener('click', handleSkip);
      }
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(cleanupTimer);
      root.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div ref={bootRef} className="boot-overlay" role="status" aria-live="polite">
      <div className="boot-inner">
        <pre ref={bootTextRef} className="boot-text" />
        <span className="boot-cursor" aria-hidden="true" />
      </div>
      <div className="boot-hint">
        PRESS ANY KEY TO SKIP // TERMINATOR_PROTOCOL v2.4.7
      </div>
    </div>
  );
}