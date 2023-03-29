import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  justify-content: center; /*Centraliza horizontalmente*/
  grid-template-columns: repeat(2, 1fr);
  align-content: center; /*Centraliza verticalmente*/
  height: 100vh;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 30%;
  flex-direction: column;
`

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
`

export const StyledWelcome = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #1b1d2a;
  margin-bottom: 30px;
`

export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #1b1d2a 0%, #211a30 100%);
  color: #fff;
  width: 100%;
`

export const StyledTitle = styled.h1`
  font-size: 7vw;
`

export const StyledSlogan = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin: 1px 32px 0 32px;
`