import styled from "styled-components";
import Link from "next/link";

const StyledProduct = styled.div`
  border: 1px solid #333;
`;

const Product = ({ data }) => {
  if (!data) return null;
  const { title, description, price, id } = data;
  return (
    <StyledProduct>
      <img src="https://via.placeholder.com/150" alt="" />
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
      <p>{description}</p>
      <b>{price}</b>
    </StyledProduct>
  );
};

export default Product;
