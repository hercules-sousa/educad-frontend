import { CSSProperties } from "styled-components";

export default interface ButtonProps {
    additionalStyle?: CSSProperties;
    onClick: (e: SyntheticEvent) => void;
    text: string;
}