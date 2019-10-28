import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  cursor: pointer;
`;

export interface MainButtonProps {
  label: string;
}

const MainButton = ({label}: MainButtonProps) => {
  return <ButtonContainer>{label}</ButtonContainer>;
};

export default MainButton;
