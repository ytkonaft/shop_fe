import { createGlobalStyle } from "styled-components";

const LocalFonts = createGlobalStyle`
   @font-face {
       font-family: 'Roboto';
       src: url('/static/fonts/RobotoRegular.ttf') format('truetype'),
            url('/static/fonts/RobotoRegular.otf') format('opentype');
       font-display: block;
   } 
`;

const FontLoader = ({ googleFonts }) => {
  const googleFamilies = googleFonts
    .reduce((acc, font) => {
      const family = font.family.replace(/ +/g, "+");
      const weights = (font.weights || []).join(",");

      acc.push(family + (weights && `:${weights}`));
      return acc;
    }, [])
    .join("|");

  return (
    <>
      <link
        rel={"preload"}
        href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
        as={"style"}
      />
      <link
        rel={"stylesheet"}
        href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
      />

      <link
        rel="preload"
        href="/static/fonts/RobotoRegular.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/RobotoRegular.otf"
        as="font"
        crossOrigin="anonymous"
      />
      <LocalFonts />
    </>
  );
};

export default FontLoader;
