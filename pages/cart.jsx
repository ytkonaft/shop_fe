import Button from "components/Button";
import { Container } from "styles/grid";

const CartPage = ({ props }) => {
  return (
    <Container>
      <Button>Main</Button>
      <Button active={true}>Main</Button>
    </Container>
  );
};

export default CartPage;
