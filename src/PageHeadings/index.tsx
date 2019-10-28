import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from './components/HeadingStyles';

enum HtmlHeading {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

interface Props {
  text: string;
  type?: HtmlHeading | string;
  style?: CSS;
  outline?: boolean;
}

const PageHeadings = ({text, type, style, outline = false}: Props) => {
  switch (type) {
    case HtmlHeading.h2:
      return <Heading2 outline={outline}>{text}</Heading2>;
    case HtmlHeading.h3:
      return <Heading3 outline={outline}>{text}</Heading3>;
    case HtmlHeading.h4:
      return <Heading4 outline={outline}>{text}</Heading4>;

    default:
      return <Heading1 outline={outline}>{text}</Heading1>;
  }
};

export default PageHeadings;
