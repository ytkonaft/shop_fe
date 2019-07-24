import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${({theme}) => theme.colors.dark};
  cursor: pointer;
  display: block;
  margin: 0 10px;
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  text-transform: uppercase;
`;

const Navigation = () => (
  <StyledNav alignItems="center">
    <Link href="/">
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/category">
      <StyledLink>categories</StyledLink>
    </Link>
    <Link href="/search">
      <StyledLink>search</StyledLink>
    </Link>
    <Link href="/profile">
      <StyledLink>profile</StyledLink>
    </Link>
    <Link href="/cart">
      <StyledLink>cart</StyledLink>
    </Link>
    <Link href="/admin">
      <StyledLink>admin</StyledLink>
    </Link>
  </StyledNav>
);

export default Navigation;
