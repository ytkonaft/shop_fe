import Button from "components/Button";
const Home = ({ props }) => {
  return (
    <div>
      <h1>Home page</h1>
      <Button>Main</Button>
      <Button active={true}>Main</Button>
    </div>
  );
};

export default Home;
