import React from 'react';
import styled from 'styled-components';
import {PageHeadings, Hl, BaseCard, PortfolioCard} from './component-lib';

const TitleStyle = styled.div``;
const TestTitle = () => <TitleStyle>Text is here</TitleStyle>;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeadings outline type="h1" text="Components Test" />
      </header>
      <p>
        Some text <Hl>Highlighted</Hl>
      </p>
      <BaseCard>
        {{
          header: <TestTitle />,
          content: <p>Main content</p>,
        }}
      </BaseCard>
      <PortfolioCard title="This is a portfolio" />
    </div>
  );
};

export default App;
