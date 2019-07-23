import { Container } from "styles/grid";
import Products from "containers/Products";
import { ButtonLink } from "components/Button";
import ProductRow from "components/ProductRow";
import { AdminLayout } from "layouts";

const ProductsPage = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Add product</h1>
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
