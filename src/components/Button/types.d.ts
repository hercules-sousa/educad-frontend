export default interface ButtonProps {
    onClick: (e: SyntheticEvent) => void;
    text: string;
    marginTop?: number;
    backgroundColor?: string;
}