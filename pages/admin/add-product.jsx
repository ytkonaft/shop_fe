import GoBackBtn from "components/GoBackBtn";
import ProductForm from "components/ProductForm";
import { AdminLayout } from "layouts";

const AddProduct = () => {
  return (
    <AdminLayout>
      <div>
        <GoBackBtn />
        <h1>Add new product</h1>
      </div>
      <div>
        <ProductForm />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
