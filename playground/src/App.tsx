import React from 'react';
import {PageHeadings} from './component-lib';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeadings outline type="h1" text="Components Test" />
      </header>
    </div>
  );
};

export default App;
