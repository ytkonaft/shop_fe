import Button from "components/Button";
import ProductsGrid from "components/ProductsGrid";

const Home = ({ props }) => {
  return (
    <div>
      <h1>Home page</h1>
      <Button>Main</Button>
      <Button active={true}>Main</Button>
      <ProductsGrid />
    </div>
  );
};

export default Home;
