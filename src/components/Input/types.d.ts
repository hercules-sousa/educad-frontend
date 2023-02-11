import { CSSProperties } from "styled-components";

export default interface InputProps {
  additionalStyle?: CSSProperties;
  placeholder?: string;
  leftIcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  rightIcon?: ReactNode;
}

interface EyeButtonProps {
  onClick: (e: SyntheticEvent) => void;
}