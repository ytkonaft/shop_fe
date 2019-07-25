import styled from "styled-components";
import { Container, Row, Col } from "styles/grid";
import {H1} from "components/styled/Text"

const StyledImg = styled.img`
  max-width: 100%;
`;

 const ProductView = ({data}) => {
    return (
        <Container>
        <H1>{data.title}</H1>
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