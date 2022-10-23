import styled from "styled-components";
import New1 from "./Posts";

const Main = (props) => {
  return (
    <Container>
      <New1 />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;
