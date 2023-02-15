import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: var(--corEducad);
  display: flex;
  justify-content: space-between;
`

export const StyledImg = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 50px 75px 20px 0px;
`

export const StyledLink = styled(Link)`
  font-size: 40px;
  margin: 65px 0px 20px 65px;
  text-decoration: none;
  color: var(--corBranco);
  height: 48px;
`

export const StyledSpan = styled.span`
  font-weight: 700;
`