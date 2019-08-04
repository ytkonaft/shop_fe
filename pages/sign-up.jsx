import { Row, Col } from "styles/grid";
import AuthForm from "components/AuthForm";
import { StyledContainer, AuthWrp } from "./sign-in";

const SignUp = () => {
  return (
    <StyledContainer>
      <AuthWrp>
        <Row>
          <Col col={{ md: 12 }}>
            <h1>Sign up</h1>
          </Col>
          <Col col={{ md: 12 }}>
            <AuthForm isSignUp={true} />
          </Col>
        </Row>
      </AuthWrp>
    </StyledContainer>
  );
};

export default SignUp;
