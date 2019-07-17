import styled, { css } from "styled-components";

const CONTAINER_MAX_WIDTH = "1360px";
const GUTTER_WIDTH = "8px";

const getColWidth = (width = 24) => (width / 24) * 100;

export const Container = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ gutterOff }) => (gutterOff ? "0" : GUTTER_WIDTH)};
  max-width: ${({ fuild }) => (fuild ? "100%" : CONTAINER_MAX_WIDTH)};
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -${GUTTER_WIDTH};
  flex-wrap: wrap;
`;

const getColCss = ({ lg, md, sm }) => {
  const smW = getColWidth(sm);
  const mdW = md ? getColWidth(md) : smW;
  const lgW = lg ? getColWidth(lg) : mdW;

  return css`
    flex: 0 0 ${lgW}%;
    max-width: ${lgW}%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      flex: 0 0 ${mdW}%;
      max-width: ${mdW}%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding: 0;
      flex: 0 0 ${smW}%;
      max-width: ${smW}%;
    }
  `;
};

export const Col = styled.div`
  display: flex;
  padding: 0 ${GUTTER_WIDTH};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  ${({ col }) => getColCss(col)};
`;
