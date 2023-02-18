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
    } else {
      disciplinas = [
        {
          name: "Algoritmos",
          assignedPeriod: 1,
          courseId: 0,
          period: "202201",
          codigo: 656598,
          teacher: {
            cpf: "12862305460",
            fullName: "Ianna Sodré",
            email: "ianna.sodre@ifpb.edu.br",
          },
          type: "Software",
        },
      ];
    }

    setDisciplinas(disciplinas);
  }, [institutionData, userData]);

  return (
    <>
      <NavBar />

      <SubjectPageContainer>
        <StyledH2>Disciplinas do semestre</StyledH2>

        <SubjectListContainer>
          {disciplinas?.map((disciplina: any) => {
            return (
              <SubjectContainer
                key={disciplina.codigo}
                onClick={() =>
                  navigate("/disciplina", {
                    state: {
                      disciplinaData: disciplina,
                    },
                  })
                }
              >
                <SubjectImage src={ChipImage} alt="" />

                <SubjectInfoContainer>
                  <SubjectTitle>{disciplina.name}</SubjectTitle>

                  <SubjectInfo>
                    Professor(a): {disciplina.teacher.fullName}
                  </SubjectInfo>

                  <SubjectInfo>
                    Código da disciplina: {disciplina.codigo}
                  </SubjectInfo>

                  <SubjectButtonsContainer>
                    <SemesterButton>
                      {disciplina.assignedPeriod}º Período
                    </SemesterButton>
                    <CategoryButton>{disciplina.type}</CategoryButton>
                  </SubjectButtonsContainer>
                </SubjectInfoContainer>
              </SubjectContainer>
            );
          })}
        </SubjectListContainer>
      </SubjectPageContainer>
    </>
  );
};

export default DisciplinasPage;
