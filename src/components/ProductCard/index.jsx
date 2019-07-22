import styled from "styled-components";
import Link from "next/link";
import { Button } from "components/Button";

const StyledProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: center;
  margin-bottom: 18px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const ProductImageWrp = styled.a`
  width: 100%;
  height: 150px;
  display: block;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductCard = ({ data }) => {
  if (!data) return null;
  const {
    title,
    // description,
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
      <h3>
        <Link
          href={{
            pathname: "/product",
            query: { id: id }
          }}
        >
          <a>{title}</a>
        </Link>
      </h3>
      {/* <p>{description}</p> */}
      <b>{price}</b>
      <div>
        <Button btnType="default">like</Button>{" "}
        <Button btnType="success">Add</Button>
      </div>
    </StyledProduct>
  );
};

export default ProductCard;
