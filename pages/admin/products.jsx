import ProductsGrid from "components/ProductsGrid";
import ProductForm from "components/ProductForm";
import { AdminLayout } from "layouts";

const AddProduct = ({ client }) => {
  return (
    <AdminLayout>
      <h1>Add product</h1>
      <ProductForm />

      <ProductsGrid />
    </AdminLayout>
  );
};

export default AddProduct;
