export default interface InputProps {
  placeholder?: string;
  leftIcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  rightIcon?: ReactNode;
}

interface EyeButtonProps {
  on?: boolean;
  onClick: (e: SyntheticEvent) => void;
}