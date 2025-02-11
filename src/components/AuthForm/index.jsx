// import { useState, useEffect, memo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import Router from "next/router";
import gql from "graphql-tag";
import Button from "components/Button";
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
    signIn(email: $email, password: $password) {
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

const initSignUpValues = {
  name: "",
  email: "",
  password: ""
};

const initSignInValues = {
  email: "",
  password: ""
};

const AuthForm = ({ client, isSignUp }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await client.mutate({
        mutation: isSignUp ? SIGNUP : SIGNIN,
        variables: values,
        refetchQueries: [
          {
            query: CURRENT_USER
          }
        ]
      });

      setSubmitting(false);
      Router.push(`/`);
    } catch (err) {
      console.log(err);
      setSubmitting(false);
    }
  };

  const SubmitText = isSignUp ? "Sign up" : "Sign in";
  const initValues = isSignUp ? initSignUpValues : initSignInValues;

  return (
    <div>
      <Formik
        initialValues={initValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              {isSignUp && (
                <div>
                  <StyledLabel>Name</StyledLabel>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
              )}
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
                  type="submit"
                  btnType="default"
                  isActive={true}
                  isDisabled={isSubmitting}
                  isLoading={isSubmitting}
                  text={SubmitText}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withApollo(AuthForm);
