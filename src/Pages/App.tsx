import React from "react";
import BodyParagraph from "../Components/BodyParagraph";
import Container from "../Components/Container";
import Heading from "../Components/Heading";

const App = () => (
  <Container>
    <Heading text={"My React TS App"} />

    <BodyParagraph
      text={`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Iusto veritatis autem dignissimos nam aut est? 
        Dolorem optio maxime aut tempore.`}
    />
  </Container>
);

export default App;
