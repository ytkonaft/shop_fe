import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
// import Router from "next/router";
import gql from "graphql-tag";
import { Container, Row, Col } from "styles/grid";
import Card from "components/styled/Card";
import Button from "components/Button";

export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  padding: 40px 0;
`;

export const AuthWrp = styled(Card)`
  max-width: 1080px;
  margin: 0 auto;
`;

const REQUEST_PASSWORD_RESET = gql`
  mutation REQUEST_PASSWORD_RESET($email: String!) {
    requestPasswordReset(email: $email) {
      message
    }
  }
`;

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};
const initValues = {
  email: ""
};

const ForgotPassword = ({ client }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const { data } = await client.mutate({
        mutation: REQUEST_PASSWORD_RESET,
        variables: values
      });
      console.log(data.requestPasswordReset.message);
      setSubmitting(false);
      //   Router.push(`/`);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <AuthWrp>
        <Row>
          <Col col={{ md: 12 }}>
            <h1>Forgot password</h1>
          </Col>
          <Col col={{ md: 12 }}>
            <Formik
              initialValues={initValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <div>
                      <Field type="text" name="email" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <Button
                      type="submit"
                      btnType="default"
                      isActive={true}
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                      text="Reset password"
                    />
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </AuthWrp>
    </StyledContainer>
  );
};

export default withApollo(ForgotPassword);
