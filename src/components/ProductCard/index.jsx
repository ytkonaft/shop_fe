import styled from "styled-components";
import Link from "next/link";
import { Button } from "components/styled/Button";
import { H3 } from "components/styled/Text";

const StyledProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 18px;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({theme}) => theme.boxShadow};
`;

const ProductImageWrp = styled.a`
  width: 100%;
  height: 150px;
  display: block;
  text-align: center;
  cursor: pointer;
`;

const ProductDesc = styled.p`
  font-size: ${({theme: {ms}}) => ms(1.4)};
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductCardInfo = styled.div`
  padding: ${({theme: {ms}}) => `${ms(0)}`};
`

const ProductCard = ({ data }) => {
  if (!data) return null;
  const {
    title,
    description,
    price,
    id
  } = data;
  return (
    <StyledProduct>
      <Link
        href={{
          pathname: "/product",
          query: { id: id }
        }}
      >
        <ProductImageWrp>
          <ProductImage
            src={data.image || "https://via.placeholder.com/150"}
            alt=""
          />
        </ProductImageWrp>
      </Link>
      <ProductCardInfo>
        <H3>
          <Link
            href={{
              pathname: "/product",
              query: { id: id }
            }}
          >
            <a>{title}</a>
          </Link>
        </H3>
        <ProductDesc>{description}</ProductDesc>
        <b>{price}</b>
        <div>
          <Button btnType="default">like</Button>{" "}
          <Button btnType="success">Add</Button>
        </div>
      </ProductCardInfo>
    </StyledProduct>
  );
};

export default ProductCard;
