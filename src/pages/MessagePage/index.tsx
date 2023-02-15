import NavBar from "../../components/NavBar";
import HistoryBar from "../../components/HistoryBar";

import TeacherDataProps from "./types";

import {
  Container,
  DataContainer,
  DataDiv,
  FlexDiv,
  LineDiv,
  MessageDiv,
  MessageInput,
  MessageInputsContainer,
  NameSubjectDiv,
  NameSubjectInput,
  SendMessageButton,
  SendMessageTitleDiv,
  SendMessageTitleH2,
  StudentImage,
  StyledP,
  StyledSpan
} from "./styles";

const TeacherData: React.FC<TeacherDataProps> = ({
  additionalStyle,
}) => {
  return (
    <Container>
      <DataContainer>
        <StudentImage src="https://source.unsplash.com/300x220/?teenage-girl" alt="" />

        <DataDiv>
          <div>
            <LineDiv>
              <StyledSpan>Disciplina: </StyledSpan><StyledP>Teste de Software</StyledP>
            </LineDiv>
            <LineDiv>
              <StyledSpan>Aluno(a): </StyledSpan><StyledP>José Silva</StyledP>
            </LineDiv>
            <LineDiv>
              <StyledSpan>Curso: </StyledSpan><StyledP>Engenharia de Computação</StyledP>
            </LineDiv>
          </div>
        </DataDiv>
      </DataContainer>
    </Container>
  );
};

const MessagePage = () => {
  return (
    <>
      <NavBar />

      <HistoryBar />

      <TeacherData />

      <SendMessageTitleDiv>
        <SendMessageTitleH2>
          Falar com José
        </SendMessageTitleH2>
      </SendMessageTitleDiv>

      <MessageInputsContainer>
        <FlexDiv>
          <NameSubjectDiv>
            <NameSubjectInput placeholder="Nome" type="text" />
            <NameSubjectInput placeholder="Assunto" type="text" />
          </NameSubjectDiv>

          <MessageDiv>
            <MessageInput placeholder="Escreva aqui sua mensagem" />
            <SendMessageButton>Enviar</SendMessageButton>
          </MessageDiv>
        </FlexDiv>
      </MessageInputsContainer>
    </>
  );
};

export default MessagePage;