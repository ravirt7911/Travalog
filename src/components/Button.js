import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0.5rem;
  font-weight: bold;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  height: ${props => props.height};
  width: ${props => props.width};
  border: 1px solid ${props => props.bgColor};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.textColor};
    color: ${props => props.bgColor};
    border: 1px solid ${props => props.bgColor};
  }
`;

export default function Button({ text, bgColor, textColor, height, width, handleClicked }) {
  return (
    <StyledButton 
      bgColor={bgColor} 
      textColor={textColor} 
      height={height} 
      width={width} 
      onClick={handleClicked}
    >
      {text}
    </StyledButton>
  );
}
