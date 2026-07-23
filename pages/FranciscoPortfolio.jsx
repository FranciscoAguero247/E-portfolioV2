import React, { useEffect, useState } from 'react';

export default function FranciscoPortfolio() {
  const [html, setHtml] = useState(null);
  useEffect(() => {
    fetch('/assets/Francisco-Aguero-Portfolio.raw.html')
      .then(r => r.text())
      .then(t => setHtml(t))
      .catch(err => setHtml('<pre style="color:red">Failed to load raw HTML: '+err.message+'</pre>'));
  }, []);

  if (!html) return <div className="p-8 text-[#00ff41] font-mono">Loading portfolio HTML...</div>;

  return (
    <div className="min-h-screen bg-white text-black">
      <div style={{padding: '20px'}}>
        <h1 style={{fontFamily: 'monospace', color:'#030603'}}>Francisco Aguero — Extracted Portfolio (preview)</h1>
        <div style={{marginTop:20}} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  );
}
