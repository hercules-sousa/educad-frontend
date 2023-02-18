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
        e.preventDefault();
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
  placeholder,
  leftIcon,
  rightIcon,
  onChange,
  type,
  marginTop,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyledDiv marginTop={marginTop}>
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
            setShowPassword(!showPassword);
          }}
        />
      )}
    </StyledDiv>
  );
};

export default Input;
