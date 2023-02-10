import { StyledDiv, StyledEyeButton, StyledImg, StyledInput } from "./styles";
import InputProps, { EyeButtonProps } from "./types";
import EyeOff from "../../assets/icons/eye-off.svg";
import EyeOn from "../../assets/icons/eye-on.svg";
import { useState } from "react";

const EyeButton: React.FC<EyeButtonProps> = ({ on, onClick }) => {
  return (
    <StyledEyeButton onClick={onClick} right={24}>
      <StyledImg
        src={on ? EyeOn : EyeOff}
        alt="Olho Habilitado ou Desabilidado"
        width={16}
      />
    </StyledEyeButton>
  );
};

const Input: React.FC<InputProps> = ({
  placeholder,
  leftIcon,
  rightIcon,
  onChange,
  type,
}) => {
  const [inputType, setInputType] = useState<string>(type || "text");

  return (
    <StyledDiv>
      {leftIcon && (
        <StyledImg src={leftIcon} alt="Ícone" width={16} left={24} />
      )}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        type={inputType}
      />
      {rightIcon && <EyeButton onClick={() => alert("Clicando")} />}
    </StyledDiv>
  );
};

export default Input;
