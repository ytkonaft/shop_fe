import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import { Row, Col } from "styles/grid";
import {Button, ButtonLink} from "components/Button";
import {ALL_PRODUCTS} from "containers/Products"

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

const DELETE_PRODUCT = gql`
  mutation DELETE_PRODUCT(
    $id: ID!
  ) {
    deleteProduct(
      id: $id
    ) {
      id
    }
  }
`;


const ProductRow = ({ data }) => {
  const handleDelete = (deleteMethod) => {
    if(confirm('Are you sure?')){
      deleteMethod()
  }}

  const update = (cache, payload) => {
    const data = cache.readQuery({query: ALL_PRODUCTS})
    data.products = data.products.filter(product => product.id !== payload.data.deleteProduct.id)
    cache.writeQuery({query: ALL_PRODUCTS, data})
  }

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
        <Mutation mutation={DELETE_PRODUCT} variables={{id: data.id}} update={update}>
          {
            (deleteMethod) => {
              return (
                <Button btnType="danger" onClick={() => handleDelete(deleteMethod)}>X</Button>)
            }
          } 
        </Mutation>
         
        </div>
      </Col>
    </StyledProductRow>
  );
};

export default ProductRow 