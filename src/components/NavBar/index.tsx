import { StyledImg, StyledLink, StyledNav, StyledSpan } from "./styles";
import NavBarProps from "./types";

const NavBar: React.FC<NavBarProps> = ({ additionalStyle }) => {
  return (
    <StyledNav>
      <StyledLink to="/home">
        <StyledSpan>Edu</StyledSpan>cad
      </StyledLink>

      <StyledImg
        alt="Foto perfil"
        src="https://source.unsplash.com/75x75/?teenage-man"
      />
    </StyledNav>
  );
};

export default NavBar;
