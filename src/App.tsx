import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0]); // Why does it have to be called selectedTabId? It isn't an id at all

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId.id} // selectedTabId.id looks silly, why can't we name it selectedTab instead?
        onTabSelected={setSelectedTabId}
      />
    </div>
  );
};