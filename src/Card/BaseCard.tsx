import * as React from 'react';
import styled from 'styled-components';

const isObject = <T extends Object>(value: any): value is T =>
  typeof value === 'object' &&
  typeof value !== 'function' &&
  typeof value !== undefined;

const isNamedChildSlot = (children: any): children is NamedChildSlot =>
  isObject(children) && 'content' in children;

const CardContainer = styled.div`
  width: 45%;
  height: 100px;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 22px -10px black;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: -3px -3px 22px -10px black;
  }
`;

interface Props {
  children: React.ReactChild | NamedChildSlot;
}

interface NamedChildSlot {
  header?: React.ReactChild;
  content: React.ReactChild;
  footer?: React.ReactChild;
}

const PortfolioCard = ({children}: Props) => {
  if (isNamedChildSlot(children)) {
    const {header, content, footer} = children;
    return (
      <CardContainer>
        {header && <div className="card-header">{header}</div>}
        <div className="card-content">{content}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </CardContainer>
    );
  }

  return <CardContainer>{children}</CardContainer>;
};

export default PortfolioCard;
