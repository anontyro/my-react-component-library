import styled, {css} from 'styled-components';
import * as CONSTS from '../../consts';

interface HeaderProps {
  outline?: boolean;
}

const baseHeadingStyle = css`
  font-family: 'Noto Sans TC', sans-serif;
  text-align: center;
  color: ${CONSTS.COLOURS.DEFAULT_BLUE};
  ${(props: HeaderProps) =>
    props.outline ? 'text-shadow: 1px 1px black;' : ''}
`;

export const Heading1 = styled.h1`
  ${baseHeadingStyle};
`;

export const Heading2 = styled.h2`
  ${baseHeadingStyle};
`;

export const Heading3 = styled.h3`
  ${baseHeadingStyle};
`;

export const Heading4 = styled.h4`
  ${baseHeadingStyle};
`;
