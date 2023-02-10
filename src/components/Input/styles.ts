import styled from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 8px;
  outline: none;
  width: 100%;
  height: 100%;
  border: 1.5px solid #2e81ff;
  padding-left: 56px;
  font-weight: 400;
  font-size: 16px;
  color: #6a6a6a;
  transition: 0.3s;
  
  ::placeholder {
    opacity: 0.7;
  }

  :focus {
    border-color: #2e81ff;
    box-shadow: 0 0 8px 0 #2e81ff;
  }
`

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 495px;
  height: 54px;
`

export const StyledImg = styled.img`
  position: absolute;
  text-align: center;
  margin-left: 24px;
`