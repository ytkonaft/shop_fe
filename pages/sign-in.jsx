import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "styles/grid";
import Card from "components/styled/Card";
import AuthForm from "components/AuthForm";

export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  padding: 40px 0;
`;

export const AuthWrp = styled(Card)`
  max-width: 1080px;
  margin: 0 auto;
`;

const SignUp = () => {
  return (
    <StyledContainer>
      <AuthWrp>
        <Row>
          <Col col={{ md: 12 }}>
            <h1>Sign In</h1>
          </Col>
          <Col col={{ md: 12 }}>
            <AuthForm />
            <Link href="/forgot-password">
              <a>Forgot the password?</a>
            </Link>
          </Col>
        </Row>
      </AuthWrp>
    </StyledContainer>
  );
};

export default SignUp;
