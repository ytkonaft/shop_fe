import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
// import Router from "next/router";
import gql from "graphql-tag";
import { Container, Row, Col } from "styles/grid";
import { CURRENT_USER } from "components/User";
import Card from "components/styled/Card";
import Button from "components/Button";

// TODO create one layout for auth forms
export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  padding: 40px 0;
`;

export const AuthWrp = styled(Card)`
  max-width: 1080px;
  margin: 0 auto;
`;

const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD(
    $password: String!
    $confirm: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirm: $confirm
      resetToken: $resetToken
    ) {
      email
      name
    }
  }
`;
// TODO move to utils
// const validate = values => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   }
//   return errors;
// };
const initValues = {
  password: "",
  confirm: ""
};

const ResetPassword = ({ client, token }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const { data } = await client.mutate({
        mutation: RESET_PASSWORD,
        variables: {
          ...values,
          resetToken: token
        },
        refetchQueries: [
          {
            query: CURRENT_USER
          }
        ]
      });
      console.log(data);
      setSubmitting(false);
      Router.push(`/`);
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
            <h1>Reset password</h1>
          </Col>
          <Col col={{ md: 12 }}>
            <Formik initialValues={initValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <div>
                      <Field
                        type="text"
                        name="password"
                        placeholder="password"
                      />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                      <Field type="text" name="confirm" placeholder="confirm" />
                      <ErrorMessage name="confirm" component="div" />
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

ResetPassword.getInitialProps = props => {
  if (!props.query.token) {
    // Router.push("/");
    return {};
  }
  return { token: props.query.token };
};

export default withApollo(ResetPassword);
