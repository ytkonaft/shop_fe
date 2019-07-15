import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 10px 15px
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#3e5" : "#eee")};
`;

export default Button;
