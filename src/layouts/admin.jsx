import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "styles/grid";

const StyledAdminLayout = styled.div`
  background: ${({ theme }) => theme.colors.porcelain};
  max-width: 100%;
  padding: 40px 0;
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  bacground: red;
`;

const AdminPageContent = styled(Col)`
  flex-direction: column;
`;

export const AdminLayout = ({ children }) => {
  return (
    <StyledAdminLayout>
      <Container>
        <Row>
          <Col col={{ sm: 24, md: 6 }}>
            <ul>
              <li>
                <Link href="/admin">
                  <a>Admin Profile</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/categories">
                  <a>Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/add-category">
                  <a>Add category</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/add-product">
                  <a>Add product</a>
                </Link>
              </li>
            </ul>
          </Col>
          <AdminPageContent col={{ sm: 24, md: 18 }}>
            {children}
          </AdminPageContent>
        </Row>
      </Container>
    </StyledAdminLayout>
  );
};
