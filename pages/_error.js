import { Container } from "styles/grid";

const ErrorPage = ({ statusCode }) => {
  return (
    <Container>
      <h2>{statusCode ? `An error ${statusCode} occurred on server` : 404}</h2>
    </Container>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
