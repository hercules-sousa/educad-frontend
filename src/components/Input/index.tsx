import { StyledDiv, StyledImg, StyledInput } from "./styles";
import InputProps from "./types";

const Input: React.FC<InputProps> = ({ placeholder, icon, onChange, type }) => {
  return (
    <StyledDiv>
      {icon && <StyledImg src={icon} alt="Ícone" width={16} />}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        type={type ? type : "text"}
      />
    </StyledDiv>
  );
};

export default Input;
