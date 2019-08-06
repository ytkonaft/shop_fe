import styled from "styled-components";
import User from "components/User";
import UserMenu from "./UserMenu";
import NavLink from "./NavLink";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
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

const Navigation = () => {
  return (
    <StyledNav alignItems="center">
      {generalNav.map((lnk, indx) => <NavLink link={lnk} key={indx}/>)}
      <User>
        {({ me }) => (
          <>
            {!me && authLinks.map((lnk, indx) => <NavLink link={lnk} key={indx}/>)}
            {me && ( <UserMenu me={me} /> )}
          </>
        )}
      </User> 
    </StyledNav>
  );
};

export default Navigation;
