import { Container, DataContainer, DataDiv, LineDiv, StyledP, StyledSpan } from "./styles";
import SubjectDataProps from "./types";

import SubjectImage from '../../assets/Imagem-dados-disciplina.png';

const SubjectData: React.FC<SubjectDataProps> = ({
  additionalStyle,
}) => {
  return (
    <Container>
      <DataContainer>
        <div>
          <img src={SubjectImage} alt="" />
        </div>

        <DataDiv>
          <div>
            <LineDiv>
                <StyledSpan>Disciplina: </StyledSpan><StyledP>Teste de Software</StyledP>
            </LineDiv>
            <LineDiv>
                <StyledSpan>Professor(a): </StyledSpan><StyledP>Mirna da Silva</StyledP>
            </LineDiv>
            <LineDiv>
                <StyledSpan>Contato: </StyledSpan><StyledP>mirna.silva@ifpb.edu.br</StyledP>
            </LineDiv>
            <LineDiv>
                <StyledSpan>Curso: </StyledSpan><StyledP>Engenharia da Computação</StyledP>
            </LineDiv>
          </div>
        </DataDiv>
      </DataContainer>
    </Container>
  );
};

export default SubjectData;