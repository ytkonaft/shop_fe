import { Container } from "styles/grid";

const ErrorPage = ({ statusCode }) => {
  return (
    <Container>
      {statusCode ? (
        `An error ${statusCode} occurred on server`
      ) : (
        <div>
          <h1>404</h1>
        </div>
      )}
    </Container>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
