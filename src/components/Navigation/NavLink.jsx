import styled from "styled-components";
import Link from "next/link";
import { commonStyles } from "./styles";

const StyledLink = styled.a`
  ${commonStyles}
  cursor: pointer;
  text-transform: ${({textTransform}) => textTransform ? 'none' : 'uppercase'};
`;

const NavLink = ({link: {href, title}, notCapital = false}) => (
    <Link href={href}>
      <StyledLink textTransform={notCapital}>{title}</StyledLink>
    </Link>
  );

  export default NavLink 