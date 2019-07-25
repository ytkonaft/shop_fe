import styled from "styled-components";
import Navigation from "components/navigation";
import { Container, Row, Col } from "styles/grid";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, parent: '#np-progress' });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  height: 50px;
  overflow: visible;
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark};
  transform: skew(0, -10deg) translateY(30%);
  margin: 0;
  font-size: ${({ theme: { ms } }) => ms(6)};
  text-transform: uppercase;
  padding: 3px 0;
  z-index: 5;

  &::after,
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.dark};
    width: 30%;
    height: 100%;
    top: 0;
    z-index: -2;
  }

  &::after {
    right: 0;
    transform: skew(0, 20deg) translateY(-11%);
  }

  &::before {
    left: 0;
    transform: skew(0, 20deg) translateY(11%);
  }
`;

const Header = () => {
  return (
    <StyledHeader id="np-progress">
      <StyledContainer>
        <StyledRow>
          <Col col={{ sm: 24, md: 12, lg: 6 }}>
            <StyledLogo>Logo</StyledLogo>
          </Col>
          <Col col={{ md: 12, lg: 18 }}>
            <Navigation />
            <button>azazaz</button>
          </Col>
        </StyledRow>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
