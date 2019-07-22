import styled, {css} from "styled-components";

const defaultStyle = css`
  background: ${({theme})=> theme.colors.main};
  color: ${({theme})=> theme.colors.white};

  &:hover {
    background: ${({theme})=> theme.colors.hover.main};
  }
`

const secondaryStyle = css`
  background: transparent;
  color: ${({theme})=> theme.colors.main};
  border: 2px solid ${({theme})=> theme.colors.main};

  &:hover {
    background: ${({theme})=> theme.colors.main};
    color: ${({theme})=> theme.colors.white};
  }
`

const dangerStyle = css`
  background: ${({theme})=> theme.colors.error};
  color: ${({theme})=> theme.colors.white};

  &:hover {
    background: ${({theme})=> theme.colors.hover.error};
  }
`

const successStyle = css`
  background: ${({theme})=> theme.colors.success};
  color: ${({theme})=> theme.colors.white};
`

const disabledStyle = css`
  background: ${({theme})=> theme.colors.success};
  color: ${({theme})=> theme.colors.white};
  opacity: 0.6;
  pointer-events: none;
`

const initialStyle = css`
  background: ${({theme})=> theme.colors.gray};
  color: ${({theme})=> theme.colors.dark};
`

const GetBackground = (btnType) => {
  switch (btnType) {
    case 'default':
      return defaultStyle
    case 'secondary':
        return secondaryStyle
    case 'danger':
        return dangerStyle
    case 'success':
        return successStyle
    case 'disabled':
        return disabledStyle
    default:
        return initialStyle
  }
}

const ButtonStyle = css`
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  font-size: ${({ theme: { ms } }) => ms(2)};
  line-height: ${({ theme: { ms } }) => ms(2)};
  transition: all 0.3s ease;
  margin: 0 ${({ theme: { ms } }) => ms(-7)};
  ${({btnType, theme}) => GetBackground(btnType, theme)};
`

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled.a`
  ${ButtonStyle}
`;

