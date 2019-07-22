import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#3e5" : "#eee")};
  font-size: ${({ theme: { ms } }) => ms(2)};
`;

export default Button;
