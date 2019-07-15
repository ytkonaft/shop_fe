import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "layouts";
import Header from "components/Header/";
import Title from "seo/Title";
import Theme from "styles/theme/";
import GlobalStyles from "styles/GlobalStyles";

class ShopApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Title title={"azazazaz"} />
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <MainLayout>
            <Header />
            <Component />
          </MainLayout>
        </ThemeProvider>
      </Container>
    );
  }
}
export default ShopApp;
