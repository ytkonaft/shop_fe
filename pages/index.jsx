import styled from "styled-components";
import ProductsGrid from "components/ProductsGrid";
import Pagination from "components/Pagination";
import { Container } from "styles/grid";

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Home = () => {
  return (
    <StyledContainer gutterOff>
      <Pagination pagination={false}/>
      <ProductsGrid />
      <Pagination pageInfo={false}/>
    </StyledContainer>
  );
};

export default Home;
