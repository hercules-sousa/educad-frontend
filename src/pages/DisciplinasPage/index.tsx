import "./styles.css";

import NavBar from "../../components/NavBar";

import ChipImage from "../../assets/chip.png";

import {
  CategoryButton,
  SemesterButton,
  StyledH2,
  SubjectButtonsContainer,
  SubjectContainer,
  SubjectImage,
  SubjectInfo,
  SubjectInfoContainer,
  SubjectListContainer,
  SubjectPageContainer,
  SubjectTitle,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDisciplinasByUserId } from "../../services/api";

const DisciplinasPage = () => {
  const [disciplinas, setDisciplinas] = useState<any>();

  const navigate = useNavigate();
  const location = useLocation();

  const userData = location.state?.userData;
  const institutionData = location.state?.institutionData;

  console.log("Dados que estão chegando", userData, institutionData);

  useEffect(() => {
    let disciplinas = null;

    if (userData && institutionData) {
      disciplinas = getDisciplinasByUserId(
        userData.userId,
        institutionData.periodId
      );
    }

    setDisciplinas(disciplinas);
  });

  return (
    <>
      <NavBar />

      <SubjectPageContainer>
        <StyledH2>Disciplinas do semestre</StyledH2>

        <SubjectListContainer>
          <SubjectContainer onClick={() => navigate("/disciplina")}>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Gerência de Projetos</SubjectTitle>

              <SubjectInfo>Professor(a): Igor Barbosa da Costa</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Teste de Software</SubjectTitle>

              <SubjectInfo>Professor(a): Mirna da Silva</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Análise e Técnicas de Algoritmos</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Análise e Projeto de Sistemas</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Inteligência Artificial</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Padrões de Projetos</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Redes de Computadores</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Banco de Dados</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Teoria da Computação</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>

          <SubjectContainer>
            <SubjectImage src={ChipImage} alt="" />

            <SubjectInfoContainer>
              <SubjectTitle>Sistemas Operacionais</SubjectTitle>

              <SubjectInfo>Professor(a): Fulano de Tal</SubjectInfo>

              <SubjectInfo>Código da disciplina: XXXXX</SubjectInfo>

              <SubjectButtonsContainer>
                <SemesterButton>8º Período</SemesterButton>
                <CategoryButton>Software</CategoryButton>
              </SubjectButtonsContainer>
            </SubjectInfoContainer>
          </SubjectContainer>
        </SubjectListContainer>
      </SubjectPageContainer>
    </>
  );
};

export default DisciplinasPage;
