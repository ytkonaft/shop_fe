import styled from "styled-components";

const StyledMainLayout = styled.div`
  background: ${({ theme }) => theme.colors.background};
  max-width: 100%;
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  padding-top: 60px;
  min-height: 100vh;
  flex-direction: column;
`;

export const MainLayout = ({ children }) => {
  return <StyledMainLayout>{children}</StyledMainLayout>;
};
