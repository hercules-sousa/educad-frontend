import styled from "styled-components";

export const StyledH2 = styled.h2`
  font-size: 24px;
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
  margin-bottom: 60px;
`;

export const SubjectPageContainer = styled.div`
  width: 1280px;
  margin: 60px auto 0 auto;
`;

export const SubjectListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SubjectContainer = styled.button`
  cursor: pointer;
  width: 570px;
  height: 210px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  box-shadow: 0px 3px 10px #888888;
  padding: 0 45px;
`;

export const SubjectImage = styled.img`
  margin-right: 45px;
`;

export const SubjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SubjectTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--corTexto);
  margin-bottom: 8px;
  text-align: left;
`;

export const SubjectInfo = styled.p`
  color: var(--corTexto);
  margin-bottom: 6px;
`;

export const SubjectButtonsContainer = styled.div`
  margin-top: 18px;
`;

export const SubjectButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 3px;
`;

export const CategoryButton = styled(SubjectButton)`
  color: white;
  background-color: var(--corBotaoSoftware);
`;

export const SemesterButton = styled(SubjectButton)`
  background-color: var(--corBotaoPeriodo);
  color: white;
  margin-right: 10px;
`;
