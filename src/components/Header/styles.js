import styled from "styled-components";
import posed from "react-pose";
import { Container, Row } from "styles/grid";

export const StyledHeader = styled.header`
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  height: 50px;
  overflow: visible;
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.top};
  left: 0;
  top: 0;
  width: 100%;
`;

export const HeaderInner = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const StyledRow = styled(Row)`
  height: 100%;
`;

export const LogoWrp = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: block;
  margin: 0 10px;
  font-size: ${({ theme: { ms } }) => ms(1.2)};
  text-transform: uppercase;
`;

export const StyledLogo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark};
  transform: skew(0, -10deg);
  margin: 0 25px 0 0;
  font-size: ${({ theme: { ms } }) => ms(6)};
  text-transform: uppercase;
  padding: 3px 0;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover.main};
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    background: inherit;
    width: 30%;
    height: 100%;
    top: 0;
    z-index: -2;
  }

  &::after {
    right: 0;
    transform: skew(0, 20deg) translateY(-11%);
  }

  &::before {
    left: 0;
    transform: skew(0, 20deg) translateY(11%);
  }
`;

const DROPDOWN_ANIMATION_TIME = 400;
export const PRE_ENTER_DROPDOWN_POSE = "pre-enter-dropdown-pose";
export const ENTER_DROPDOWN_POSE = "enter-dropdown-pose";
export const EXIT_DROPDOWN_POSE = "exit-dropdown-pose";

export const Dropdown = posed(styled.div`
  position: absolute;
  width: 100%;
  padding-top: 60px;
  top: 0;
  background: #fff;
  left: 0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  z-index: -1;
  height: 400px;
`)({
  [PRE_ENTER_DROPDOWN_POSE]: {
    y: "-100%",
    opacity: 1
  },
  [ENTER_DROPDOWN_POSE]: {
    y: 0,
    transition: {
      duration: DROPDOWN_ANIMATION_TIME
    }
  },
  [EXIT_DROPDOWN_POSE]: {
    y: "-100%",
    opacity: 0,
    transition: {
      opacity: {
        delay: 300,
        duration: 100
      },
      duration: DROPDOWN_ANIMATION_TIME
    }
  },
  transition: {
    duration: DROPDOWN_ANIMATION_TIME
  }
});
