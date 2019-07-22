import { Container } from "styles/grid";
import Products from "containers/Products";
import {Button} from "components/Button";
import ProductRow from "components/ProductRow";
import { AdminLayout } from "layouts";
 
const AddProduct = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Add product</h1>
        <Button btnType="secondary">Add product</Button>
      </div>
      <Container>
        <Products ProductItm={ProductRow} />
      </Container>
    </AdminLayout>
  );
};

export default AddProduct;
