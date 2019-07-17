import { useState } from "react";
import Button from "components/Button";
import { AdminLayout } from "layouts";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const CREATE_PRODUCT = gql`
  mutation CREATE_PRODUCT(
    $title: String!
    $description: String!
    $price: Float!
  ) {
    createProduct(title: $title, description: $description, price: $price) {
      id
    }
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 10px;
`;

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  return errors;
};

const AddProduct = ({ client }) => {
  const [requestStatus, setStatus] = useState({
    error: null,
    sucess: null
  });

  const handleSubmit = async (
    { title, description, price },
    { setSubmitting }
  ) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_PRODUCT,
        variables: {
          title,
          description,
          price
        }
      });
      setStatus({
        ...requestStatus,
        sucess: data.createProduct.id
      });
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <h1>Add product</h1>
      <Formik
        initialValues={{ title: "", description: "", price: 0.0 }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          const handleUpload = e => {
            setFieldValue("avatar", e.currentTarget.files[0]);
          };
          return (
            <Form>
              <StyledLabel>Picture</StyledLabel>
              <input type="file" onChange={handleUpload} />
              <div>
                <StyledLabel>Title</StyledLabel>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
              </div>
              <div>
                <StyledLabel>Description</StyledLabel>
                <Field component="textarea" name="description" />
                <ErrorMessage name="description" component="div" />
              </div>
              <div>
                <StyledLabel>Price</StyledLabel>
                <Field type="number" name="price" step="0.01" />
                <ErrorMessage name="price" component="div" />
              </div>
              <div>
                <Button type="submit" active={true} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      {requestStatus.sucess && (
        <p>Product #{requestStatus.sucess} is created</p>
      )}
    </AdminLayout>
  );
};

export default withApollo(AddProduct);
