import Router from "next/router";
import { Query } from "react-apollo";
import qql from "graphql-tag";
import { Container } from "styles/grid";

const ALL_PRODUCTS = qql`
  query ALL_PRODUCTS {
    product(id: "${"asdasdasdasd"}") {
      id
      title
      description
      price
    }
  }
`;

const ProductPage = ({ props }) => {
  return (
    <Container>
      <h1>Product page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officia!
        Unde illum inventore vero laborum maiores, fuga sint optio tenetur
        cupiditate illo! Consequuntur corrupti maxime voluptatum nesciunt fuga
        facilis voluptatibus.
      </p>
    </Container>
  );
};

ProductPage.getInitialProps = async ({ query }) => {
  if (!query.id) {
    Router.push("/");
  }
  return {};
};

export default ProductPage;
