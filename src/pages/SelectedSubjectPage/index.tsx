import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Collection,
  Container,
  DataContainer,
  DataDiv,
  LineDiv,
  SectionBlock,
  SectionGrid,
  SectionTitle,
  StudentBlock,
  StudentImage,
  StudentName,
  StyledP,
  StyledSpan,
  SubjectImage,
  SubjectOptionButton,
  SubjectOptionsContainer,
} from "./styles";

import NavBar from "../../components/NavBar";
import HistoryBar from "../../components/HistoryBar";
import SubjectDataProps from "./types";

const SubjectData: React.FC<SubjectDataProps> = ({ additionalStyle }) => {
  const [data, setData] = useState<any>(null);

  const location = useLocation();

  const disciplinaData = location.state?.disciplinaData;

  useEffect(() => {
    if (disciplinaData) {
      setData(disciplinaData);
      console.log("Dados que chegaram", data);
    }
  }, [data, disciplinaData]);

  return (
    <Container>
      <DataContainer>
        <SubjectImage
          src="https://source.unsplash.com/330x330/?programming-screen"
          alt=""
        />

        <DataDiv>
          <div>
            <LineDiv>
              <StyledSpan>Disciplina: </StyledSpan>
              <StyledP>{data.name}</StyledP>
            </LineDiv>
            <LineDiv>
              <StyledSpan>Professor(a): </StyledSpan>
              <StyledP>{data.teacher.fullName}</StyledP>
            </LineDiv>
            <LineDiv>
              <StyledSpan>Contato: </StyledSpan>
              <StyledP>{data.teacher.email}</StyledP>
            </LineDiv>
            <LineDiv>
              <StyledSpan>Curso: </StyledSpan>
              <StyledP>Engenharia da Computação</StyledP>
            </LineDiv>
          </div>
        </DataDiv>
      </DataContainer>
    </Container>
  );
};

const SelectedSubjectPage = () => {
  const OPTION_MATERIAIS = 1;
  const OPTION_ATIVIDADES = 2;
  const OPTION_TURMA = 3;

  const [selectedOption, setSelectedOption] = useState(OPTION_MATERIAIS);

  return (
    <>
      <NavBar />

      <HistoryBar />

      <SubjectData />

      <SubjectOptionsContainer>
        <SubjectOptionButton
          style={
            selectedOption === OPTION_MATERIAIS
              ? { backgroundColor: "#1B1D2A" }
              : {}
          }
          type="button"
          onClick={() => setSelectedOption(OPTION_MATERIAIS)}
        >
          Materiais
        </SubjectOptionButton>

        <SubjectOptionButton
          style={
            selectedOption === OPTION_ATIVIDADES
              ? { backgroundColor: "#1B1D2A" }
              : {}
          }
          type="button"
          onClick={() => setSelectedOption(OPTION_ATIVIDADES)}
        >
          Atividades
        </SubjectOptionButton>

        <SubjectOptionButton
          style={
            selectedOption === OPTION_TURMA
              ? { backgroundColor: "#1B1D2A" }
              : {}
          }
          type="button"
          onClick={() => setSelectedOption(OPTION_TURMA)}
        >
          Turma
        </SubjectOptionButton>
      </SubjectOptionsContainer>

      {selectedOption === OPTION_MATERIAIS ? (
        <>
          <SectionTitle>Vídeos</SectionTitle>

          <SectionGrid>
            <Collection>
              <SectionBlock>Vídeo 1</SectionBlock>
              <SectionBlock>Vídeo 2</SectionBlock>
              <SectionBlock>Vídeo 3</SectionBlock>
            </Collection>
          </SectionGrid>

          <SectionTitle>Slides</SectionTitle>

          <SectionGrid>
            <Collection>
              <SectionBlock>Slide 1</SectionBlock>
              <SectionBlock>Slide 2</SectionBlock>
              <SectionBlock>Slide 3</SectionBlock>
            </Collection>
          </SectionGrid>

          <SectionTitle>Materiais escritos</SectionTitle>

          <SectionGrid>
            <Collection>
              <SectionBlock>Material 1</SectionBlock>
              <SectionBlock>Material 2</SectionBlock>
              <SectionBlock>Material 3</SectionBlock>
            </Collection>
          </SectionGrid>
        </>
      ) : selectedOption === OPTION_ATIVIDADES ? (
        <>
          <SectionTitle>Atividades</SectionTitle>

          <SectionGrid>
            <Collection>
              <SectionBlock>Atividade 1</SectionBlock>
              <SectionBlock>Atividade 2</SectionBlock>
              <SectionBlock>Atividade 3</SectionBlock>
            </Collection>
          </SectionGrid>
        </>
      ) : (
        selectedOption === OPTION_TURMA && (
          <>
            <SectionTitle>Turma</SectionTitle>

            <SectionGrid>
              <Collection>
                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-boy"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>

                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-girl"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>

                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-woman"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>

                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-man"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>

                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-teenage-boy"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>

                <StudentBlock>
                  <StudentImage
                    src="https://source.unsplash.com/250x350/?profile-teenage-girl"
                    alt=""
                  />

                  <StudentName>Nome</StudentName>
                </StudentBlock>
              </Collection>
            </SectionGrid>
          </>
        )
      )}
    </>
  );
};

export default SelectedSubjectPage;
