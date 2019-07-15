import Navigation from "components/navigation";
import { Container, Row, Col } from "styles/grid";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col col={{ sm: 24, md: 12 }}>
          <h1>Logo</h1>

          <button>Login</button>
          <button>Sign up</button>
        </Col>
        <Col col={{ sm: 24, md: 12, lg: 6 }}>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
