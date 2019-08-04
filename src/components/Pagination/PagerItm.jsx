import Link from "next/link";
import styled, { css } from "styled-components";

const CommonStyles = css`
  display: flex;
  width: ${({ theme: { ms } }) => ms(10)};
  height: ${({ theme: { ms } }) => ms(10)};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 ${({ theme: { ms } }) => ms(-2)};
`;

const StyledLink = styled.a`
  ${CommonStyles}
  background: ${({ theme: { colors }, active }) =>
    active ? colors.hover.main : "transparent"};
  color:  ${({ theme: { colors }, active }) =>
    active ? colors.white : colors.main};
  cursor: pointer;
  
  path {
    fill: ${({ theme: { colors }, active }) =>
      active ? colors.white : colors.main};
  }

  &:hover {
    background:  ${({ theme: { colors }, active }) =>
      active ? colors.hover.main : colors.gray};
  }

`;

const StyledSpan = styled.span`
  ${CommonStyles}
  color: ${({ theme }) => theme.colors.gray};
  cursor: default;
  
  path {
    fill:  ${({ theme }) => theme.colors.gray};
  }
`;

const StyledGap = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  cursor: default;
`;

const PagerItm = ({ pathName, page, text, active, disable }) => {
  if (!text) {
    return <StyledGap>...</StyledGap>;
  }

  if (disable) {
    return <StyledSpan>{text}</StyledSpan>;
  }
  return (
    <Link
      prefetch
      href={{
        pathname: pathName,
        query: {
          page: page
        }
      }}
    >
      <StyledLink active={active}>{text}</StyledLink>
    </Link>
  );
};

export default PagerItm;
