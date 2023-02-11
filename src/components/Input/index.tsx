import { StyledDiv, StyledEyeButton, StyledImg, StyledInput } from "./styles";
import InputProps, { EyeButtonProps } from "./types";
import EyeOff from "../../assets/icons/eye-off.svg";
import EyeOn from "../../assets/icons/eye-on.svg";
import { SyntheticEvent, useState } from "react";

const EyeButton: React.FC<EyeButtonProps> = ({ onClick }) => {
  const [on, setOn] = useState<boolean>(false);

  return (
    <StyledEyeButton
      onClick={(e: SyntheticEvent) => {
        setOn(!on);
        onClick(e);
      }}
      right={24}
    >
      <StyledImg
        src={on ? EyeOn : EyeOff}
        alt="Olho Habilitado ou Desabilidado"
        width={16}
      />
    </StyledEyeButton>
  );
};

const Input: React.FC<InputProps> = ({
  additionalStyle,
  placeholder,
  leftIcon,
  rightIcon,
  onChange,
  type,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [eyeOn, setEyeOn] = useState<boolean>(false);

  return (
    <StyledDiv style={additionalStyle}>
      {leftIcon && (
        <StyledImg src={leftIcon} alt="Ícone" width={16} left={24} />
      )}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        type={
          type === "password" ? (showPassword ? "text" : "password") : "text"
        }
      />
      {rightIcon && (
        <EyeButton
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            setEyeOn(!eyeOn);
            setShowPassword(!showPassword);
          }}
        />
      )}
    </StyledDiv>
  );
};

export default Input;
