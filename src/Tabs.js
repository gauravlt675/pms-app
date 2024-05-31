import React, { useState } from 'react';
import Portfolios from './components/Portfolios';
import Watchlist from './components/Watchlist';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('portfolios');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('portfolios')}>Portfolios</button>
        <button onClick={() => handleTabChange('watchlist')}>Watchlist</button>
      </div>
      <div>
        {activeTab === 'portfolios' && <Portfolios />}
        {activeTab === 'watchlist' && <Watchlist />}
      </div>
    </div>
  );
};

export default Tabs;
