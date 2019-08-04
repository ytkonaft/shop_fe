import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import { perPage } from "config";

export const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($skip: Int = 0, $first: Int = ${perPage}) {
    products(skip: $skip, first: $first, orderBy: price_DESC) {
      id
      title
      description
      price
      image
    }
  }
`;

const ProductsContainer = ({
  ProductItm,
  router: {
    query: { page = 1 }
  }
}) => {
  return (
    <Query
      query={ALL_PRODUCTS}
      variables={{
        skip: page * perPage - perPage
      }}
    >
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

export default withRouter(ProductsContainer);
