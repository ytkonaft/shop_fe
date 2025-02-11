import Router from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Container } from "styles/grid";
import ProductForm from "components/ProductForm";
import GoBackBtn from "components/GoBackBtn";
import { AdminLayout } from "layouts";
import {H1} from "components/styled/Text"

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

const ProductAdminPage = ({ id }) => {
  return (
    <AdminLayout>
      <Container>
        <Query query={SINGLE_PRODUCT} variables={{ id }}>
          {({ loading, error, data: { product } }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <Container>
                <H1>
                  <GoBackBtn />
                  {product.title}
                </H1>
                <ProductForm productData={product} />
              </Container>
            );
          }}
        </Query>
      </Container>
    </AdminLayout>
  );
};

ProductAdminPage.getInitialProps = async ({ query }) => {
  if (!query.id) {
    Router.push("/");
    return {};
  }
  return { id: query.id };
};

export default ProductAdminPage;
