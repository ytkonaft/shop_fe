import { Container } from "styles/grid";
import { H1 } from "components/styled/Text";
import ProductsGrid from "components/ProductsGrid";
import Pagination from "components/Pagination";

const CategoriesPage = () => {
  return (
    <Container>
      <H1>Categories page</H1>
      <Pagination pagination={false} />
      <ProductsGrid />
      <Pagination pageInfo={false} />
    </Container>
  );
};

export default CategoriesPage;
