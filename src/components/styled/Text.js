import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${({theme}) => theme.ms(13)};
  margin: ${({theme}) => theme.ms(3)} 0;
`

export const H2 = styled.h2`
  font-size: ${({theme}) => theme.ms(9)};
  margin: ${({theme}) => theme.ms(2)} 0;
`

export const H3 = styled.h3`
  font-size: ${({theme}) => theme.ms(5)};
  margin: ${({theme}) => theme.ms(2)} 0;
` 

export const H4 = styled.h4`
  font-size: ${({theme}) => theme.ms(3)};
  margin: ${({theme}) => theme.ms(2)} 0;
` 

export const Text = styled.p`
  font-size: ${({theme}) => theme.ms(2.5)};
  line-height: 1.5;
  margin: ${({theme}) => theme.ms(2)} 0;
`