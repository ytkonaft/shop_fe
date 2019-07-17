import styled from "styled-components";
import ProductsGrid from "components/ProductsGrid";
import { Container } from "styles/grid";

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Home = ({ props }) => {
  return (
    <StyledContainer gutterOff>
      <ProductsGrid />
    </StyledContainer>
  );
};

export default Home;
