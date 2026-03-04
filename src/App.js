import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OfficerID from './components/OfficerID';
import MissionControl from './components/MissionControl';
import ServiceRecord from './components/ServiceRecord';
import LogDetail from './components/LogDetail';
import SystemFooter from './components/SystemFooter';

const MISSION_LOGS = [
  { id: '01', title: 'OP: METRO-INTEL', desc: 'Real-time meteorological surveillance.', link: 'https://api-site-zcwc.onrender.com/', github: "https://github.com/FranciscoAguero247/Weather-App", img: '/logs/weather-preview.png' },
  { id: '02', title: 'OP: VISUAL-RECON', desc: 'React-driven cinematic data retrieval.', link: 'https://movie-motion-g-project-react.vercel.app/', github:"https://github.com/FranciscoAguero247/Movie-Motion-G-Project-React", img: '/logs/movie-motion-G-preview.png' },
  { id: '03', title: 'OP: ARCHIVE-CORE', desc: 'Relational database management system.', link: 'https://book-note-record.onrender.com/', github: "https://github.com/FranciscoAguero247/Book-note-record", img: '/logs/book-note-preview.png' },
  { id: '04', title: 'OP: COMMS-RELAY', desc: 'Full-stack information dissemination.', link: 'https://blog-web-application-delta.vercel.app/', github: "https://github.com/FranciscoAguero247/Blog-Web-Application", img: '/logs/blog-preview.png' },
];

function App() {
  const [hoveredLog, setHoveredLog] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);
  const [showDevInfo, setShowDevInfo] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (selectedLog) {
      document.title = `LOG: ${selectedLog.title}`;
    } else if (showDevInfo) {
      document.title = "OFFICER_SERVICE_RECORD";
    } else {
      document.title = "MISSION_CONTROL";
    }
  }, [selectedLog, showDevInfo]);

  const isOverlayOpen = showDevInfo || selectedLog;

  return (
    <div className="min-h-screen bg-[#05080a] text-[#00ff41] font-mono p-8 overflow-x-hidden overflow-y-auto relative">
     
      <div className="pointer-events-none fixed inset-0 z-[50] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />

      {!showDevInfo && <OfficerID onAccess={() => setShowDevInfo(true)} isMobile={isMobile} />}

      {!isOverlayOpen && (
        <MissionControl 
          logs={MISSION_LOGS} 
          onHover={setHoveredLog} 
          hoveredLog={hoveredLog} 
          onSelect={setSelectedLog} 
          isMobile={isMobile} 
        />
      )}

      <AnimatePresence>
        {showDevInfo && <ServiceRecord onClose={() => setShowDevInfo(false)} />}
        {selectedLog && <LogDetail log={selectedLog} onClose={() => setSelectedLog(null)} />}
      </AnimatePresence>

      {!isOverlayOpen && <SystemFooter />}
    </div>
  );
}

export default App;