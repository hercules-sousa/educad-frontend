import { StyledButton, StyledP } from "./styles";
import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = ({
  additionalStyle,
  onClick,
  text,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      style={additionalStyle}
    >
      <StyledP>{text}</StyledP>
    </StyledButton>
  );
};

export default Button;