import styled, { css, CSSProp } from "styled-components";

const CONTAINER_MAX_WIDTH = "1140px;";

export const Container = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
  max-width: ${({ fuild }) => (fuild ? "100%" : CONTAINER_MAX_WIDTH)};
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -8px;
  flex-wrap: wrap;
`;

// TODO: Split to function
export const Col = styled.div`
  display: flex;
  flex: 0 0 ${({ col }) => (col.lg / 24) * 100}%;
  max-width: ${({ col }) => (col.lg / 24) * 100}%;
  padding: 0 8px;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex: 0 0 ${({ col }) => (col.md / 24) * 100}%;
    max-width: ${({ col }) => (col.md / 24) * 100}%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0;
    flex: 0 0 ${({ col }) => (col.sm / 24) * 100}%;
    max-width: ${({ col }) => (col.sm / 24) * 100}%;
  }
`;
