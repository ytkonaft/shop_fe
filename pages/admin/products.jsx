import styled from "styled-components";
import Link from "next/link";
// import ProductForm from "components/ProductForm";
import { Container, Row, Col } from "styles/grid";
import Products from "containers/Products";
import {Button, ButtonLink} from "components/Button";
import { AdminLayout } from "layouts";

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
        <div>
        <Link>
          <ButtonLink btnType="default">Edit</ButtonLink>
        </Link>
        <Button btnType="danger">X</Button>
        </div>
      </Col>
    </ProductRow>
  );
};
 
const AddProduct = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Add product</h1>
        <Button btnType="secondary">Add product</Button>
      </div>
      <Container>
        <Products ProductItm={ProductItm} />
      </Container>
    </AdminLayout>
  );
};

export default AddProduct;
