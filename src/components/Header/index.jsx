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

const RedCol = styled(Col)`
  background: red;
`;
const GreenCol = styled(Col)`
  background: green;
`;

const Header = () => {
  return (
    <Container>
      <Row>
        <RedCol col={{ sm: 24, md: 12, lg: 6 }}>
          <h1>Logo</h1>

          <button>Login</button>
          <button>Sign up</button>
        </RedCol>
        <GreenCol col={{ md: 12, lg: 18 }}>
          <Navigation />
        </GreenCol>
      </Row>
    </Container>
  );
};

export default Header;
