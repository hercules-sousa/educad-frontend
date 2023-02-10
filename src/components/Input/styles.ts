import styled from 'styled-components';

interface StyledInputProps {
  marginBottom?: number;
}

export const StyledInput = styled.input<StyledInputProps>`
  border-radius: 8px;
  outline: none;
  width: 100%;
  height: 100%;
  border: 1.5px solid #2e81ff;
  padding-left: 56px;
  padding-right: 56px;
  font-weight: 400;
  font-size: 16px;
  color: #9a9a9a;
  transition: 0.3s;
  
  ::placeholder {
    opacity: 0.5;
  }

  :focus {
    border-color: #2e81ff;
    box-shadow: 0 0 8px 0 #2e81ff;
  }
`

export const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 495px;
  height: 54px;
`

interface StyledPositionProps {
  left?: number;
  right?: number;
}

export const StyledImg = styled.img<StyledPositionProps>`
  position: absolute;
  left: ${props => `${props.left}px` || 0};
  right: ${props => `${props.right}px` || 0};
`
export const StyledEyeButton = styled.button<StyledPositionProps>`
  position: absolute;
  right: ${props => `${props.right}px` || 0};
  left: ${props => `${props.left}px` || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  background-color: transparent;
`