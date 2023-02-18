import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { BreadCrumbsContainer, StyledLink } from "./styles";

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

  return (
    <div>
      <NavBar />
      <BreadCrumbsContainer>
        <BreadCrumbs data={breadCrumbsData} />
      </BreadCrumbsContainer>
    </div>
  );
};

export default SubjectPage;
