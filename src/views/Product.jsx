import { Container, Row, Col } from "styles/grid";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 100%;
`;

 const ProductView = ({data}) => {
    return (
        <Container>
        <h1>{data.title}</h1>
        <Row>
          <Col col={{ md: 6 }}>
            <StyledImg src={data.image} alt="" />
          </Col>
          <Col col={{ md: 18 }}>
            <p>{data.description}</p>
            <strong>{data.price}</strong>
          </Col>
        </Row>
      </Container>
    )
}

export default ProductView