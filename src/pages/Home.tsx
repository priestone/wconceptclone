import styled from "styled-components";
import Banner from "../components/Banner";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
    </Container>
  );
};

export default Home;
