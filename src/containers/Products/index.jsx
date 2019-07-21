import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS {
    products {
      id
      title
      description
      price
      image
    }
  }
`;

const ProductsContainer = ({ ProductItm }) => {
  return (
    <Query query={ALL_PRODUCTS}>
      {({ data, error, loading }) => {
        if (error) return error.message;
        if (loading) return "Loading...";
        return data.products.map((product, indx) => (
          <ProductItm key={indx} data={product} />
        ));
      }}
    </Query>
  );
};

export default ProductsContainer;
