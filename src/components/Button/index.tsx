import { StyledButton, StyledP } from "./styles";
import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = ({ onClick, text, marginTop }) => {
  return (
    <StyledButton onClick={onClick} marginTop={marginTop}>
      <StyledP>{text}</StyledP>
    </StyledButton>
  );
};

export default Button;
