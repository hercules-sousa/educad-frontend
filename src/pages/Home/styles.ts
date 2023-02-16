import styled from "styled-components"

export const StyledContainer = styled.div`
  background: linear-gradient(var(--corAzulEscuro), var(--corVioletaClaro));
  height: 777px;
  display: flex;
  flex-direction: column;
`

export const StyledWelcomeContainer = styled.div`
  display: flex;
`

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 701px;
  margin-left: 150px;
  margin-top: 112px;
  height: 370px;
`

export const StyledWelcomeText = styled.h1`
  background-image: linear-gradient(
    to right,
    var(--corBranco),
    #b8bafc,
    #d4d6ff,
    var(--corAzulClaro)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;

  font-weight: bold;
  font-size: 48px;
  /* border: 1px solid red; */
  width: 652px;
  /* color: linear-gradient(0deg, var(--corBranco), var(--corAzulClaro)); */
`

export const StyledWelcomeSubtext = styled.p`
  font-size: 16px;
  /* border: 1px solid pink; */
  width: 730px;
  margin-top: 35px;
  color: var(--corBranco);
`

export const StyledButtonContainer = styled.div`
  /* border: 2px solid firebrick; */
  display: flex;
  justify-content: end;
  margin-top: 61px;
`