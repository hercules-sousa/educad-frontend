import { StyledA, StyledDiv, StyledSpan } from "./styles";
import HistoryBarProps from "./types";

const HistoryBar: React.FC<HistoryBarProps> = ({
  additionalStyle,
}) => {
  return (
    <StyledDiv style={additionalStyle}>
      <StyledSpan><StyledA href="#">Home</StyledA></StyledSpan>
      <StyledSpan> &gt; </StyledSpan>
      <StyledSpan><StyledA href="#">Disciplinas</StyledA></StyledSpan>
      <StyledSpan> &gt; </StyledSpan>
      <StyledSpan><StyledA href="#">Software</StyledA></StyledSpan>
      <StyledSpan> &gt; </StyledSpan>
      <StyledSpan><StyledA href="#">Teste de Software</StyledA></StyledSpan>
    </StyledDiv>
  );
};

export default HistoryBar;