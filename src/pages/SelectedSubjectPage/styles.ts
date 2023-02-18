import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const DataContainer = styled.div`
  display: flex;
  background-color: var(--corTexto);
  width: 880px;
  border-radius: 20px;
  height: 330px;
`;

export const SubjectImage = styled.img`
  border-radius: 20px 0 0 20px;
  width: 300px;
`;

export const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

export const StyledP = styled.p`
  display: inline;
  color: white;
  font-size: 18px;
  margin-bottom: 2px;
`;

export const LineDiv = styled.div`
  margin-bottom: 12px;
`;

export const SubjectOptionsContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`;

export const SubjectOptionButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 75px;
  margin: 0 10px;
  background-color: #949494;
  border-radius: 20px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 22px;
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
  width: 880px;
  margin: auto;
`;

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px 0px 110px 0px;
`;

export const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 850px;
`;

export const SectionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px #888;
  width: 210px;
  height: 180px;
  background-color: #4c436f;
  border-radius: 20px;
  font-weight: 500;
  color: white;
`;

export const StudentBlock = styled.div`
  margin-bottom: 35px;
  height: 395px;
  border-radius: 20px;
  display: flex;
  background-color: #949494;
  flex-direction: column;
`;

export const StudentImage = styled.img`
  border-radius: 20px;
`;

export const StudentName = styled.p`
  padding: 12px 0px;
  width: 250px;
  text-align: center;
  color: white;
  letter-spacing: 0.8px;
  font-size: 14px;
`;

export const StyledContainer = styled.div`
  padding-right: 400px;
  padding-left: 400px;
`;

export const StyledBreadCrumbsContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: var(--corEducad);
  font-size: 20px;

  :hover {
    color: var(--corBotaoPeriodo);
  }
`;

export const StyledMain = styled.main`
  background-color: gray;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const StyledDisciplinaCardSection = styled.section`
  background-color: lightgray;
  width: 100%;
  height: 336px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

export const StyledDisciplinaCardImg = styled.img`
  border-radius: 20px 0 0 20px;
  width: 330px;
`;
