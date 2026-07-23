import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function TerminalContact() {
  const formRef = useRef(null);
  
  
  const [transmissionStatus, setTransmissionStatus] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setTransmissionStatus('TRANSMITTING');

    const SERVICE_ID = 'service_1lghigc';
    const TEMPLATE_ID = 'template_e1ipelh';
    const PUBLIC_KEY = '5-ebr5ty1brcRAbed';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
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
    <section className="max-w-xl mx-auto border border-[#00ff41]/30 p-6 rounded-lg bg-[#05080a]/90 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
      <div className="flex items-center justify-between border-b border-[#00ff41]/30 pb-3 mb-6">
        <h2 className="text-sm font-bold tracking-widest text-[#00ff41] animate-pulse">
          &gt; SECURE_COMMS_LINK.EXE
        </h2>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff41]/80"></span>
        </div>
      </div>

      {transmissionStatus === 'SUCCESS' ? (
        <div className="space-y-4 py-8 text-center animate-fade-in">
          <p className="text-xl font-bold tracking-wider text-[#00ff41]">
            &gt;&gt; TRANSMISSION COMPLETE //
          </p>
          <div className="text-xs text-[#00ff41]/70 max-w-sm mx-auto font-mono leading-relaxed">
            Connection secure. Signal dispatched to base archives successfully. 
            Officer Agüero will respond shortly.
          </div>
          <button 
            onClick={() => setTransmissionStatus('IDLE')}
            className="mt-4 px-4 py-1.5 border border-[#00ff41] text-xs font-bold hover:bg-[#00ff41]/10 active:scale-95 transition-all"
          >
            NEW TRANSMISSION
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-1.5 text-[#00ff41]/80">
              [01] Sender Name
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. John Doe"
              required
              className="w-full bg-[#030507] border border-[#00ff41]/30 px-3 py-2 text-sm text-[#00ff41] placeholder-[#00ff41]/30 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41]/30 rounded transition-all"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1.5 text-[#00ff41]/80">
              [02] Return Signal (Email)
            </label>
            <input 
              type="email" 
              name="mail"
              placeholder="e.g. you@domain.com"
              required
              className="w-full bg-[#030507] border border-[#00ff41]/30 px-3 py-2 text-sm text-[#00ff41] placeholder-[#00ff41]/30 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41]/30 rounded transition-all"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-1.5 text-[#00ff41]/80">
              [03] Encrypted Payload (Message)
            </label>
            <textarea 
              name="message"
              rows={4}
              placeholder="Inject payload sequence here..."
              required
              className="w-full bg-[#030507] border border-[#00ff41]/30 px-3 py-2 text-sm text-[#00ff41] placeholder-[#00ff41]/30 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41]/30 rounded transition-all resize-none"
            />
          </div>

          {transmissionStatus === 'ERROR' && (
            <div className="p-3 border border-red-500/30 bg-red-950/20 text-red-400 text-xs rounded font-mono">
              SYSTEM ERROR: {errorMessage}. Signal dropped.
            </div>
          )}

          <button 
            type="submit"
            disabled={transmissionStatus === 'TRANSMITTING'}
            className="w-full py-2.5 border border-[#00ff41] bg-transparent hover:bg-[#00ff41]/10 text-xs font-bold tracking-widest uppercase transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            {transmissionStatus === 'TRANSMITTING' ? 'UPLOADING PACKETS...' : 'EXECUTE TRANSMISSION'}
          </button>
        </form>
      )}
    </section>
  );
}