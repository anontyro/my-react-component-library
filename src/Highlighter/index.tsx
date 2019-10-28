import React from 'react';
import styled from 'styled-components';
import * as CONSTS from '../consts';

const Highlighter = styled.span`
  color: ${CONSTS.COLOURS.DEFAULT_BLUE};
`;

interface Props {
  children: React.ReactNode;
}

const Hl = ({children}: Props) => <Highlighter>{children}</Highlighter>;

export default Hl;
