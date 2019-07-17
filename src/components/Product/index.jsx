import styled from "styled-components";
import Link from "next/link";

const StyledProduct = styled.div`
  border: 1px solid #aaa;
  width: 100%;
  diplay: flex;
`;

const Product = ({ data }) => {
  if (!data) return null;
  const { title, description, price, id } = data;
  return (
    <StyledProduct>
      <Link
        href={{
          pathname: "/product",
          query: { id: id }
        }}
      >
        <a>
          <img src="https://via.placeholder.com/150" alt="" />
        </a>
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
      <p>{description}</p>
      <b>{price}</b>
    </StyledProduct>
  );
};

export default Product;
