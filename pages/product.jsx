import Router from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProductView from "views/Product"

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
      <Query query={SINGLE_PRODUCT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          if (!data.product) return `Product not found`;
          return (
            <ProductView data={data.product}/> 
          );
        }}
      </Query>
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
