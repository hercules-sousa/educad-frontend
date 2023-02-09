import { StyledInput } from "./styles";
import InputProps from "./types";

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
