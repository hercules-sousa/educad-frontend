import { StyledDiv, StyledImg, StyledInput } from "./styles";
import InputProps from "./types";

const Input: React.FC<InputProps> = ({ placeholder, icon }) => {
  return (
    <StyledDiv>
      {icon && <StyledImg src={icon} alt="Ícone" width={16} />}
      <StyledInput placeholder={placeholder} />
    </StyledDiv>
  );
};

export default Input;
