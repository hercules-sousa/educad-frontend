import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 30px 300px;
`

export const StyledA = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: var(--corEducad);
  text-transform: capitalize;

  &:hover {
    color: var(--corBotaoPeriodo);
  }
`