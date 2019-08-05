import { useState } from "react";
import styled from "styled-components";
import Dropdown from "components/Dropdown";
import Icon from "components/Icon";
import { commonStyles } from "./styles";

const MenuWrp = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledButton = styled.button`
  ${commonStyles}
  border: none;
  padding: none;
  background: transparent;
  text-transform: capitalize;
  cursor: pointer;
  margin-right: 0;
`;

const StyledAnimatedDropdown = styled(Dropdown)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  min-width: 200px;
`;

const UserMenu = ({ me }) => {
  const [isOpen, openDropMenu] = useState(false);

  const toggleMenu = () => {
    openDropMenu(!isOpen);
  };
  return (
    <MenuWrp>
      <StyledButton onClick={toggleMenu}>
        {me.name} <Icon type="arrow-down" size="lg" />
      </StyledButton>
      <StyledAnimatedDropdown active={isOpen}>
        asdfasfdasfasfd
      </StyledAnimatedDropdown>
    </MenuWrp>
  );
};
export default UserMenu;
