import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OfficerID from './components/OfficerID';
import MissionControl from './components/MissionControl';
import ServiceRecord from './components/ServiceRecord';
import LogDetail from './components/LogDetail';
import SystemFooter from './components/SystemFooter';
import { SERVICE_RECORDS } from './portfolioDta';

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
          logs={SERVICE_RECORDS} 
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