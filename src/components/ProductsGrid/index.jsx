import { Container, Row, Col } from "styles/grid";
import ProductCard from "components/ProductCard";
import Products from "containers/Products";

const ProductItm = ({ data }) => (
  <Col col={{ md: 6 }}>
    <ProductCard data={data} />
  </Col>
);

const ProductsGrid = () => {
  return (
    <Container fuild>
      <Row>
        <Products ProductItm={ProductItm} />
      </Row>
    </Container>
  );
};

export default ProductsGrid;
