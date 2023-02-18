import { useState } from "react";
import { useLocation } from "react-router-dom";
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

const NavItemButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <StyledNavItemButton onClick={() => onClick()}>{title}</StyledNavItemButton>
  );
};

const SubjectPage = () => {
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
      pageName: "Software",
      path: "/home",
    },
    {
      pageName: "Teste de Software",
      path: "/home",
    },
  ];

  const location = useLocation();
  const disciplina = location?.state.disciplinaData;
  console.log("Dados chegando da tela de disciplina", location);

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
            <NavItemButton title="Materiais" onClick={() => alert("Clicked")} />
            <NavItemButton
              title="Atividades"
              onClick={() => alert("Clicked")}
            />
            <NavItemButton title="Turma" onClick={() => alert("Clicked")} />
          </StyledNavContainer>

          {itemsToShow === "materiais" && (
            <StyledRowContainer>
              <StyledRowTitle>Materiais</StyledRowTitle>
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
