import { css } from "styled-components";

export const commonStyles = css`
  display: block;
  margin: 0 10px;
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  color: ${({ theme }) => theme.colors.dark};
`;
