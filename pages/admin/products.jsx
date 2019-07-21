import styled from "styled-components";
import ProductForm from "components/ProductForm";
import Products from "containers/Products";
import Button from "components/Button";
import { AdminLayout } from "layouts";
import { Container, Row, Col } from "styles/grid";

const ProductRow = styled(Row)`
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #333;
  &:last-child {
    border: none;
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledHead = styled.h3`
  display: block;
  width: 100%;
  margin: 0;
`;

const ProductItm = ({ data }) => {
  return (
    <ProductRow>
      <Col col={{ md: 3 }}>
        <StyledImg src={data.image} alt="" />
      </Col>
      <Col col={{ md: 8 }}>
        <StyledHead>{data.title}</StyledHead>
        <p>{data.description}</p>
        <strong>{data.price}</strong>
      </Col>
      <Col col={{ md: 6 }}>
        <Button type="default">Edit</Button>
        <Button type="danger">X</Button>
      </Col>
    </ProductRow>
  );
};

const AddProduct = ({ client }) => {
  return (
    <AdminLayout>
      <div>
        <h1>Add product</h1>
        <Button>add product</Button>
      </div>
      <Container>
        <Products ProductItm={ProductItm} />
      </Container>
    </AdminLayout>
  );
};

export default AddProduct;
