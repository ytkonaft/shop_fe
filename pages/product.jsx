import Router from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Container } from "styles/grid";

const SINGLE_PRODUCT = gql`
  query SINGLE_PRODUCT($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const ProductPage = ({ id }) => {
  return (
    <Container>
      <Query query={SINGLE_PRODUCT} variables={{ id }}>
        {({ loading, error, data: { product } }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <>
              <h1>Product {product.title}</h1>
              <img src={product.image} alt="" />
              <p>{product.description}</p>
              <strong>{product.price}</strong>
            </>
          );
        }}
      </Query>
    </Container>
  );
};

ProductPage.getInitialProps = async ({ query }) => {
  if (!query.id) {
    Router.push("/");
    return {};
  }
  return { id: query.id };
};

export default ProductPage;
