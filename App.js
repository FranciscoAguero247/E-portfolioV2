import React, { useEffect } from 'react';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  useEffect(() => {
    document.title = 'FRANCISCO_AGUERO — PORTFOLIO';
  }, []);

  return <PortfolioPage />;
}

export default App;