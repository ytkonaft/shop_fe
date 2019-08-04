import { useState, useRef, useEffect } from "react";
import { PoseGroup } from "react-pose";
import Router, { withRouter } from "next/router";
import Link from "next/link";
import useOnClickOutside from "use-onclickoutside";
import NProgress from "nprogress";
import Navigation from "components/navigation";
import { Container, Col } from "styles/grid";
import {
  Dropdown,
  StyledHeader,
  HeaderInner,
  StyledContainer,
  StyledRow,
  LogoWrp,
  StyledBtn,
  StyledLogo,
  PRE_ENTER_DROPDOWN_POSE,
  ENTER_DROPDOWN_POSE,
  EXIT_DROPDOWN_POSE
} from "./styles";

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

const Header = ({ router }) => {
  const header = useRef();
  const [open, toggleMenu] = useState(false);

  useEffect(() => {
    toggleMenu(false);
  }, [router]);

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
            <Col col={{ sm: 24, md: 12, lg: 10 }}>
              <LogoWrp>
                <Link href="/">
                  <StyledLogo>Logo</StyledLogo>
                </Link>
                <StyledBtn onClick={handleOpen}>Catergories</StyledBtn>
              </LogoWrp>
            </Col>
            <Col col={{ md: 12, lg: 14 }}>
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
                expedita, veritatis consequuntur unde non eaque, dignissimos
                quis quas eum ut esse inventore, neque at quod iusto reiciendis
                ab! Doloremque, aut.
              </Container>
            </Dropdown>
          )}
        </PoseGroup>
      </HeaderInner>
    </StyledHeader>
  );
};

export default withRouter(Header);
