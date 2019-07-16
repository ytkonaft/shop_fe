import { Query } from "react-apollo";
import qql from "graphql-tag";
import { Container, Row, Col } from "styles/grid";
import Product from "components/Product";

const ALL_PRODUCTS = qql`
  query ALL_PRODUCTS {
    products {
      id
      title
      description
      price
    }
  }
`;

const ProductsGrid = ({ productsInRow = 6 }) => {
  return (
    <Container fuild>
      <Row>
        <Query query={ALL_PRODUCTS}>
          {({ data, error, loading }) => {
            if (error) return error.message;
            if (loading) return "Loading...";

            return data.products.map(product => (
              <Col col={{ md: productsInRow }} key={product.id}>
                <Product data={product} />
              </Col>
            ));
          }}
        </Query>
      </Row>
    </Container>
  );
};

export default ProductsGrid;
