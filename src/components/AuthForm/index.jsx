// import { useState, useEffect, memo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "components/styled/Button";
import styled from "styled-components";
import { CURRENT_USER } from "components/User";
import Icon from "components/Icon";

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
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    if (isSignUp) {
      signUp(values, setSubmitting)
    }else {
      signIn(values, setSubmitting)
    }

  };

  const signUp = async (formData, setSubmitting) => {
    try {
      const { data } = await client.mutate({
        mutation: SIGNUP,
        variables: formData,
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
  }

  const signIn = async (formData, setSubmitting) => {
    try {
      const { data } = await client.mutate({
        mutation: SIGNIN,
        variables: formData,
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
  }

  const SubmitText = isSignUp ? "Sign up" : "Sign in";
  const initValues = isSignUp ? initSignUpValues : initSignInValues

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
                  btnType="default"
                  type="submit"
                  active={true}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending
                      <Icon type="spinner" size={2} fill="#fff" />
                    </>
                  ) : (
                    SubmitText
                  )}
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
