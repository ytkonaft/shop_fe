import Link from "next/link";
import styled from "styled-components";
import User from "components/User";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: block;
  margin: 0 10px;
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  text-transform: uppercase;
`;

const generalNav = [
  {
    href: "/category",
    title: "Categories"
  },
  {
    href: "/search",
    title: "Search"
  },
  {
    href: "/profile",
    title: "Profile"
  },
  {
    href: "/cart",
    title: "Cart"
  }
];

const adminLink = {
  href: "/admin",
  title: "Admin"
};

const authLinks = [
  {
    href: "/sign-in",
    title: "Sign in"
  },
  {
    href: "/sign-up",
    title: "sign-up"
  }
];

const createLnk = lnk => {
  return (
    <Link href={lnk.href} key={lnk.title}>
      <StyledLink>{lnk.title}</StyledLink>
    </Link>
  );
};

const Navigation = () => (
  <StyledNav alignItems="center">
    {generalNav.map(createLnk)}
    <User>
      {({ me }) => (
        <>
          {!me && authLinks.map(createLnk)}
          {me && (
            <>
              {me.permissions.includes("ADMIN") && createLnk(adminLink)}
              {me.name}
            </>
          )}
        </>
      )}
    </User>
  </StyledNav>
);

export default Navigation;
