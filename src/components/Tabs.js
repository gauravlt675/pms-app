import React, { useState } from 'react';
import Portfolios from './Portfolios';
import Watchlist from './Watchlist';
import Screener from './Screener';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('portfolios');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-container">
            <nav className="tabs">
                <button onClick={() => handleTabChange('portfolios')} className={activeTab === 'portfolios' ? 'active' : ''}>
                    Portfolios
                </button>
                <button onClick={() => handleTabChange('watchlist')} className={activeTab === 'watchlist' ? 'active' : ''}>
                    Watchlist
                </button>
                <button onClick={() => handleTabChange('screener')} className={activeTab === 'screener' ? 'active' : ''}>
                    Screener
                </button>
            </nav>

            <div className="tab-content">
                {activeTab === 'portfolios' && <Portfolios />}
                {activeTab === 'watchlist' && <Watchlist />}
                {activeTab === 'screener' && <Screener/>}
            </div>
        </div>
    );
};

export default Tabs;
