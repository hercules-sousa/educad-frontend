import styled from 'styled-components';

interface StyledButtonProps {
  backgroundColor?: string;
  marginTop?: number;
  width?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${props => props.backgroundColor || "#1b1d2a"};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 54px;
  width: ${props => props.width || "auto"};
  margin-top: ${props => `${props.marginTop}px` || 0}
`

export const StyledP = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`