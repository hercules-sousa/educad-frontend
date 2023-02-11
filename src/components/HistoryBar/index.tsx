import { StyledA, StyledDiv } from "./styles";
import HistoryBarProps from "./types";

const HistoryBar: React.FC<HistoryBarProps> = ({
  additionalStyle,
}) => {
  return (
    <StyledDiv style={additionalStyle}>
      <span><StyledA href="#">Home</StyledA></span>
      <span>&gt;</span>
      <span><StyledA href="#">Software</StyledA></span>
      <span>&gt;</span>
      <span><StyledA href="#">Disciplina</StyledA></span>
      <span>&gt;</span>
      <span><StyledA href="#">Teste de Software</StyledA></span>
      <span>&gt;</span>
      <span><StyledA href="#">Material</StyledA></span>
    </StyledDiv>
  );
};

export default HistoryBar;