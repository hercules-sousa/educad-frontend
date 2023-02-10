import { StyledDiv, StyledImg, StyledInput } from "./styles";
import InputProps from "./types";

const Input: React.FC<InputProps> = ({ placeholder, icon, onChange }) => {
  return (
    <StyledDiv>
      {icon && <StyledImg src={icon} alt="Ícone" width={16} />}
      <StyledInput placeholder={placeholder} onChange={onChange} />
    </StyledDiv>
  );
};

export default Input;
