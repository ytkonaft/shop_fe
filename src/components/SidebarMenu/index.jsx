import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledLink = styled.a`
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const SidebarMenu = ({ pages, router }) => {
  return (
    <StyledMenu>
      {pages.map((page, indx) => {
        const isActive = router.asPath === page.href;
        return (
          <StyledMenuItem key={indx}>
            <Link href={page.href}>
              <StyledLink active={isActive}>{page.title}</StyledLink>
            </Link>
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
};
export default withRouter(SidebarMenu);
