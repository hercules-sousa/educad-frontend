import styled from "styled-components"

export const StyledContainer = styled.div`
  background: linear-gradient(var(--corAzulEscuro), var(--corVioletaClaro));
  height: 777px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledWelcomeContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-around;
`

export const WelcomeImage = styled.img`
  height: 450px;
  width: 300px;
  margin-bottom: -1px;
`

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
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

export const VirtualClassesButton = styled.button`
  cursor: pointer;
  width: 202px;
  height: 55px;
  background-color: var(--corTurmasVirtuais);
  color: var(--corBranco);
  border-radius: 4px;
  font-weight: bold;
  border: none;
`

export const MyStudiesButton = styled.button`
  cursor: pointer;
  width: 143px;
  height: 55px;
  background-color: var(--corBranco);
  color: var(--corMeusEstudos);
  margin-left: 24px;
  border-radius: 4px;
  font-weight: bold;
  border: none;
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

export const SecondContainer = styled.div`
  height: 150vh;
`

export const SubjectsContainer = styled.div`
  margin-top: 68px;
`

export const GradientText = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    var(--corAzulMedio),
    var(--corAzulMarinho)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
`

export const SubjectCategoriesList = styled.div`
  display: flex;
  margin-left: 222px;
  margin-right: 192px;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const SubjectCategoryContainer = styled.div`
  margin-top: 25px;
  margin-right: 50px;
  margin-bottom: 25px;
  background-color: var(--corBranco);
  box-shadow: 0px 3px 10px #888888;
  border-radius: 8px;

  &&:hover {
    background-color: var(--corTurmasVirtuais);
  }
`

export const SubjectCategoryA = styled.a`
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--corVioletaClaro);
  font-weight: bold;
  /* border: 2px solid pink; */
  margin: 10px;
  width: 400px;
  display: flex;
  align-items: center;
  padding: 0px;

  &&:hover {
    color: white;
  }
`

export const SubjectCategoryImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

export const EditalContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-evenly;
`

export const EditalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 192px;
`

export const EditalImageContainer = styled.div`
  margin-right: 121px;
`

export const EditalImg = styled.img`
  width: 350px;
  height: 350px;
`

export const NewsTitle = styled.p`
  color: var(--corTituloNoticia);
  font-size: 40px;
  font-weight: bold;
  width: 581px;
  margin-top: 30px;
`

export const NewsText = styled.p`
  color: var(--corTextoNoticia);
  font-size: 18px;
  width: 597px;
  font-weight: lighter;
  margin-top: 28px;
  margin-bottom: 30px;
`

export const NewsLink = styled.a`
  color: var(--corLink);
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  text-align: end;
`

export const ThirdContainer = styled.div`
  height: 380px;
  background: linear-gradient(var(--corAzulEscuro), var(--corVioletaClaro));
`