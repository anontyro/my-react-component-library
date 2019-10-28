import React from 'react';
import {PageHeadings, Hl} from './component-lib';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeadings outline type="h1" text="Components Test" />
      </header>
      <p>
        Some text <Hl>Highlighted</Hl>
      </p>
    </div>
  );
};

export default App;
