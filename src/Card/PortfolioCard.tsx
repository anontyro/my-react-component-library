import * as React from 'react';
import styled from 'styled-components';
import {BaseCard} from '..';

const CardHeader = styled.div`
  font-size: 1rem;
`;

interface Props {
  title: React.ReactChild;
}

const PortfolioCard = ({title}: Props) => {
  return (
    <BaseCard>
      {{
        header: <CardHeader>{title}</CardHeader>,
        content: <p>Test</p>,
      }}
    </BaseCard>
  );
};

export default PortfolioCard;
