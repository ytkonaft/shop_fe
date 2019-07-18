import { withApollo } from "react-apollo";
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

const ProductsContainer = C => {
  const ProductsComponent = (...props) => <C {...props} />;
  ProductsComponent.getInitialProps = async ctx => {
    const response = await ctx.apolloClient.query({ query: ALL_PRODUCTS });

    console.log(response);

    let componentProps = {};
    if (C.getInitialProps) {
      componentProps = await C.getInitialProps(ctx);
    }

    return {
      products: response.data.products,
      ...componentProps
    };
  };

  return ProductsComponent;
};

export default ProductsContainer;
