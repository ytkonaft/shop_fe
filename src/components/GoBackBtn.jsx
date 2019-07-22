import Router from "next/router";
import styled from "styled-components";

const StyledBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  margin-right: ${({ theme: { ms } }) => ms(3)};
  background: ${({ theme }) => theme.colors.gray};
`;

const GoBackBtn = () => {
  const handleBack = () => Router.back();
  return <StyledBtn onClick={handleBack}>Go Back</StyledBtn>;
};

export default GoBackBtn;
