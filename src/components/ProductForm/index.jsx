import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Button from "components/Button";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-top: 10px;
`;

const CREATE_PRODUCT = gql`
  mutation CREATE_PRODUCT(
    $title: String!
    $description: String!
    $price: Float!
    $image: Upload!
  ) {
    createProduct(
      title: $title
      description: $description
      price: $price
      image: $image
    ) {
      id
    }
  }
`;

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  return errors;
};

const ProductForm = () => {
  const [requestStatus, setStatus] = useState({
    error: null,
    sucess: null
  });

  const handleSubmit = async (
    { title, description, price, image },
    { setSubmitting }
  ) => {
    try {
      console.log(image);
      const { data } = await client.mutate({
        mutation: CREATE_PRODUCT,
        variables: {
          title,
          description,
          price,
          image
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
    <div>
      <Formik
        initialValues={{ title: "", description: "", price: 0.0 }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          const handleUpload = e => {
            setFieldValue("image", e.currentTarget.files[0]);
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
    </div>
  );
};

export default withApollo(ProductForm);
