import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
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

  i {
    transition: transform 0.3s ease;
    transform: rotate(${({ isActive }) => (isActive ? -180 : 0)}deg);
  }
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
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    openDropMenu(!isOpen);
  };

  useOnClickOutside(dropdownRef, () => {
    if (!isOpen) {
      return;
    }

    openDropMenu(false);
  });

  return (
    <MenuWrp ref={dropdownRef}>
      <StyledButton onClick={toggleMenu} isActive={isOpen}>
        {me.name} <Icon type="arrow-down" size="md" />
      </StyledButton>
      <StyledAnimatedDropdown active={isOpen}>
        asdfasfdasfasfd
      </StyledAnimatedDropdown>
    </MenuWrp>
  );
};
export default UserMenu;
