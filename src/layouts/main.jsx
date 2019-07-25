import styled from "styled-components";

const StyledMainLayout = styled.div`
  background: ${({ theme }) => theme.colors.background};
  max-width: 100%;
  display: flex;
  flex: 1 1 100%;
  padding-top: 60px;
  flex-direction: column;
`;

export const MainLayout = ({ children }) => {
  return <StyledMainLayout>{children}</StyledMainLayout>;
};
