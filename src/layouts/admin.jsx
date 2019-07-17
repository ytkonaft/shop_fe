import styled from "styled-components";
import { Container, Row, Col } from "styles/grid";
import SidebarMenu from "components/SidebarMenu";

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

const adminMenu = [
  {
    href: "/admin",
    title: "Admin Profile"
  },
  {
    href: "/admin/products",
    title: "Products"
  },
  {
    href: "/admin/categories",
    title: "Categories"
  }
];

export const AdminLayout = ({ children }) => {
  return (
    <StyledAdminLayout>
      <Container>
        <Row>
          <Col col={{ sm: 24, md: 6 }}>
            <SidebarMenu pages={adminMenu} />
          </Col>
          <AdminPageContent col={{ sm: 24, md: 18 }}>
            {children}
          </AdminPageContent>
        </Row>
      </Container>
    </StyledAdminLayout>
  );
};
