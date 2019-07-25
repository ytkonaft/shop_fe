import GoBackBtn from "components/GoBackBtn";
import ProductForm from "components/ProductForm";
import { AdminLayout } from "layouts";
import {H1} from "components/styled/Text"

const AddProduct = () => {
  return (
    <AdminLayout>
      <div>
        <GoBackBtn />
        <H1>Add new product</H1>
      </div>
      <div>
        <ProductForm />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
