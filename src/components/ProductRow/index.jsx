import styled from "styled-components";
import Link from "next/link";
import { Row, Col } from "styles/grid";
import {Button, ButtonLink} from "components/Button";

const StyledProductRow = styled(Row)`
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

const ProductRow = ({ data }) => {
  return (
    <StyledProductRow>
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
        <Link
          href={{
            pathname: "/admin/product",
            query: { id: data.id }
          }}
        >
          <ButtonLink btnType="default">Edit</ButtonLink>
        </Link>
        <Button btnType="danger">X</Button>
        </div>
      </Col>
    </StyledProductRow>
  );
};

export default ProductRow