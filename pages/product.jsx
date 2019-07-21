import Router from "next/router";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Container, Row, Col } from "styles/grid";

const StyledImg = styled.img`
  max-width: 100%;
`;

const SINGLE_PRODUCT = gql`
  query SINGLE_PRODUCT($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const ProductPage = ({ id }) => {
  return (
    <Container>
      <Query query={SINGLE_PRODUCT} variables={{ id }}>
        {({ loading, error, data: { product } }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <Container>
              <h1>{product.title}</h1>
              <Row>
                <Col col={{ md: 6 }}>
                  <StyledImg src={product.image} alt="" />
                </Col>
                <Col col={{ md: 18 }}>
                  <p>{product.description}</p>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Query>
    </Container>
  );
};

ProductPage.getInitialProps = async ({ query }) => {
  if (!query.id) {
    Router.push("/");
    return {};
  }
  return { id: query.id };
};

export default ProductPage;
