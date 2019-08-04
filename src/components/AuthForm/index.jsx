// import { useState, useEffect, memo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "components/styled/Button";
import styled from "styled-components";
import { CURRENT_USER } from "components/User";

const SIGNUP = gql`
  mutation SIGNUP($email: String!, $password: String!, $name: String) {
    signUp(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 10px;
`;

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

const initialSignUpValues = {
  name: "",
  email: "",
  password: ""
};

const AuthForm = ({ client, isSignUp }) => {
  console.log(client);
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const { data } = await client.mutate({
        mutation: isSignUp ? SIGNUP : SIGNIN,
        variables: values,
        refetchQueries: [
          {
            query: CURRENT_USER
          }
        ]
      });

      console.log(data);
      setSubmitting(false);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialSignUpValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div>
                <StyledLabel>Name</StyledLabel>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <StyledLabel>Email</StyledLabel>
                <Field type="text" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <StyledLabel>Password</StyledLabel>
                <Field type="text" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <Button
                  btnType="default"
                  type="submit"
                  active={true}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Sign up"}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withApollo(AuthForm);
