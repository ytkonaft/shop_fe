import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import { MainLayout } from "layouts";
import Header from "components/Header";
import ErrorBoundary from "components/ErrorBoundary";
import Title from "seo/Title";
import withData from "src/client";
import Theme from "styles/theme/";
import GlobalStyles from "styles/GlobalStyles";

class ShopApp extends App {
  render() {
    const { Component, apolloClient, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Title title={"azazazaz"} />
          <GlobalStyles />
          <ThemeProvider theme={Theme}>
            <ErrorBoundary>
              <MainLayout>
                <Header />
                <Component {...pageProps} />
              </MainLayout>
            </ErrorBoundary>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}
export default withData(ShopApp);
