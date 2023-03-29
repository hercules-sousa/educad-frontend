import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import {
  StyledBreadCrumbsContainer,
  StyledContainer,
  StyledDisciplinaCardImg,
  StyledDisciplinaCardInfo,
  StyledDisciplinaCardLinesContainer,
  StyledDisciplinaCardSection,
  StyledRowContainer,
  StyledLink,
  StyledMain,
  StyledNavContainer,
  StyledNavItemButton,
  StyledRowTitle,
  StyledItemsContainer,
  StyledItemCard,
} from "./styles";

import { getSubjectById } from "../../services/api";

const BreadCrumbs = ({ data }: { data: Array<Record<string, string>> }) => {
  return (
    <div>
      {data.map((breadCrumbData, index) => {
        return (
          <StyledLink to={breadCrumbData.path}>
            {index < data.length - 1
              ? breadCrumbData.pageName + " > "
              : breadCrumbData.pageName}
          </StyledLink>
        );
      })}
    </div>
  );
};

const DisciplinaCard = ({
  disciplinaName,
  teacherName,
  teacherEmail,
  curso,
}: {
  disciplinaName: string;
  teacherName: string;
  teacherEmail: string;
  curso: string;
}) => {
  return (
    <StyledDisciplinaCardSection>
      <StyledDisciplinaCardImg src="https://source.unsplash.com/330x330/?programming-screen" />
      <StyledDisciplinaCardInfo>
        <StyledDisciplinaCardLinesContainer>
          <strong>Disciplina:</strong> {disciplinaName}
        </StyledDisciplinaCardLinesContainer>

        <StyledDisciplinaCardLinesContainer>
          <strong>Professor(a):</strong> {teacherName}
        </StyledDisciplinaCardLinesContainer>

        <StyledDisciplinaCardLinesContainer>
          <strong>Email do professor(a):</strong> {teacherEmail}
        </StyledDisciplinaCardLinesContainer>

        <StyledDisciplinaCardLinesContainer>
          <strong>Curso:</strong> {curso}
        </StyledDisciplinaCardLinesContainer>
      </StyledDisciplinaCardInfo>
    </StyledDisciplinaCardSection>
  );
};

const SubjectPage = () => {
  const { id } = useParams();

  const disciplina = getSubjectById(id!)!;

  const breadCrumbsData = [
    {
      pageName: "Home",
      path: "/home",
    },
    {
      pageName: "Disciplinas",
      path: "/disciplinas",
    },
    {
      pageName: disciplina.name,
      path: `/disciplina/${disciplina.codigo}`,
    },
  ];

  console.log("Dados chegando da tela de disciplina", disciplina);

  const [itemsToShow, setItemsToShow] = useState<string>("materiais");

  return (
    <div>
      <NavBar />

      <StyledContainer>
        <StyledBreadCrumbsContainer>
          <BreadCrumbs data={breadCrumbsData} />
        </StyledBreadCrumbsContainer>

        <StyledMain>
          <DisciplinaCard
            disciplinaName={disciplina.name}
            teacherName={disciplina.teacher.fullName}
            teacherEmail={disciplina.teacher.email}
            curso="Engenharia de Computação"
          />

          <StyledNavContainer>
            <StyledNavItemButton
              onClick={() => setItemsToShow('materiais')}
              style={itemsToShow === 'materiais' ? { backgroundColor: "#1B1D2A" } : {}}
            >
              Materiais
            </StyledNavItemButton>
            <StyledNavItemButton
              onClick={() => setItemsToShow('atividades')}
              style={itemsToShow === 'atividades' ? { backgroundColor: "#1B1D2A" } : {}}
            >
              Atividades
            </StyledNavItemButton>
            <StyledNavItemButton
              onClick={() => setItemsToShow('turma')}
              style={itemsToShow === 'turma' ? { backgroundColor: "#1B1D2A" } : {}}
            >
              Turmas
            </StyledNavItemButton>
          </StyledNavContainer>

          {itemsToShow === "materiais" && (
            <StyledRowContainer>
              <StyledRowTitle>MATERIAIS</StyledRowTitle>
              <StyledItemsContainer>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
              </StyledItemsContainer>
            </StyledRowContainer>
          )}

          {itemsToShow === "atividades" && (
            <StyledRowContainer>
              <StyledRowTitle>ATIVIDADES</StyledRowTitle>
              <StyledItemsContainer>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
              </StyledItemsContainer>
            </StyledRowContainer>
          )}

          {itemsToShow === "turma" && (
            <StyledRowContainer>
              <StyledRowTitle>TURMA</StyledRowTitle>
              <StyledItemsContainer>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
                <StyledItemCard></StyledItemCard>
              </StyledItemsContainer>
            </StyledRowContainer>
          )}
        </StyledMain>
      </StyledContainer>
    </div>
  );
};

export default SubjectPage;
