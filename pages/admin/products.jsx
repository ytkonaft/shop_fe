import { Container } from "styles/grid";
import Products from "containers/Products";
import { ButtonLink } from "components/styled/Button";
import ProductRow from "components/ProductRow";
import { AdminLayout } from "layouts";
import {H1} from "components/styled/Text"

const ProductsPage = () => {
  return (
    <AdminLayout>
      <div>
        <H1>Add product</H1>
        <ButtonLink href="/admin/add-product" btnType="secondary">
          Add product
        </ButtonLink>
      </div>
      <Container>
        <Products ProductItm={ProductRow} />
      </Container>
    </AdminLayout>
  );
};

export default ProductsPage;
