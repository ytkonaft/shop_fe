import { useState, useEffect, memo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "components/Button";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-top: 10px;
`;

const RemoveBtn = styled.button`
  width: ${({ theme }) => theme.ms(5)};
  height: ${({ theme }) => theme.ms(5)};
  padding: 0;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  transform: translateX(25%) translateY(-25%);
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledThumb = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ThumbWrp = styled.div`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 150px;
  height: 150px;
  text-align: center;
  position: relative;
`;

const CREATE_PRODUCT = gql`
  mutation CREATE_PRODUCT(
    $title: String!
    $description: String!
    $price: Float!
    $image: Upload
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


// TODO: IMAGE type upload or string
const UPDATE_PRODUCT = gql`
  mutation UPDATE_PRODUCT(
    $id: ID!
    $title: String!
    $description: String!
    $price: Float!
    $image: Upload
  ) {
    updateProduct(
      id: $id
      title: $title
      description: $description
      price: $price
      image: $image
    ) {
      id
    }
  }
`;

const ImageThumb = memo(({ image, removeImage }) => {
  const [thumb, setThumb] = useState(null);

  useEffect(() => {
    imageThumb(image);
  }, [image]);

  const imageThumb = value => {
    if (typeof value === "string" || value instanceof String) {
      return setThumb(value);
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumb(reader.result);
      };
      reader.readAsDataURL(value);
    }
  };
  return (
    <ThumbWrp>
      <StyledThumb src={thumb} />
      <RemoveBtn onClick={removeImage}>x</RemoveBtn>
    </ThumbWrp>
  );
});

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  return errors;
};

const ProductForm = ({ client, productData }) => {
  const [requestStatus, setStatus] = useState({
    error: null,
    sucess: null
  });

  const handleSubmit = async (
    { title, description, price, image },
    { setSubmitting }
  ) => {
    try {
      const params = {
        title,
        description,
        price,
        image
      }
      if (productData) {
        params.id = productData.id
      }

      const { data } = await client.mutate({
        mutation: params.id ? UPDATE_PRODUCT: CREATE_PRODUCT,
        variables: params
      });
      console.log(data)
      setStatus({
        ...requestStatus,
        sucess: 'true'
      });
      setSubmitting(false);

    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  const initialValues = {
    title: "",
    description: "",
    price: 0.0,
    image: null
  };

  return (
    <div>
      <Formik
        initialValues={productData || initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => {
          const handleUpload = e => {
            setFieldValue("image", e.currentTarget.files[0]);
          };
          const handleRemoveImage = () => {
            setFieldValue("image", null);
          };
          return (
            <Form>
              <StyledLabel>Picture</StyledLabel>
              {values.image ? (
                <ImageThumb
                  image={values.image}
                  removeImage={handleRemoveImage}
                />
              ) : (
                <input type="file" onChange={handleUpload} />
              )}
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
                <Button
                  btnType="default"
                  type="submit"
                  active={true}
                  disabled={isSubmitting}
                >
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
