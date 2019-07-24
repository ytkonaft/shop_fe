import {Button} from "components/styled/Button";
import { Container } from "styles/grid";

const CartPage = () => {
  return (
    <Container>
      <Button>Main</Button>
      <Button active={true}>Main</Button>
    </Container>
  );
};

export default CartPage;
