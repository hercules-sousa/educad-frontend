import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import NavBar from "../../components/NavBar";
import GroupImage from "../../assets/Group-26.png";
import EditalImage from "../../assets/image-3.png";
import InternshipImage from "../../assets/monitoring-1.png";
import SoftwareImage from "../../assets/Rectangle-40.png";
import HardwareImage from "../../assets/Rectangle-41.png";
import ExatasImage from "../../assets/Rectangle-42.png";
import HumanasImage from "../../assets/Rectangle-50.png";
import {
  EditalContainer,
  EditalImageContainer,
  EditalImg,
  EditalText,
  GradientText,
  MyStudiesButton,
  NewsLink,
  NewsText,
  NewsTitle,
  SecondContainer,
  StyledButtonContainer,
  StyledContainer,
  StyledWelcome,
  StyledWelcomeContainer,
  StyledWelcomeSubtext,
  StyledWelcomeText,
  SubjectCategoriesList,
  SubjectCategoryA,
  SubjectCategoryContainer,
  SubjectCategoryImage,
  SubjectsContainer,
  ThirdContainer,
  VirtualClassesButton,
  WelcomeImage,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    "name": ""
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData)
      setUser(JSON.parse(userData));
  }, []);

  return (
    <>
      <StyledContainer>
        <NavBar />

        <StyledWelcomeContainer>
          <StyledWelcome>
            <StyledWelcomeText>
              Olá, {user.name}! Acesse suas turmas e organize seus estudos de forma
              eficiente
            </StyledWelcomeText>
            <StyledWelcomeSubtext>
              Design in the browser and delivered natively in your app. No dev
              resources or app update is requeired Rover drives mobile
              engagement and monetization with better mobile campaigns
            </StyledWelcomeSubtext>
            <StyledButtonContainer>
              <VirtualClassesButton
                type="button"
                onClick={() =>
                  navigate("/disciplinas")
                }
              >
                Minhas turmas virtuais
              </VirtualClassesButton>

              <MyStudiesButton
                type="button"
              >
                Meus estudos
              </MyStudiesButton>
            </StyledButtonContainer>
          </StyledWelcome>

          <WelcomeImage src={GroupImage} alt="" />
        </StyledWelcomeContainer>
      </StyledContainer>

      <SecondContainer>
        <SubjectsContainer>
          <GradientText>
            Disciplinas por área
          </GradientText>

          <SubjectCategoriesList>
            <SubjectCategoryContainer>
              <SubjectCategoryA>
                <SubjectCategoryImage src={SoftwareImage} alt="" />
                software
              </SubjectCategoryA>
            </SubjectCategoryContainer>

            <SubjectCategoryContainer>
              <SubjectCategoryA>
                <SubjectCategoryImage src={HardwareImage} alt="" />
                hardware
              </SubjectCategoryA>
            </SubjectCategoryContainer>

            <SubjectCategoryContainer>
              <SubjectCategoryA>
                <SubjectCategoryImage src={ExatasImage} alt="" />
                exatas
              </SubjectCategoryA>
            </SubjectCategoryContainer>

            <SubjectCategoryContainer>
              <SubjectCategoryA>
                <SubjectCategoryImage src={HumanasImage} alt="" />
                humanas
              </SubjectCategoryA>
            </SubjectCategoryContainer>
          </SubjectCategoriesList>
        </SubjectsContainer>

        <EditalContainer>
          <EditalText>
            <GradientText>Editais abertos</GradientText>
            <NewsTitle>
              Confira os editais abertos para alunos do curso de Engenharia de
              Computação
            </NewsTitle>

            <NewsText>
              With Rover, you can easily launch new, multi-screen, native mobile
              experiences. Design engaging content in the browser, and deploy
              instantly through your app at the right time and place.
            </NewsText>

            <NewsLink>
              Ver todos os editais -{">"}
            </NewsLink>
          </EditalText>

          <EditalImageContainer>
            <EditalImg src={EditalImage} alt="" />
          </EditalImageContainer>
        </EditalContainer>

        <EditalContainer>
          <EditalText>
            <GradientText>Oportunidades de estágios</GradientText>

            <NewsTitle>
              Veja os estágios disponíveis na área de Computação
            </NewsTitle>

            <NewsText>
              With Rover, you can easily launch new, multi-screen, native mobile
              experiences. Design engaging content in the browser, and deploy
              instantly through your app at the right time and place.
            </NewsText>

            <NewsLink>
              Ver todos os editais -{">"}
            </NewsLink>
          </EditalText>

          <EditalImageContainer>
            <EditalImg src={InternshipImage} alt="" />
          </EditalImageContainer>
        </EditalContainer>
      </SecondContainer>

      <ThirdContainer />
    </>
  );
};

export default Home;
