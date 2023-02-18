import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import {
  BreadCrumbsContainer,
  StyledDisciplinaCardSection,
  StyledLink,
  StyledMain,
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
  console.log("Dados chegando da tela de disciplina", location);

  return (
    <div>
      <NavBar />
      <BreadCrumbsContainer>
        <BreadCrumbs data={breadCrumbsData} />
      </BreadCrumbsContainer>

      <StyledMain>
        <StyledDisciplinaCardSection></StyledDisciplinaCardSection>
      </StyledMain>
    </div>
  );
};

export default SubjectPage;
