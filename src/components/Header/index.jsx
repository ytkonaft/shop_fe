import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Router, { withRouter }  from "next/router";
import useOnClickOutside from 'use-onclickoutside';
import NProgress from "nprogress";
import posed, { PoseGroup } from "react-pose";
import Navigation from "components/navigation";
import { Container, Row, Col } from "styles/grid";

NProgress.configure({ showSpinner: false, parent: "#np-progress" });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const StyledHeader = styled.header`
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  height: 50px;
  overflow: visible;
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.top};
  left: 0;
  top: 0;
  width: 100%;
`;

const HeaderInner = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark};
  transform: skew(0, -10deg) translateY(30%);
  margin: 0;
  font-size: ${({ theme: { ms } }) => ms(6)};
  text-transform: uppercase;
  padding: 3px 0;
  z-index: 5;

  &::after,
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.dark};
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
const PRE_ENTER_DROPDOWN_POSE = "pre-enter-dropdown-pose";
const ENTER_DROPDOWN_POSE = "enter-dropdown-pose";
const EXIT_DROPDOWN_POSE = "exit-dropdown-pose";

const Dropdown = posed(styled.div`
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

const StyledBtn = styled.button`
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

const Header = ({router}) => {
  const header = useRef()
  const [open, toggleMenu] = useState(false);

  useEffect(() => {
    toggleMenu(false);
    }, [router])

  const handleOpen = () => {
    toggleMenu(!open);
  };

  useOnClickOutside(header, () => {
    toggleMenu(false);
  });
  
  return (
    <StyledHeader id="np-progress" ref={header}>
      <HeaderInner>
        <StyledContainer>
          <StyledRow>
            <Col col={{ sm: 24, md: 12, lg: 4 }}>
              <StyledLogo>Logo</StyledLogo>
            </Col>
            <Col
              col={{ sm: 24, md: 12, lg: 4 }}
              alignItems="center"
              flexDirection="row"
            >
              <StyledBtn onClick={handleOpen}>Catergories</StyledBtn>
            </Col>
            <Col col={{ md: 12, lg: 16 }}>
              <Navigation />
            </Col>
          </StyledRow>
        </StyledContainer>

        <PoseGroup
          preEnterPose={PRE_ENTER_DROPDOWN_POSE}
          exitPose={EXIT_DROPDOWN_POSE}
          enterPose={ENTER_DROPDOWN_POSE}
        >
          {open && (
            <Dropdown key="submenu-dropdown">
              <Container>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                expedita, veritatis consequuntur unde non eaque, dignissimos quis
                quas eum ut esse inventore, neque at quod iusto reiciendis ab!
                Doloremque, aut.
              </Container>
            </Dropdown>
          )}
        </PoseGroup>
      </HeaderInner>
    </StyledHeader>
  );
};

export default withRouter(Header);
