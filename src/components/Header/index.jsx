import styled from "styled-components";
import Navigation from "components/navigation";
import { Container, Row, Col } from "styles/grid";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

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
  background: #333;
  height: 50px;
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledLogo = styled.h1`
  color: #333;
  background: #fff;
  transform: skew(0, 15deg) translateY(40%);
  margin: 0;
  font-size: ${({ theme: { ms } }) => ms(6)};
  text-transform: uppercase;
  padding: 3px 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledRow>
          <Col col={{ sm: 24, md: 12, lg: 6 }}>
            <StyledLogo>Logo</StyledLogo>
          </Col>
          <Col col={{ md: 12, lg: 18 }}>
            <Navigation />
          </Col>
        </StyledRow>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
